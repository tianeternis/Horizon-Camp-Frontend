import Checkbox from "@/components/inputs/Checkbox";
import { useTranslation } from "react-i18next";
import MenuLayout from "../../layout/MenuLayout";
import { useProductContext } from "../../context/ProductContext";
import { FILTER_KEY } from "../../constants";
import { useEffect, useState } from "react";
import { getBrands } from "@/services/brandService";
import StatusCodes from "@/utils/status/StatusCodes";

const BrandMenu = ({}) => {
  const { t } = useTranslation();

  const { filter, handleSelectFilter } = useProductContext();

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const res = await getBrands();

      if (res && res.EC === StatusCodes.SUCCESS) {
        const data = res.DT?.data;

        const newData = data?.map((item) => ({
          _id: item?._id,
          label: item?.name,
          value: item?.slug,
        }));

        setBrands(newData);
      }
    };

    fetchBrands();
  }, []);

  return (
    <MenuLayout title={t("products.search-filter.brands.title")}>
      <ul className="bg-transparent text-gray-800">
        {brands &&
          brands.length > 0 &&
          brands.map((brand, index) => {
            return (
              <li
                key={`products-search-filter-branch-${index}-${brand?._id}`}
                className="flex flex-nowrap items-center gap-3 py-2"
              >
                <Checkbox
                  id={`products-search-filter-branch-${brand?.value}`}
                  value={brand?.value}
                  onChange={() => handleSelectFilter(FILTER_KEY.BRANDS, brand)}
                  checked={
                    filter?.[FILTER_KEY.BRANDS]?.[brand?._id] !== undefined
                  }
                />
                <label
                  htmlFor={`products-search-filter-branch-${brand?.value}`}
                  className="select-none text-sm"
                >
                  {brand?.label}
                </label>
              </li>
            );
          })}
      </ul>
    </MenuLayout>
  );
};

export default BrandMenu;
