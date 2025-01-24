import { formatCurrency } from "@/utils/format/currency";
import Checkbox from "@/components/inputs/Checkbox";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CartItem from "./CartItem";

const CartList = ({
  carts = [
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
  ],
}) => {
  const { t } = useTranslation();

  return carts && carts.length > 0 ? (
    <div className="flex flex-col gap-2 sm:gap-3 sr-1150:flex-row">
      <div className="w-full space-y-2 sm:space-y-3 sr-1150:w-3/4">
        <div className="hidden grid-cols-12 items-center gap-2 rounded-sm bg-white px-6 py-4 text-sm font-semibold text-black sm:grid">
          <div className="col-span-5 flex items-center gap-6">
            <Checkbox />
            <span>{t("cart.product")}</span>
          </div>
          <span className="col-span-3 text-center lg:col-span-2">
            {t("cart.price")}
          </span>
          <span className="col-span-3 text-center lg:col-span-2">
            {t("cart.quantity")}
          </span>
          <span className="col-span-2 hidden text-center lg:block">
            {t("cart.total_price")}
          </span>
          <span className="col-span-1 text-center">#</span>
        </div>

        {carts.map((cartItem, index) => {
          return <CartItem key={index} cartItem={cartItem} />;
        })}
      </div>
      <div className="sticky bottom-0 w-full shrink-0 before:absolute before:-top-3 before:left-0 before:h-3 before:w-full before:bg-gradient-to-b before:from-transparent before:to-black/5 sr-1150:static sr-1150:w-1/4 sr-1150:before:content-none">
        <div className="h-fit w-full divide-y divide-dashed divide-black/10 rounded-sm bg-white text-sm font-medium text-black">
          <div className="flex items-center justify-end p-3.5 sm:justify-between sm:p-4 sr-1150:flex-row-reverse">
            <span
              className="hidden cursor-pointer hover:text-red-500 sm:inline"
              onClick={() => handleDeleteAll()}
            >
              {t("cart.delete")}
            </span>
            <span className="hidden sr-1150:inline">
              {t("cart.total_product", { total: 0 })}
            </span>
            <div className="space-x-0.5 sm:space-x-2 sr-1150:hidden">
              <span>
                {t("cart.total_payment")}{" "}
                <span className="hidden sm:inline">
                  ({t("cart.total_product", { total: 0 })}):
                </span>
              </span>
              <span className="text-lg font-bold text-orange-500">
                {(() => {
                  const totalPrice = carts.reduce((total, cartItem) => {
                    return total + cartItem.totalPrice;
                  }, 0);

                  return formatCurrency(totalPrice);
                })()}
              </span>
            </div>
          </div>
          <div className="hidden space-y-3.5 p-4 sr-1150:block">
            <div className="flex items-center justify-between">
              <span className="text-sm">{t("cart.total_price")}</span>
              <span className="text-sm">
                {(() => {
                  const totalPrice = carts.reduce((total, cartItem) => {
                    return total + cartItem.totalPrice;
                  }, 0);

                  return formatCurrency(totalPrice);
                })()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">
                {t("cart.total_payment")}
              </span>
              <span className="text-lg font-bold text-orange-500">
                {(() => {
                  const totalPrice = carts.reduce((total, cartItem) => {
                    return total + cartItem.totalPrice;
                  }, 0);

                  return formatCurrency(totalPrice);
                })()}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between p-3.5 sm:justify-end sm:p-4">
            <span
              className="cursor-pointer hover:text-red-500 sm:hidden"
              // onClick={() => handleDeleteAll()}
            >
              {t("cart.delete")}
            </span>
            <Link
              // to={"/payment"}
              className="w-fit rounded-md bg-main px-4 py-2 text-center font-semibold text-white hover:bg-primary sm:px-10 sm:py-2.5 sr-1150:w-full"
              // onClick={() => handleOrder()}
            >
              {t("cart.order")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex w-full flex-col items-center justify-center gap-4 pb-6">
      <img
        src={emptyCart}
        alt="Empty cart..."
        loading="lazy"
        className="w-36 object-contain sm:w-52"
      />
      <div className="text-black">
        <span className="hidden sm:inline">{t("cart.empty_cart")} </span>
        <Link
          //   to="/dish"
          className="rounded-md bg-white px-3 py-2.5 text-sm font-medium hover:bg-yellow-600 sm:bg-transparent sm:p-0 sm:text-base sm:font-semibold sm:text-main sm:hover:bg-transparent sm:hover:text-yellow-600"
        >
          {t("cart.add_to_cart")}
        </Link>
      </div>
    </div>
  );
};

export default CartList;
