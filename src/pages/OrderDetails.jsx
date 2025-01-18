import { ORDER_STATUS, PAYMENT_METHOD, PAYMENT_STATUS } from "@/constants";
import { useDynamicTitle } from "@/hooks";
import { PATHS } from "@/routes";
import { formatAddress } from "@/utils/format/address";
import { formatCurrency } from "@/utils/format/currency";
import { formatDateToDDMMYYYY } from "@/utils/format/date";
import { useTranslation } from "react-i18next";
import { FaReceipt, FaShippingFast } from "react-icons/fa";
import { MdArrowBack, MdCancel } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const order = {
  _id: "0123456789lslalka",
  orderStatus: "Chờ xác nhận",
  paymentStatus: true,
  paymentMethod: "Thanh toán qua VNPay",
  address: {
    fullname: "Nguyễn Thiên Vũ",
    phone: "0123456789",
    province: "Cần Thơ",
    district: "Phường Xuân Khánh",
    ward: "Quận Ninh Kiều",
    details: "Nguyễn Văn Cừ",
  },
  notes: "Giao buổi trưa nha!!!",
  orderDate: new Date(),
  deliveryDate: new Date(),
  updatedAt: new Date(),
  products: [
    {
      _id: 1,
      image:
        "https://bizweb.dktcdn.net/100/440/011/products/sp16-4.jpg?v=1634894750800",
      name: "Thảm dã ngoại, bạt trải picnic họa tiết caro chống thấm nước gấp gọn tiện lợi K148",
      quantity: 1,
      discountedPrice: 90000,
      discount: 10,
      price: 1000000,
    },
  ],
  totalPrice: 500000,
  shippingFee: 10000,
  discountedAmount: 100000,
  orderTotal: 520000,
};

