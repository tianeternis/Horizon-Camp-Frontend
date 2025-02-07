import { ORDER_STATUS, PAYMENT_METHOD, PAYMENT_STATUS } from "@/constants";
import { PATHS } from "@/routes";
import { formatCurrency } from "@/utils/format/currency";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const PurchaseItem = ({
  item = {
    _id: "01234hjjsbsbbss164",
    orderStatus: "Chờ xác nhận",
    paymentStatus: false,
    paymentMethod: "Thanh toán khi nhận hàng",
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
    orderTotal: 150000,
  },
  handleCancel = (data) => {},
}) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(PATHS.orderDetails({ id: item?._id }));
  };

  const handleBuyAgain = async () => {};

  const handlePayOrder = async () => {};

  return (
    <div className="divide-y divide-dotted divide-black/20 rounded-sm bg-white text-sm text-black">
      <div className="flex items-center justify-end px-4 py-4 sm:justify-between sm:px-6 md:justify-end sr-950:justify-between">
        <span className="hidden text-13px sm:inline md:hidden sr-950:inline">
          <span className="font-semibold uppercase">
            {t("purchase.order_ID")}.{" "}
          </span>
          <span>{item?._id}</span>
        </span>
        <div className="divide-x divide-solid divide-black/30 text-13px sr-530:text-sm">
          <span className="pr-2 font-semibold uppercase text-primary">
            {item?.orderStatus}
          </span>
          <span className="pl-2 font-semibold uppercase text-primary">
            {item?.paymentStatus === PAYMENT_STATUS.NOT_YET_PAID
              ? t("order-details.not_paid")
              : t("order-details.paid")}
          </span>
        </div>
      </div>
      <div
        className="cursor-pointer divide-y divide-solid divide-black/10 px-4 sm:px-6"
        onClick={() => goToDetail()}
      >
        {item?.products?.slice(0, 2)?.map((product, index) => {
          return (
            <div
              key={`order-product-${index}-${product?._id}`}
              className="flex gap-4 py-2.5"
            >
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
                <div className="flex flex-col items-end gap-2 sr-530:flex-col-reverse sr-530:gap-0">
                  <span className="mt-2 hidden font-medium text-primary sr-530:inline">
                    {formatCurrency(
                      +product?.discountedPrice * +product?.quantity,
                    )}
                  </span>
                  <div className="flex w-full items-center justify-between text-11px sr-530:w-fit sr-530:text-sm">
                    <span className="sr-530:hidden">Màu xám, 2XL</span>
                    <span>x{product?.quantity}</span>
                  </div>
                  <span>
                    {product?.discount && product?.discount > 0 ? (
                      <span className="me-2 text-13px text-gray-500 line-through">
                        {formatCurrency(product?.price)}
                      </span>
                    ) : (
                      <></>
                    )}
                    <span className="font-medium text-primary sr-530:text-black">
                      {formatCurrency(product?.discountedPrice)}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        <div className="py-2.5 text-center text-13px text-gray-500">
          {t("purchase.view_more")}
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#fffefa] px-4 py-3 sm:px-6">
        <span className="text-xs sr-530:text-13px">
          {item?.products?.length ?? 1} {t("purchase.product")}
        </span>
        <div className="flex items-center gap-1.5">
          <span>{t("purchase.order_total")}:</span>
          <span className="text-[15px] font-semibold text-[#ff7a00] sr-530:text-lg md:text-xl">
            {formatCurrency(item?.orderTotal)}
          </span>
        </div>
      </div>
      {/* {[
        ORDER_STATUS.pending,
        ORDER_STATUS.completed,
        ORDER_STATUS.canceled,
      ].includes(item?.orderStatus) && ( */}
      <div className="flex items-center justify-end gap-3 bg-[#fffefa] px-4 py-3 sm:px-6">
        {/* {(item?.orderStatus === ORDER_STATUS.completed ||
            item?.orderStatus === ORDER_STATUS.canceled) && ( */}
        <button
          className="rounded bg-main px-4 py-2.5 text-13px font-medium text-white hover:bg-primary sr-530:px-8"
          onClick={() => handleBuyAgain()}
        >
          {t("purchase.buy_again")}
        </button>
        {/* )} */}
        {/* {item?.orderStatus === ORDER_STATUS.pending &&
            item?.paymentMethod === PAYMENT_METHOD.VNPAY &&
            item?.paymentStatus === PAYMENT_STATUS.NOT_YET_PAID && ( */}
        <button
          className="rounded border border-solid border-gray-200 bg-white px-4 py-2.5 text-13px font-medium text-gray-900 hover:bg-gray-50 sr-530:px-8"
          onClick={() => handlePayOrder()}
        >
          {t("purchase.payment")}
        </button>
        {/* )} */}
        {/* {item?.orderStatus === ORDER_STATUS.pending && ( */}
        <button
          className="rounded bg-main px-4 py-2.5 text-13px font-medium text-white hover:bg-primary sr-530:px-8"
          onClick={() => handleCancel(item)}
        >
          {t("purchase.cancel")}
        </button>
        {/* )} */}
      </div>
      {/* )} */}
    </div>
  );
};

export default PurchaseItem;
