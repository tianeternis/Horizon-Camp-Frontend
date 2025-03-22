import { useTranslation } from "react-i18next";
import MenuLayout from "../../layout/MenuLayout";
import { useProductContext } from "../../context/ProductContext";
import { FILTER_KEY } from "../../constants";

const SizeMenu = ({}) => {
  const { t } = useTranslation();

  const { filter, handleSelectFilter, sizes } = useProductContext();

  return (
    <MenuLayout title={t("products.search-filter.sizes.title")}>
      <div className="flex flex-wrap gap-2 bg-transparent py-2 text-gray-800 sr-500:justify-between">
        {sizes &&
          sizes.length > 0 &&
          sizes.map((size, index) => {
            return (
              <div key={`products-search-filter-size-${index}-${size?._id}`}>
                <button
                  className={`relative w-16 cursor-pointer rounded-sm border border-solid border-gray-200 py-1 text-center text-13px hover:border-primary hover:text-primary ${filter?.[FILTER_KEY.SIZES]?.[size?.value] ? "border-primary text-primary after:absolute after:bottom-0 after:right-0 after:h-0 after:w-0 after:border-b-[12px] after:border-l-[12px] after:border-solid after:border-b-primary after:border-l-transparent" : ""}`}
                  onClick={() =>
                    handleSelectFilter(FILTER_KEY.SIZES, size?.value)
                  }
                >
                  {size?.label}
                </button>
              </div>
            );
          })}
      </div>
    </MenuLayout>
  );
};

export default SizeMenu;
