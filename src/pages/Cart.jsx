import CartList from "@/components/cart/CartList";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const Cart = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.cart"));

  return (
    <BodyLayout>
      <div className="space-y-6">
        <p className="text-lg font-bold uppercase text-black">
          {t("cart.title")}
        </p>
        <div>
          <CartList
          // carts={cartList}
          />
        </div>
      </div>
    </BodyLayout>
  );
};

export default Cart;
