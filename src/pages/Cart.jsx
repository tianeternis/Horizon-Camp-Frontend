import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const Cart = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.cart"));

  return <BodyLayout>Cart </BodyLayout>;
};

export default Cart;
