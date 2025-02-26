import ConfirmModal from "@/components/modals/ConfirmModal";
import RateModal from "@/components/purchase/details/RateModal";
import ReviewModal from "@/components/purchase/details/ReviewModal";
import { useDynamicTitle } from "@/hooks";
import { PATHS } from "@/routes";
import { cancelOrder, getOrderByID } from "@/services/orderService";
import { formatAddress } from "@/utils/format/address";
import { formatCurrency } from "@/utils/format/currency";
import { formatDateToHHMMDDMMYYYY } from "@/utils/format/date";
import StatusCodes from "@/utils/status/StatusCodes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaReceipt, FaShippingFast } from "react-icons/fa";
import { MdArrowBack, MdCancel } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const OrderDetails = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.order-details"));

  const params = useParams();

  const [order, setOrder] = useState();

  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showRateModal, setShowRateModal] = useState(false);

  const [loading, setLoading] = useState(false);

  const fetchOrder = async (id) => {
    const res = await getOrderByID(id);

    if (res && res.EC === StatusCodes.SUCCESS) {
      setOrder(res.DT);
    }
  };

  useEffect(() => {
    if (params?.id) {
      fetchOrder(params?.id);
    }
  }, [params?.id]);

  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const handleCancel = async () => {
    if (order) {
      setLoading(true);
      const res = await cancelOrder(order?._id);

      if (res && res.EC === StatusCodes.SUCCESS) {
        toast.success(res.EM);
        setShowCancelModal(false);
        await fetchOrder(order?._id);
      }

      if (res && res.EC === StatusCodes.ERRROR) {
        toast.error(res.EM);
      }
      setLoading(false);
    }
  };

  const handlePayOrder = async () => {
    console.log("pay order");
  };

  return (
    <div>
      <div className="divide-y divide-dotted divide-black/20 bg-white text-sm text-black">
        <div className="flex items-center justify-between p-5">
          <button
            className="flex cursor-pointer items-center gap-2 font-medium uppercase hover:text-primary"
            onClick={() => back()}
          >
            <MdArrowBack className="h-5 w-5" />
            <span>{t("order-details.back")}</span>
          </button>
          <div className="hidden divide-x divide-solid divide-black/50 sr-950:block">
            <span className="pr-3">
              <span className="uppercase">{t("order-details.order_ID")}.</span>{" "}
              {order?._id}
            </span>
            <span className="px-3 font-medium uppercase text-main">
              {order?.orderStatus}
            </span>
            <span className="pl-3 font-medium uppercase text-main">
              {order?.paymentStatus}
            </span>
          </div>
        </div>
        <div className="flex justify-end px-5 py-3 sm:justify-between md:justify-end sr-950:hidden">
          <span className="hidden sm:inline md:hidden">
            <span className="uppercase">{t("order-details.order_ID")}.</span>{" "}
            {order?._id}
          </span>
          <div className="divide-x divide-solid divide-black">
            <span className="px-3 font-medium text-main sr-530:uppercase">
              {order?.orderStatus}
            </span>
            <span className="pl-3 font-medium text-main sr-530:uppercase">
              {order?.paymentStatus}
            </span>
          </div>
        </div>
        <div className="flex justify-between px-5 py-3 sm:hidden md:flex sr-950:hidden">
          <span className="">{t("order-details.order_ID")}</span>
          <span>{order?._id}</span>
        </div>
        {order?.actions && order?.actions?.pay && (
          <div className="flex items-center justify-end bg-white px-5 py-4">
            <button
              className="w-40 rounded border border-solid border-gray-200 bg-gray-50 px-8 py-2.5 text-13px font-medium hover:bg-gray-100 sm:w-52"
              onClick={() => handlePayOrder()}
            >
              {t("order-details.payment")}
            </button>
          </div>
        )}
        {order?.rating?.hasRating && (
          <div className="flex items-center justify-end gap-4 bg-white p-4 px-5">
            {order?.rating && order?.rating?.hasRating && (
              <>
                {order?.rating?.rated && (
                  <button
                    className="w-40 rounded bg-main px-8 py-2.5 text-13px font-medium text-white hover:bg-primary sm:w-52"
                    onClick={() => setShowReviewModal(true)}
                  >
                    {t("order-details.view_rating")}
                  </button>
                )}
                {!order?.rating?.rated && (
                  <button
                    className="w-40 rounded bg-main px-8 py-2.5 text-13px font-medium text-white hover:bg-primary sm:w-52"
                    onClick={() => setShowRateModal(true)}
                  >
                    {t("order-details.rate")}
                  </button>
                )}
              </>
            )}
          </div>
        )}
        <div className="divide-y divide-solid divide-black/10 px-5">
          {order?.orderDetails?.map((detail, i) => {
            return (
              <div key={`order-detail-${i}-${detail?._id}`}>
                <Link
                  to={PATHS.productDetail({ "product-slug": detail?.slug })}
                >
                  <div className="flex gap-4 py-5">
                    <div className="h-16 w-16 shrink-0 sr-530:h-20 sr-530:w-20">
                      <img
                        src={detail?.image}
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex grow flex-col justify-between overflow-hidden text-sm sr-530:flex-row sr-530:items-center sr-530:gap-6">
                      <div className="sr-530:space-y-1">
                        <div className="font-medium max-sr-530:truncate sr-530:line-clamp-2">
                          {detail?.name}
                        </div>
                        <div className="hidden text-xs text-gray-500 sr-530:block">
                          {(() => {
                            let variant = [];
                            if (detail?.color) variant.push(detail?.color);
                            if (detail?.size) variant.push(detail?.size);

                            return variant.join(", ");
                          })()}
                        </div>
                      </div>
                      <div className="sm:flex sm:gap-6">
                        <div className="flex shrink-0 flex-col items-end gap-2 sr-530:flex-col-reverse sr-530:gap-0">
                          <span className="mt-2 hidden font-medium text-main sr-530:inline">
                            {formatCurrency(
                              +detail?.discountedPrice * +detail?.quantity,
                            )}
                          </span>
                          <div className="flex w-full items-center justify-between text-11px sr-530:w-fit sr-530:text-sm">
                            <span className="sr-530:hidden">
                              {(() => {
                                let variant = [];
                                if (detail?.color) variant.push(detail?.color);
                                if (detail?.size) variant.push(detail?.size);

                                return variant.join(", ");
                              })()}
                            </span>
                            <span>x{detail?.quantity}</span>
                          </div>
                          <span>
                            {detail?.discount > 0 && (
                              <span className="me-2 text-13px text-gray-600 line-through">
                                {formatCurrency(detail?.price)}
                              </span>
                            )}
                            <span className="font-medium text-main sr-530:text-black">
                              {formatCurrency(detail?.discountedPrice)}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="space-y-3 p-5">
          <p className="text-lg font-medium">
            {t("order-details.delivery_address")}
          </p>
          <div className="flex flex-col divide-y divide-solid divide-black/10 lg:flex-row lg:divide-x lg:divide-y-0">
            <div className="flex-1 space-y-2 pb-4 lg:pb-0 lg:pr-4">
              <p className="pb-2.5 font-medium">{order?.address?.fullName}</p>
              <p className="text-gray-600">{order?.address?.phone}</p>
              <p className="text-gray-600">
                {order?.address &&
                  formatAddress({
                    province: order?.address?.provinceName,
                    district: order?.address?.districtName,
                    ward: order?.address?.wardName,
                    details: order?.address?.detailAddress,
                  })}
              </p>
              <p className="text-gray-600">
                {t("order-details.notes")}: {order?.notes}
              </p>
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex flex-1 gap-4 pt-4 lg:pl-4 lg:pt-0">
                <FaReceipt className="h-5 w-5 pt-1 text-blue-500" />
                <div className="grow space-y-2 pt-1 text-13px">
                  <p className="pb-1">
                    {formatDateToHHMMDDMMYYYY(order?.orderDate)}
                  </p>
                  <p className="text-blue-500">
                    {t("order-details.order_placed")}
                  </p>
                </div>
              </div>
              {order?.deliveryDate && (
                <div className="flex flex-1 gap-4 pt-4 lg:pl-4 lg:pt-0">
                  <FaShippingFast className="h-5 w-5 pt-1 text-green-500" />
                  <div className="grow space-y-2 pt-1 text-13px">
                    <p className="pb-1">
                      {" "}
                      {formatDateToHHMMDDMMYYYY(order?.deliveryDate)}
                    </p>
                    <p className="text-green-500">
                      {t("order-details.order_delivered")}
                    </p>
                  </div>
                </div>
              )}
              {order?.cancelDate && (
                <div className="flex flex-1 gap-4 pt-4 lg:pl-4 lg:pt-0">
                  <MdCancel className="h-5 w-5 pt-1 text-red-500" />
                  <div className="grow space-y-2 pt-1 text-13px">
                    <p className="pb-1">
                      {" "}
                      {formatDateToHHMMDDMMYYYY(order?.cancelDate)}
                    </p>
                    <p className="text-red-500">
                      {t("order-details.order_canceled")}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="divide-y divide-dotted divide-black/20 bg-white text-13px">
          <div className="flex divide-x divide-dotted divide-black/20">
            <div className="flex w-3/5 shrink-0 items-center justify-end px-5 py-4 text-right text-gray-600 lg:w-2/3">
              {t("order-details.payment_method")}
            </div>
            <div className="flex grow items-center justify-end px-5 py-4 text-right">
              {order?.paymentMethod}
            </div>
          </div>
          <div className="flex divide-x divide-dotted divide-black/20">
            <div className="flex w-3/5 shrink-0 items-center justify-end px-5 py-4 text-right text-gray-600 lg:w-2/3">
              {t("order-details.merchandise_subtotal")}
            </div>
            <div className="flex grow items-center justify-end px-5 py-4 text-right">
              {formatCurrency(order?.totalPrice)}
            </div>
          </div>
          <div className="flex divide-x divide-dotted divide-black/20">
            <div className="flex w-3/5 shrink-0 items-center justify-end px-5 py-4 text-right text-gray-600 lg:w-2/3">
              {t("order-details.shipping_fee")}
            </div>
            <div className="flex grow items-center justify-end px-5 py-4 text-right">
              {formatCurrency(order?.shippingFee)}
            </div>
          </div>
          <div className="flex divide-x divide-dotted divide-black/20">
            <div className="flex w-3/5 shrink-0 items-center justify-end px-5 py-4 text-right text-gray-600 lg:w-2/3">
              {t("order-details.order_total")}
            </div>
            <div className="flex grow items-center justify-end px-5 py-4 text-right text-base font-semibold text-main sm:text-2xl">
              {formatCurrency(order?.orderTotal)}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end p-5 sr-530:justify-between">
          <span
            className={`text-xs text-gray-600 ${order?.actions?.cancel ? "hidden sr-530:inline" : ""} `}
          >
            {t("order-details.thanks")}
          </span>
          {order?.actions?.cancel && (
            <button
              className="w-40 rounded bg-red-600 px-8 py-2.5 text-13px font-medium text-white hover:bg-red-700 sm:w-52"
              onClick={() => setShowCancelModal(true)}
            >
              {t("order-details.cancel_order")}
            </button>
          )}
        </div>
      </div>
      {order?.actions?.cancel && (
        <ConfirmModal
          show={showCancelModal}
          onClose={() => setShowCancelModal(false)}
          handleOk={handleCancel}
          content={t("purchase.delete_confirm", { id: order?._id })}
          loading={loading}
        />
      )}
      {
        // order?.rated === true &&
        showReviewModal && (
          <ReviewModal
            show={showReviewModal}
            onClose={() => setShowReviewModal(false)}
            // orderId={order?._id}
          />
        )
      }
      {
        // order?.rated === false &&
        showRateModal && (
          <RateModal
            show={showRateModal}
            onClose={() => setShowRateModal(false)}
            // products={order?.products}
            // orderId={order?._id}
            // refetchOrder={getOrder}
          />
        )
      }
    </div>
  );
};

export default OrderDetails;
