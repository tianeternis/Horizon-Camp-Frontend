import { formatCurrency } from "@/utils/format/currency";
import Checkbox from "@/components/inputs/Checkbox";
import { useTranslation } from "react-i18next";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useMemo, useState } from "react";
import _, { isEmpty } from "lodash";
import { removeProductsFromCart } from "@/services/cartService";
import StatusCodes from "@/utils/status/StatusCodes";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "@/components/notify";
import { useNavigate } from "react-router-dom";
import { PATHS } from "@/routes";
import { setCartItemsQuantity } from "@/redux/reducer/cartSlide";

const CartList = ({ carts = [], refetch = () => {} }) => {
  const { t } = useTranslation();

  const [selected, setSelected] = useState({});

  const totalPrice = useMemo(() => {
    return _.isEmpty(selected)
      ? 0
      : Object.values(selected).reduce((total, item) => {
          return total + (+item?.totalPrice || 0);
        }, 0);
  }, [selected]);

  const handleSelectAll = () => {
    setSelected((prev) => {
      if (Object.keys(prev).length === carts.length) {
        return {};
      } else {
        const newSelected = {};
        carts.forEach((cart) => (newSelected[cart?.detailID] = cart));
        return newSelected;
      }
    });
  };

  const handleSelectProduct = (cartItem) => {
    setSelected((prev) => {
      const newSelected = _.cloneDeep(prev);
      if (newSelected[cartItem?.detailID]) {
        delete newSelected[cartItem?.detailID];
      } else {
        newSelected[cartItem?.detailID] = cartItem;
      }
      return newSelected;
    });
  };

  const dispatch = useDispatch();
  const handleRemoveMultipleProducts = async (userID, data) => {
    const res = await removeProductsFromCart(userID, data);

    if (res && res.EC === StatusCodes.SUCCESS) {
      refetch();
      if (res.DT && res.DT?.cartItemsQuantity) {
        dispatch(setCartItemsQuantity({ quantity: res.DT?.cartItemsQuantity }));
      }
    }

    if (res && res.EC === StatusCodes.ERRROR) {
      toast.error(res.EM);
    }
  };

  const user = useSelector((state) => state.user.account);

  const handleDeleteProducts = async () => {
    const ids = Object.keys(selected);

    if (ids.length > 0 && user?._id) {
      await handleRemoveMultipleProducts(user?._id, { data: ids });
    } else {
      notify.show(t("cart.no_selection"));
    }
  };

  const handleDeleteProduct = async (cartItem) => {
    if (cartItem?.detailID && user?._id) {
      await handleRemoveMultipleProducts(user?._id, {
        data: [cartItem?.detailID],
      });
    }
  };

  const navigate = useNavigate();
  const handleCheckout = () => {
    if (isEmpty(selected)) {
      notify.show(t("cart.no_selection"));
    } else {
      const newSelection = Object.keys(selected);
      navigate(`${PATHS.checkout()}?items=${newSelection?.join(",")}`);
    }
  };

  return carts && carts.length > 0 ? (
    <div className="flex flex-col gap-2 sm:gap-3 sr-1150:flex-row">
      <div className="w-full space-y-2 sm:space-y-3 sr-1150:w-3/4">
        <div className="hidden grid-cols-12 items-center gap-2 rounded-sm bg-white px-6 py-4 text-sm font-semibold text-black sm:grid">
          <div className="col-span-5 flex items-center gap-6">
            <Checkbox
              checked={Object.values(selected).length === carts.length}
              onChange={() => handleSelectAll()}
            />
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
          return (
            <CartItem
              key={index}
              cartItem={cartItem}
              select={{
                isSelected: !!selected[cartItem?.detailID],
                onSelect: handleSelectProduct,
              }}
              onDelete={handleDeleteProduct}
              refetch={refetch}
            />
          );
        })}
      </div>
      <div className="sticky bottom-0 w-full shrink-0 before:absolute before:-top-3 before:left-0 before:h-3 before:w-full before:bg-gradient-to-b before:from-transparent before:to-black/5 sr-1150:static sr-1150:w-1/4 sr-1150:before:content-none">
        <div className="h-fit w-full divide-y divide-dashed divide-black/10 rounded-sm bg-white text-sm font-medium text-black">
          <div className="flex items-center justify-end p-3.5 sm:justify-between sm:p-4 sr-1150:flex-row-reverse">
            <span
              className="hidden cursor-pointer hover:font-semibold hover:text-red-500 sm:inline"
              onClick={() => handleDeleteProducts()}
            >
              {t("cart.delete")}
            </span>
            <span className="hidden sr-1150:inline">
              {t("cart.total_product", { total: Object.keys(selected).length })}
            </span>
            <div className="space-x-0.5 sm:space-x-2 sr-1150:hidden">
              <span>
                {t("cart.total_payment")}{" "}
                <span className="hidden sm:inline">
                  ({t("cart.total_product", { total: 0 })}):
                </span>
              </span>
              <span className="text-lg font-bold text-orange-500">
                {formatCurrency(totalPrice)}
              </span>
            </div>
          </div>
          <div className="hidden space-y-3.5 p-4 sr-1150:block">
            <div className="flex items-center justify-between">
              <span className="text-sm">{t("cart.total_price")}</span>
              <span className="text-sm">{formatCurrency(totalPrice)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">
                {t("cart.total_payment")}
              </span>
              <span className="text-lg font-bold text-orange-500">
                {formatCurrency(totalPrice)}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between p-3.5 sm:justify-end sm:p-4">
            <span
              className="cursor-pointer hover:font-semibold hover:text-red-500 sm:hidden"
              onClick={() => handleDeleteProducts()}
            >
              {t("cart.delete")}
            </span>
            <button
              className="w-fit rounded-sm bg-main px-4 py-2 text-center font-semibold text-white hover:bg-primary sm:px-10 sm:py-2.5 sr-1150:w-full"
              onClick={() => handleCheckout()}
            >
              {t("cart.order")}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <EmptyCart />
  );
};

export default CartList;
