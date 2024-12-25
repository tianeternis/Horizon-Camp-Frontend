import { useDynamicTitle } from "@/hooks";
import { useTranslation } from "react-i18next";

const Cart = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.cart"));

  return <div>Cart </div>;
};

export default Cart;
