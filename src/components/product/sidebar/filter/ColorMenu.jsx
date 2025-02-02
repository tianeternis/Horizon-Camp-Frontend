import { Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";
import MenuLayout from "../../layout/MenuLayout";
import { useProductContext } from "../../context/ProductContext";
import { FILTER_KEY } from "../../constants";

export const colors = [
  { _id: 1, hex: "#FF0000", label: "Đỏ", value: "Đỏ" },
  { _id: 2, hex: "#00FF00", label: "Xanh Lá", value: "Xanh Lá" },
  { _id: 3, hex: "#0000FF", label: "Xanh Dương", value: "Xanh Dương" },
  { _id: 4, hex: "#FFFF00", label: "Vàng", value: "Vàng" },
  { _id: 5, hex: "#FFA500", label: "Cam", value: "Cam" },
  { _id: 6, hex: "#800080", label: "Tím", value: "Tím" },
  { _id: 7, hex: "#FFFFFF", label: "Trắng", value: "Trắng" },
  { _id: 8, hex: "#000000", label: "Đen", value: "Đen" },
  { _id: 9, hex: "#808080", label: "Xám", value: "Xám" },
  { _id: 10, hex: "#FFC0CB", label: "Hồng", value: "Hồng" },
  { _id: 11, hex: "#A52A2A", label: "Nâu", value: "Nâu" },
  { _id: 12, hex: "#00FFFF", label: "Xanh Ngọc", value: "Xanh Ngọc" },
];

const ColorMenu = ({}) => {
  const { t } = useTranslation();

  const { filter, handleSelectFilter } = useProductContext();

  return (
    <MenuLayout title={t("products.search-filter.colors.title")}>
      <div className="flex flex-wrap gap-2 bg-transparent py-2 text-gray-800 sr-950:justify-between">
        {colors &&
          colors.length > 0 &&
          colors.map((color, index) => {
            return (
              <div key={`products-search-filter-color-${index}-${color?._id}`}>
                <Tooltip title={color?.label} arrow>
                  <button
                    className="h-7 w-7 cursor-pointer rounded-full"
                    style={{
                      backgroundColor: color?.hex,
                      border:
                        color?.label === "Trắng" ? "1px solid #e5e7eb" : "none",
                    }}
                    onClick={() => handleSelectFilter(FILTER_KEY.COLORS, color)}
                  >
                    {filter?.[FILTER_KEY.COLORS]?.[color?._id] && (
                      <div
                        className="flex w-full items-center justify-center"
                        style={{
                          color: color?.label === "Trắng" ? "black" : "white",
                        }}
                      >
                        <FaCheck className="h-2.5 w-2.5" />
                      </div>
                    )}
                  </button>
                </Tooltip>
              </div>
            );
          })}
      </div>
    </MenuLayout>
  );
};

export default ColorMenu;
