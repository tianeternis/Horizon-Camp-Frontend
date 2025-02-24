import { formatCurrency } from "@/utils/format/currency";
import Checkbox from "@/components/inputs/Checkbox";
import QuantityInput from "@/components/inputs/QuantityInput";
import { PATHS } from "@/routes";
import { HiMiniXMark } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import _, { debounce } from "lodash";
import ChangeVariantsModal from "./ChangeVariantsModal";
import { updateQuantityOfCart } from "@/services/cartService";
import StatusCodes from "@/utils/status/StatusCodes";
import { toast } from "react-toastify";

const CartItem = ({
  cartItem = {},
  select = {
    isSelected: false,
    onSelect: (cartItem) => {},
  },
  onDelete = (item) => {},
  refetch = () => {},
}) => {
  const [showVariantsModal, setShowVariantsModal] = useState(false);

  const handleDelete = () => {
    onDelete(cartItem);
  };

  const changeQuantity = async (quantity, setQuantity) => {
    if (cartItem?.detailID && quantity) {
      const res = await updateQuantityOfCart(cartItem?.detailID, { quantity });

      if (res && res.EC === StatusCodes.SUCCESS) {
        toast.success(res.EM);
        refetch();
      }

      if (res && res.EC === StatusCodes.ERRROR) {
        toast.error(res.EM);
        setQuantity(cartItem?.quantity);
      }
    }
  };

  const changeQuantityByButton = debounce(changeQuantity, 300);

  return (
    <div>
      <div className="relative flex flex-nowrap gap-4 rounded-sm bg-white p-3.5 text-13px font-medium text-black sm:grid sm:grid-cols-12 sm:items-center sm:gap-2 sm:px-6 sm:py-4 sm:text-sm">
        <div className="flex items-center gap-3 sm:col-span-5 sm:gap-6">
          <Checkbox
            checked={select.isSelected}
            onChange={() => select.onSelect(cartItem)}
          />
          <div className="sm:flex sm:flex-nowrap sm:items-center sm:gap-4">
            <div className="h-18 w-18 shrink-0 md:h-20 md:w-20 lg:h-22 lg:w-22">
              <Link
                to={PATHS.productDetail({ "product-slug": cartItem?.slug })}
              >
                <img
                  src={cartItem?.image}
                  alt="..."
                  loading="lazy"
                  className="w-auto object-cover"
                />
              </Link>
            </div>
            <div className="hidden space-y-1 sm:block">
              <span className="line-clamp-2 duration-300 hover:text-primary">
                <Link
                  to={PATHS.productDetail({ "product-slug": cartItem?.slug })}
                >
                  {cartItem?.name}
                </Link>
              </span>
              {(() => {
                const color = cartItem?.color?.name;
                const size = cartItem?.size?.name;

                if (color || size) {
                  const variant = [];

                  if (color) variant.push(color);
                  if (size) variant.push(size);

                  return (
                    <button
                      className="flex items-center gap-0.5 text-gray-500 hover:text-gray-800"
                      onClick={() => setShowVariantsModal(true)}
                    >
                      <span className="text-xs">{variant.join(",")}</span>
                      <IoMdArrowDropdown className="h-4 w-4" />
                    </button>
                  );
                } else {
                  return null;
                }
              })()}
            </div>
          </div>
        </div>
        <div className="grid grow grid-cols-12 gap-2 sm:col-span-6">
          <div className="col-span-12 space-y-1 sm:hidden">
            <div className="pr-3">
              <span className="line-clamp-1 duration-300 hover:text-primary">
                <Link
                  to={PATHS.productDetail({ "product-slug": cartItem?.slug })}
                >
                  {cartItem?.name}
                </Link>
              </span>
            </div>
            {(() => {
              const color = cartItem?.color?.name;
              const size = cartItem?.size?.name;

              if (color || size) {
                const variant = [];

                if (color) variant.push(color);
                if (size) variant.push(size);

                return (
                  <button
                    className="flex items-center gap-0.5 text-gray-500 hover:text-gray-800"
                    onClick={() => setShowVariantsModal(true)}
                  >
                    <span className="text-11px">{variant.join(",")}</span>
                    <IoMdArrowDropdown className="h-4 w-4" />
                  </button>
                );
              } else {
                return null;
              }
            })()}
          </div>
          <div className="col-span-12 flex flex-row-reverse justify-between sm:grid sm:grid-cols-12 sm:items-center sm:justify-center sm:gap-2">
            <div className="flex flex-col items-center justify-center sm:col-span-6 md:space-x-2 lg:col-span-4">
              {cartItem?.discount > 0 && (
                <span className="hidden font-normal text-gray-300 line-through md:inline">
                  {formatCurrency(cartItem?.price)}
                </span>
              )}
              <span className="font-semibold text-black">
                {formatCurrency(cartItem?.discountedPrice)}
              </span>
            </div>

            <div className="flex items-end justify-end sm:col-span-6 sm:items-center sm:justify-center lg:col-span-4">
              <QuantityInput
                value={cartItem?.quantity}
                onButtonClick={changeQuantityByButton}
                onInputBlur={changeQuantity}
                rootClass="!h-6 sm:!h-8"
                buttonClass="!w-6 sm:!w-8"
                inputClass="w-8 sm:w-12 text-xs sm:text-sm"
              />
            </div>
            <div className="col-span-4 hidden text-center font-semibold text-primary lg:block">
              {formatCurrency(cartItem.totalPrice)}
            </div>
          </div>
        </div>
        <div className="absolute right-2 top-2 flex justify-center sm:static sm:col-span-1">
          <span
            className="cursor-pointer text-gray-300 hover:text-primary"
            onClick={() => handleDelete()}
          >
            <HiMiniXMark className="h-5 w-5" />
          </span>
        </div>
      </div>
      {showVariantsModal && (
        <ChangeVariantsModal
          show={showVariantsModal}
          onClose={() => setShowVariantsModal(false)}
          cartItem={cartItem}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default CartItem;