const OrderDetails = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.order-details"));

  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  const handleBuyAgain = async () => {};

  const handlePayOrder = async () => {};

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
              {order?.paymentStatus === PAYMENT_STATUS.NOT_YET_PAID
                ? t("order-details.not_paid")
                : t("order-details.paid")}
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
              {order?.paymentStatus === PAYMENT_STATUS.NOT_YET_PAID
                ? t("order-details.notPaid")
                : t("order-details.paid")}
            </span>
          </div>
        </div>
        <div className="flex justify-between px-5 py-3 sm:hidden md:flex sr-950:hidden">
          <span className="">{t("order-details.order_ID")}</span>
          <span>{order?._id}</span>
        </div>
        {/* {order?.orderStatus === ORDER_STATUS.pending &&
          order?.paymentMethod === PAYMENT_METHOD.VNPAY &&
          order?.paymentStatus === PAYMENT_STATUS.NOT_YET_PAID && ( */}
        <div className="flex items-center justify-end bg-white px-5 py-4">
          <button
            className="w-40 rounded border border-solid border-gray-200 bg-gray-50 px-8 py-2.5 text-13px font-medium hover:bg-gray-100 sm:w-52"
            onClick={() => handlePayOrder()}
          >
            {t("order-details.payment")}
          </button>
        </div>
        {/* )} */}
        {/* {(order?.orderStatus === ORDER_STATUS.completed ||
          order?.orderStatus === ORDER_STATUS.canceled) && ( */}
        <div className="flex items-center justify-end gap-4 bg-white p-4 px-5">
          <button
            className="w-40 rounded border border-solid border-gray-200 bg-gray-50 px-8 py-2.5 text-13px font-medium hover:bg-gray-100 sm:w-52"
            onClick={() => handleBuyAgain()}
          >
            {t("order-details.buy_again")}
          </button>
          {/* {order?.orderStatus === ORDER_STATUS.completed && ( */}
          <>
            {/* {order?.rated === true && ( */}
            <button
              className="w-40 rounded bg-main px-8 py-2.5 text-13px font-medium text-white hover:bg-primary sm:w-52"
              // onClick={() => setIsVisibleReviewModal(true)}
            >
              {t("order-details.view_rating")}
            </button>
            {/* )} */}
            {/* {order?.rated === false && ( */}
            <button
              className="w-40 rounded bg-main px-8 py-2.5 text-13px font-medium text-white hover:bg-primary sm:w-52"
              // onClick={() => setIsVisibleRateModal(true)}
            >
              {t("order-details.rate")}
            </button>
            {/* )} */}
          </>
          {/* )} */}
        </div>
        {/* )} */}
        <div className="divide-y divide-solid divide-black/10 px-5">
          {order?.products?.map((product, i) => {
            return (
              <div key={`order-detail-${i}-${product?._id}`}>
                <Link to={PATHS.productDetail({ id: product?._id })}>
                  <div className="flex gap-4 py-5">
                    <div className="h-16 w-16 shrink-0 sr-530:h-20 sr-530:w-20">
                      <img
                        src={product?.image}
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex grow flex-col justify-between overflow-hidden text-sm sr-530:flex-row sr-530:items-center sr-530:gap-6">
                      <div className="sr-530:space-y-1">
                        <div className="font-medium max-sr-530:truncate sr-530:line-clamp-2">
                          {product?.name}
                        </div>
                        <div className="hidden text-xs text-gray-500 sr-530:block">
                          Màu xám, 2XL
                        </div>
                      </div>
                      <div className="sm:flex sm:gap-6">
                        <div className="flex shrink-0 flex-col items-end gap-2 sr-530:flex-col-reverse sr-530:gap-0">
                          <span className="mt-2 hidden font-medium text-main sr-530:inline">
                            {formatCurrency(
                              +product?.discountedPrice * +product?.quantity,
                            )}
                          </span>
                          {/* <span>x{product?.quantity}</span> */}
                          <div className="flex w-full items-center justify-between text-11px sr-530:w-fit sr-530:text-sm">
                            <span className="sr-530:hidden">Màu xám, 2XL</span>
                            <span>x{product?.quantity}</span>
                          </div>
                          <span>
                            {product?.discount > 0 && (
                              <span className="me-2 text-13px text-gray-600 line-through">
                                {formatCurrency(product?.price)}
                              </span>
                            )}
                            <span className="font-medium text-main sr-530:text-black">
                              {formatCurrency(product?.discountedPrice)}
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
              <p className="pb-2.5 font-medium">{order?.address?.fullname}</p>
              <p className="text-gray-600">{order?.address?.phone}</p>
              <p className="text-gray-600">
                {order?.address &&
                  formatAddress({
                    province: order?.address?.province,
                    district: order?.address?.district,
                    ward: order?.address?.ward,
                    details: order?.address?.details,
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
                    {formatDateToDDMMYYYY(order?.orderDate)}
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
                      {formatDateToDDMMYYYY(order?.deliveryDate)}
                    </p>
                    <p className="text-green-500">
                      {t("order-details.order_delivered")}
                    </p>
                  </div>
                </div>
              )}
              {/* {order?.orderStatus === ORDER_STATUS.canceled && ( */}
              <div className="flex flex-1 gap-4 pt-4 lg:pl-4 lg:pt-0">
                <MdCancel className="h-5 w-5 pt-1 text-red-500" />
                <div className="grow space-y-2 pt-1 text-13px">
                  <p className="pb-1">
                    {" "}
                    {formatDateToDDMMYYYY(order?.updatedAt)}
                  </p>
                  <p className="text-red-500">
                    {t("order-details.order_canceled")}
                  </p>
                </div>
              </div>
              {/* )} */}
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
          {order?.discountedAmount && (
            <div className="flex divide-x divide-dotted divide-black/20">
              <div className="flex w-3/5 shrink-0 items-center justify-end px-5 py-4 text-right text-gray-600 lg:w-2/3">
                {t("order-details.voucher_applied")}
              </div>
              <div className="flex grow items-center justify-end px-5 py-4 text-right">
                {formatCurrency(order?.discountedAmount)}
              </div>
            </div>
          )}
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
            className={`text-xs text-gray-600 ${order?.orderStatus === ORDER_STATUS.pending ? "hidden sr-530:inline" : ""}`}
          >
            {t("order-details.thanks")}
          </span>
          {order?.orderStatus === ORDER_STATUS.pending && (
            <button
              className="w-40 rounded bg-red-600 px-8 py-2.5 text-13px font-medium text-white hover:bg-red-700 sm:w-52"
              //   onClick={() => setShowCancelModal(true)}
            >
              {t("order-details.cancel_order")}
            </button>
          )}
        </div>
      </div>
      {/* {order?.orderStatus === ORDER_STATUS.pending && (
        <CancelModal
          show={showCancelModal}
          setShow={setShowCancelModal}
          data={order}
          refetchOrder={getOrder}
        />
      )}
      {order?.rated === true && isVisibleReviewModal && (
        <ReviewModal
          show={isVisibleReviewModal}
          handleClose={() => setIsVisibleReviewModal(false)}
          orderId={order?._id}
        />
      )}
      {order?.rated === false && isVisibleRateModal && (
        <RateModal
          show={isVisibleRateModal}
          handleClose={() => setIsVisibleRateModal(false)}
          dishes={order?.dishes}
          orderId={order?._id}
          refetchOrder={getOrder}
        />
      )} */}
    </div>
  );
};

export default OrderDetails;
