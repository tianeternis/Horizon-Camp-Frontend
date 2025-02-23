import { formatCurrency } from "@/utils/format/currency";
import { useTranslation } from "react-i18next";
import { MdOutlineReceiptLong } from "react-icons/md";
import ContentContainerLayout from "../layout/ContentContainerLayout";

const CheckoutDetail = ({ shippingFee = 0 }) => {
  const { t } = useTranslation();

  return (
    <ContentContainerLayout
      title={t("order.checkout.checkout-detail.title")}
      icon={<MdOutlineReceiptLong />}
    >
      <div className="divide-y divide-dashed divide-gray-300">
        <div className="space-y-2.5 p-4 sm:px-6">
          <div className="flex items-center justify-between text-13px sm:text-sm">
            <span>
              {t("order.checkout.checkout-detail.merchandise_subtotal")}
            </span>
            <span className="font-medium">{formatCurrency(100000)}</span>
          </div>
          <div className="flex items-center justify-between text-13px sm:text-sm">
            <span>{t("order.checkout.checkout-detail.shipping_fee")}</span>
            <span className="font-medium">{formatCurrency(shippingFee)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-13px sm:text-sm">
              {t("order.checkout.checkout-detail.total_payment")}
            </span>
            <span className="text-lg font-bold text-primary sm:text-xl">
              {formatCurrency(100000)}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-end p-4 sm:px-6 sr-900:justify-between">
          <div className="hidden text-13px text-gray-500 sr-900:block">
            {t("order.checkout.checkout-detail.notes")}
          </div>
          <button className="w-full rounded-sm bg-main px-8 py-2.5 text-sm font-medium text-white hover:bg-primary sr-500:w-4/10 sm:w-3/10 sm:text-15px sr-900:w-2/10">
            {t("order.checkout.checkout-detail.place_order")}
          </button>
        </div>
      </div>
    </ContentContainerLayout>
  );
};

export default CheckoutDetail;
