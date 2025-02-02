import { useTranslation } from "react-i18next";
import { HiMiniXMark } from "react-icons/hi2";
import { useProductContext } from "../../context/ProductContext";
import _ from "lodash";

const YourSelection = ({}) => {
  const { t } = useTranslation();

  const { filter, handleRemoveFilter, handleClearAllFilter, isEmptyFilter } =
    useProductContext();

  return (
    <div className="flex flex-wrap items-center gap-2">
      {filter && !isEmptyFilter && (
        <>
          <button
            className="flex items-center justify-center gap-1 rounded-full border border-solid border-gray-300 bg-gray-300 px-3 py-1 hover:bg-gray-100 md:py-1.5"
            onClick={() => handleClearAllFilter()}
          >
            <span className="text-11px font-medium md:text-13px">
              {t("products.search-filter.your-selection.clear_all")}
            </span>
            <HiMiniXMark className="h-3 w-3 text-gray-900 md:h-3.5 md:w-3.5" />
          </button>
          {Object.entries(filter).flatMap(([filterKey, filter]) =>
            Object.values(filter).map((value, index) => (
              <button
                key={`products-search-filter-your-selection-${filterKey}-${index}`}
                className="flex items-center justify-center gap-1 rounded-full border border-solid border-gray-300 bg-gray-300 px-3 py-1 hover:bg-gray-100 md:py-1.5"
                onClick={() => handleRemoveFilter(filterKey, value)}
              >
                <span className="text-11px font-medium md:text-13px">
                  {value?.label}
                </span>
                <HiMiniXMark className="h-3 w-3 text-gray-900 md:h-3.5 md:w-3.5" />
              </button>
            )),
          )}
        </>
      )}
    </div>
  );
};

export default YourSelection;
