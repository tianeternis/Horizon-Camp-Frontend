import Button from "@/components/buttons/Button";
import { setCartItemsQuantity } from "@/redux/reducer/cartSlide";
import { updateVariantOfCart } from "@/services/cartService";
import { getVariantsByProductID } from "@/services/variantService";
import StatusCodes from "@/utils/status/StatusCodes";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const ChangeVariantsModal = ({
  show = false,
  onClose = () => {},
  cartItem = {},
  refetch = () => {},
}) => {
  const { t } = useTranslation();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [variants, setVariants] = useState([]);

  const [selectedColor, setSelectedColor] = useState({});
  const [selectedSize, setSelectedSize] = useState({});

  const variant = useMemo(() => {
    const colorID = selectedColor?._id;
    const sizeID = selectedSize?._id;

    const variant = variants?.find(
      (item) => colorID === item?.color?._id && sizeID === item?.size?._id,
    );
    return variant
      ? {
          _id: variant?._id,
          productID: variant?.productID,
          quantity: variant?.quantity,
        }
      : null;
  }, [selectedColor, setSelectedSize, variants]);

  useEffect(() => {
    if (cartItem?.productID) {
      const fetchVariants = async () => {
        const res = await getVariantsByProductID(cartItem?.productID);

        if (res && res.EC === StatusCodes.SUCCESS) {
          const data = res.DT;

          const newColors = [],
            newSizes = [];
          data?.forEach((item) => {
            if (item?.color?._id) {
              newColors.push(item?.color);
            }

            if (item?.size?._id) {
              newSizes.push(item?.size);
            }
          });

          setVariants(data);
          setColors(newColors);
          setSizes(newSizes);
        }
      };

      fetchVariants();
      setSelectedColor(cartItem?.color);
      setSelectedSize(cartItem?.size);
    }
  }, []);

  const handleClose = (e, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") return;
    onClose();
  };

  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };

  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };

  const user = useSelector((state) => state.user.account);
  const dispatch = useDispatch();

  const handleSubmitVariants = async () => {
    if (user?._id && variant?._id) {
      const res = await updateVariantOfCart(user?._id, {
        variantID: variant?._id,
        detailID: cartItem?.detailID,
      });

      if (res && res.EC === StatusCodes.SUCCESS) {
        toast.success(res.EM);
        handleClose();
        refetch();

        if (res.DT && "cartItemsQuantity" in res.DT) {
          dispatch(
            setCartItemsQuantity({ quantity: res.DT?.cartItemsQuantity }),
          );
        }
      }

      if (res && res.EC === StatusCodes.ERRROR) {
        toast.error(res.EM);
      }
    }
  };

  return (
    <div>
      <Dialog
        open={show}
        onClose={handleClose}
        fullScreen={fullScreen}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle
          sx={{
            fontFamily: "var(--font-main)",
            padding: "24px",
          }}
        >
          <div className="text-base font-semibold sm:text-lg">
            {t("cart.change-variants.title")}
          </div>
          <div className="mt-2 text-xs text-gray-800 sm:text-sm">
            {cartItem?.name}
          </div>
        </DialogTitle>
        <DialogContent sx={{ padding: "0 24px" }}>
          <div className="space-y-4">
            <div className="space-y-8">
              {colors && colors?.length > 0 && (
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-3 text-13px text-gray-600 sm:text-15px">
                    {t("cart.change-variants.color")}
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-wrap gap-4">
                      {colors.map((color, i) => (
                        <div
                          key={`product-variant-color-${i}-${color?._id}`}
                          className="w-fit"
                          onClick={() => handleSelectColor(color)}
                        >
                          <div
                            className={`relative flex cursor-pointer items-center justify-center gap-2 rounded-sm border border-solid border-gray-300 px-3 py-2 text-black hover:border-primary hover:text-primary ${selectedColor?._id === color?._id ? "border-primary text-primary after:absolute after:bottom-0 after:right-0 after:h-0 after:w-0 after:border-b-[12px] after:border-l-[12px] after:border-solid after:border-b-primary after:border-l-transparent" : ""}`}
                          >
                            <span
                              style={{
                                background: color?.hex,
                                border: "1px solid #d1dbd5",
                              }}
                              className="block h-4 w-4 shrink-0 rounded-full"
                            ></span>
                            <span className="text-11px sm:text-xs">
                              {color?.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {sizes && sizes?.length > 0 && (
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-3 text-13px text-gray-600 sm:text-15px">
                    {t("cart.change-variants.size")}
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-wrap gap-4">
                      {sizes.map((size, i) => (
                        <div
                          key={`product-variant-size-${i}-${size?._id}`}
                          className="w-fit"
                          onClick={() => handleSelectSize(size)}
                        >
                          <div
                            className={`relative flex w-16 cursor-pointer items-center justify-center gap-2 rounded-sm border border-solid border-gray-300 py-2 text-black hover:border-primary hover:text-primary ${selectedSize?._id === size?._id ? "border-primary text-primary after:absolute after:bottom-0 after:right-0 after:h-0 after:w-0 after:border-b-[12px] after:border-l-[12px] after:border-solid after:border-b-primary after:border-l-transparent" : ""}`}
                          >
                            <span className="text-11px sm:text-xs">
                              {size?.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {variant && (
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-3"></div>
                <div className="col-span-9 text-sm">
                  {t("products.detail.remain_product", {
                    quantity: variant?.quantity,
                  })}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
        <DialogActions sx={{ padding: "24px" }}>
          <div className="flex justify-end gap-3 font-main">
            <Button
              onClick={handleClose}
              label={t("cart.change-variants.back")}
              buttonClass="rounded-md border border-gray-200 bg-white px-3 py-2 sm:px-6 text-13px sm:text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:py-2.5 "
            />
            <Button
              onClick={handleSubmitVariants}
              label={t("cart.change-variants.confirm")}
              buttonClass="rounded-md bg-main px-3 py-2 sm:px-6 text-13px sm:text-sm font-medium text-gray-900 hover:bg-primary text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-main/20 sm:py-2.5 "
            />
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ChangeVariantsModal;
