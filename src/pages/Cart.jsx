import CartList from "@/components/cart/CartList";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const carts = [
  {
    _id: 1,
    image:
      "https://bizweb.dktcdn.net/100/440/011/products/sp16-4.jpg?v=1634894750800",
    name: "Thảm dã ngoại, bạt trải picnic họa tiết caro chống thấm nước gấp gọn tiện lợi K148",
    variant: "Màu xám, 2XL",
    quantity: 1,
    discountedPrice: 90000,
    discount: 10,
    price: 1000000,
    totalPrice: 500000,
  },
  {
    _id: 2,
    image:
      "https://bizweb.dktcdn.net/100/440/011/products/sp16-4.jpg?v=1634894750800",
    name: "Thảm dã ngoại, bạt trải picnic họa tiết caro chống thấm nước gấp gọn tiện lợi K148",
    variant: "Màu xám, 2XL",
    quantity: 1,
    discountedPrice: 90000,
    discount: 10,
    price: 1000000,
    totalPrice: 500000,
  },
];

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
          <CartList carts={carts} />
        </div>
      </div>
    </BodyLayout>
  );
};

export default Cart;
