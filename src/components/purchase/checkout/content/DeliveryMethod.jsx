import { formatCurrency } from "@/utils/format/currency";
import { useTranslation } from "react-i18next";
import { TbTruckDelivery } from "react-icons/tb";
import ContentContainerLayout from "../layout/ContentContainerLayout";
import Radio from "../components/Radio";

const DeliveryMethod = ({}) => {
  const { t } = useTranslation();

  return (
    <ContentContainerLayout
      title={t("order.checkout.delivery-method.title")}
      icon={<TbTruckDelivery />}
    >
      <div className="p-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Radio id="checkout-delivery-radio" checked />
          <label
            htmlFor="checkout-delivery-radio"
            className="block w-full cursor-pointer text-13px text-black sm:text-sm"
          >
            <div className="flex items-center justify-between">
              <span>Giao hàng tiêu chuẩn</span>
              <span>{formatCurrency(15000)}</span>
            </div>
          </label>
        </div>
      </div>
    </ContentContainerLayout>
  );
};

export default DeliveryMethod;
