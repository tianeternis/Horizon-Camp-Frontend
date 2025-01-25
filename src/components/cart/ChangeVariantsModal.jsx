import Button from "@/components/buttons/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const colors = [
  { _id: 1, name: "Đỏ", value: "#FF0000" },
  { _id: 2, name: "Xanh Lá", value: "#00FF00" },
  { _id: 3, name: "Xanh Dương", value: "#0000FF" },
  { _id: 4, name: "Vàng", value: "#FFFF00" },
  { _id: 5, name: "Tím", value: "#800080" },
  { _id: 6, name: "Xanh Ngọc", value: "#00FFFF" },
  { _id: 7, name: "Cam", value: "#FFA500" },
];

const sizes = [
  { _id: 1, value: "S" },
  { _id: 2, value: "M" },
  { _id: 3, value: "L" },
  { _id: 4, value: "XL" },
  { _id: 5, value: "XXL" },
];

const ChangeVariantsModal = ({
  show = false,
  onClose = () => {},
  product = {},
}) => {
  const { t } = useTranslation();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [selectedColor, setSelectedColor] = useState({});
  const [selectedSize, setSelectedSize] = useState({});

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

  const handleSubmitVariants = () => {
    console.log("submit variants", product, selectedColor, selectedSize);
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
            {product?.name}
          </div>
        </DialogTitle>
        <DialogContent sx={{ padding: "0 24px" }}>
          <div className="space-y-8">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-3 text-13px text-gray-600 sm:text-15px">
                {t("cart.change-variants.color")}
              </div>
              <div className="col-span-9">
                <div className="flex flex-wrap gap-4">
                  {colors &&
                    colors.length > 0 &&
                    colors.map((color, i) => (
                      <div
                        key={`product-variant-color-${i}-${color?._id}`}
                        className="w-fit"
                        onClick={() => handleSelectColor(color)}
                      >
                        <div
                          className={`relative flex cursor-pointer items-center justify-center gap-2 rounded-sm border border-solid border-gray-300 px-3 py-2 text-black hover:border-primary hover:text-primary ${selectedColor?._id === color?._id ? "border-primary text-primary after:absolute after:bottom-0 after:right-0 after:h-0 after:w-0 after:border-b-[12px] after:border-l-[12px] after:border-solid after:border-b-primary after:border-l-transparent" : ""}`}
                        >
                          <span
                            style={{ background: color?.value }}
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
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-3 text-13px text-gray-600 sm:text-15px">
                {t("cart.change-variants.size")}
              </div>
              <div className="col-span-9">
                <div className="flex flex-wrap gap-4">
                  {sizes &&
                    sizes.length > 0 &&
                    sizes.map((size, i) => (
                      <div
                        key={`product-variant-size-${i}-${size?._id}`}
                        className="w-fit"
                        onClick={() => handleSelectSize(size)}
                      >
                        <div
                          className={`relative flex w-16 cursor-pointer items-center justify-center gap-2 rounded-sm border border-solid border-gray-300 py-2 text-black hover:border-primary hover:text-primary ${selectedSize?._id === size?._id ? "border-primary text-primary after:absolute after:bottom-0 after:right-0 after:h-0 after:w-0 after:border-b-[12px] after:border-l-[12px] after:border-solid after:border-b-primary after:border-l-transparent" : ""}`}
                        >
                          <span className="text-11px sm:text-xs">
                            {size?.value}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
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
