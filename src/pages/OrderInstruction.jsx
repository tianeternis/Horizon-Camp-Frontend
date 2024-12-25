import { useDynamicTitle } from "@/hooks";
import { useTranslation } from "react-i18next";

const OrderInstrution = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.order-instruction"));

  return <div>Order Instrution </div>;
};

export default OrderInstrution;
