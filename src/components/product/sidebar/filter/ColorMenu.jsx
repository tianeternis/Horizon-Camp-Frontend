import { Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";
import MenuLayout from "../../layout/MenuLayout";
import { useProductContext } from "../../context/ProductContext";
import { FILTER_KEY } from "../../constants";
import { useEffect, useState } from "react";
import { getColors } from "@/services/variantService";
import StatusCodes from "@/utils/status/StatusCodes";

const ColorMenu = ({}) => {
  const { t } = useTranslation();

  const { filter, handleSelectFilter } = useProductContext();

  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchColors = async () => {
      const res = await getColors();

      if (res && res.EC === StatusCodes.SUCCESS) {
        const data = res.DT;

        const newData = data?.map((item) => ({
          _id: item._id,
          hex: item?.hex,
          label: item?.name,
          value: item?.name,
        }));

        setColors(newData);
      }
    };

    fetchColors();
  }, []);

  return (
    <MenuLayout title={t("products.search-filter.colors.title")}>
      <div className="flex flex-wrap gap-[11px] bg-transparent py-2 text-gray-800">
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
