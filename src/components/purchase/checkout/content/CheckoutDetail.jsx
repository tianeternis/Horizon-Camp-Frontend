import { formatCurrency } from "@/utils/format/currency";
import { useTranslation } from "react-i18next";
import { MdOutlineReceiptLong } from "react-icons/md";
import ContentContainerLayout from "../layout/ContentContainerLayout";

const CheckoutDetail = ({}) => {
  const { t } = useTranslation();

  return (
    <ContentContainerLayout
      title={t("order.checkout.checkout-detail.title")}
      icon={<MdOutlineReceiptLong />}
    >
      <div className="divide-y divide-dashed divide-gray-300">
        <div className="space-y-2.5 px-6 py-4">
          <div className="flex items-center justify-between text-sm">
            <span>
              {t("order.checkout.checkout-detail.merchandise_subtotal")}
            </span>
            <span className="font-medium">{formatCurrency(100000)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>{t("order.checkout.checkout-detail.shipping_fee")}</span>
            <span className="font-medium">{formatCurrency(100000)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">
              {t("order.checkout.checkout-detail.total_payment")}
            </span>
            <span className="text-xl font-bold text-primary">
              {formatCurrency(100000)}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-sm text-gray-500">
            {t("order.checkout.checkout-detail.notes.note_1")}
          </div>
          <button className="w-2/10 rounded-sm bg-main px-8 py-2.5 text-15px font-medium text-white hover:bg-primary">
            {t("order.checkout.checkout-detail.place_order")}
          </button>
        </div>
      </div>
    </ContentContainerLayout>
  );
};

export default CheckoutDetail;
