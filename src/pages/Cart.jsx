import CartList from "@/components/cart/CartList";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { getProductsFromCart } from "@/services/cartService";
import StatusCodes from "@/utils/status/StatusCodes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Cart = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.cart"));

  const [carts, setCarts] = useState([]);

  const user = useSelector((state) => state.user.account);

  const fetchProductsFromCart = async (userID) => {
    const res = await getProductsFromCart(userID);

    if (res && res.EC === StatusCodes.SUCCESS) {
      const data = res.DT?.data;

      const newData = data?.map((item) => ({
        ...item,
        totalPrice: +item?.quantity * +item?.discountedPrice,
      }));

      setCarts(newData);
    }
  };

  useEffect(() => {
    if (user?._id) {
      fetchProductsFromCart(user?._id);
    }
  }, [user?._id]);

  return (
    <BodyLayout>
      <div className="space-y-6">
        <p className="text-lg font-bold uppercase text-black">
          {t("cart.title")}
        </p>
        <div>
          <CartList carts={carts} />
        </div>
      </div>
    </BodyLayout>
  );
};

export default Cart;
