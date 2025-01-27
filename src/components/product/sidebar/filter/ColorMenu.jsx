import { Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import MenuLayout from "../../layout/MenuLayout";

const colors = [
  { _id: 1, value: "#FF0000", name: "Đỏ" },
  { _id: 2, value: "#00FF00", name: "Xanh Lá" },
  { _id: 3, value: "#0000FF", name: "Xanh Dương" },
  { _id: 4, value: "#FFFF00", name: "Vàng" },
  { _id: 5, value: "#FFA500", name: "Cam" },
  { _id: 6, value: "#800080", name: "Tím" },
  { _id: 7, value: "#FFFFFF", name: "Trắng" },
  { _id: 8, value: "#000000", name: "Đen" },
  { _id: 9, value: "#808080", name: "Xám" },
  { _id: 10, value: "#FFC0CB", name: "Hồng" },
  { _id: 11, value: "#A52A2A", name: "Nâu" },
  { _id: 12, value: "#00FFFF", name: "Xanh Ngọc" },
];

const ColorMenu = ({}) => {
  const { t } = useTranslation();

  return (
    <MenuLayout title={t("products.search-filter.colors.title")}>
      <div className="flex flex-wrap justify-between gap-2 bg-transparent py-2 text-gray-800">
        {colors &&
          colors.length > 0 &&
          colors.map((color, index) => {
            return (
              <div key={`products-search-filter-color-${index}-${color?._id}`}>
                <Tooltip title={color?.name} arrow>
                  <div
                    className="h-7 w-7 cursor-pointer rounded-full"
                    style={{
                      backgroundColor: color?.value,
                      border:
                        color?.name === "Trắng" ? "1px solid #e5e7eb" : "none",
                    }}
                  ></div>
                </Tooltip>
              </div>
            );
          })}
      </div>
    </MenuLayout>
  );
};

export default ColorMenu;
