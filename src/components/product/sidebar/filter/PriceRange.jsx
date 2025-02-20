import { useTranslation } from "react-i18next";
import MenuLayout from "../../layout/MenuLayout";
import { useProductContext } from "../../context/ProductContext";
import { useState } from "react";

const PriceRange = ({}) => {
  const { t } = useTranslation();

  const { priceRange, setPriceRange } = useProductContext();

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const apply = () => {
    setPriceRange({ from: min, to: max });
  };

  return (
    <MenuLayout title={t("products.search-filter.costs.title")}>
      <div className="space-y-5">
        <div className="grid grid-cols-11 items-center gap-1">
          <input
            type="number"
            placeholder={t("products.search-filter.costs.from")}
            className="col-span-5 rounded-sm border border-solid border-gray-300 bg-transparent px-2 py-1.5 text-13px outline-none"
            value={priceRange?.from || min}
            onChange={(e) => setMin(e.target.value)}
          />
          <span className="col-span-1 text-center">-</span>
          <input
            type="number"
            placeholder={t("products.search-filter.costs.to")}
            className="col-span-5 rounded-sm border border-solid border-gray-300 bg-transparent px-2 py-1.5 text-13px outline-none"
            value={priceRange?.to || max}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>
        <button
          className="w-full rounded-sm bg-main px-4 py-1.5 text-center text-13px font-medium uppercase text-white hover:bg-primary disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:bg-main"
          disabled={!min && !max}
          onClick={() => apply()}
        >
          {t("products.search-filter.costs.apply")}
        </button>
      </div>
    </MenuLayout>
  );
};

export default PriceRange;
