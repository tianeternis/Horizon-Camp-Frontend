import { useDynamicTitle } from "@/hooks";
import { useTranslation } from "react-i18next";

const DeliveryAndReceipt = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.delivery-and-receipt"));

  return <div>Delivery And Receipt </div>;
};

export default DeliveryAndReceipt;
