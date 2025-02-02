import Checkbox from "@/components/inputs/Checkbox";
import { useTranslation } from "react-i18next";
import MenuLayout from "../../layout/MenuLayout";
import { useProductContext } from "../../context/ProductContext";
import { FILTER_KEY } from "../../constants";

export const costs = [
  {
    _id: 1,
    label: "Dưới 100.000đ",
    value: "<100000",
    trans: "products.search-filter.costs.<100000",
  },
  {
    _id: 2,
    label: "Từ 100.000đ - 200.000đ",
    value: "100000-200000",
    trans: "products.search-filter.costs.100000-200000",
  },
  {
    _id: 3,
    label: "Từ 200.000đ - 500.000đ",
    value: "200000-500000",
    trans: "products.search-filter.costs.200000-500000",
  },
  {
    _id: 4,
    label: "Từ 500.000đ - 1.000.000",
    value: "500000-1000000",
    trans: "products.search-filter.costs.500000-1000000",
  },
  {
    _id: 5,
    label: "Từ 1.000.000 - 1.500.000",
    value: "1000000-1500000",
    trans: "products.search-filter.costs.1000000-1500000",
  },
  {
    _id: 6,
    label: "1.500.000đ - 3.000.000đ",
    value: "1500000-3000000",
    trans: "products.search-filter.costs.1500000-3000000",
  },
  {
    _id: 7,
    label: "3.000.000đ - 5.000.000đ",
    value: "3000000-5000000",
    trans: "products.search-filter.costs.3000000-5000000",
  },
  {
    _id: 8,
    label: "5.000.000đ - 7.000.000đ",
    value: "5000000-7000000",
    trans: "products.search-filter.costs.5000000-700000",
  },
  {
    _id: 9,
    label: "7.000.000đ - 10.000.000đ",
    value: "7000000-10000000",
    trans: "products.search-filter.costs.7000000-1000000",
  },
  {
    _id: 10,
    label: "Trên 10.000.000đ",
    value: ">10000000",
    trans: "products.search-filter.costs.>10000000",
  },
];

const CostMenu = ({}) => {
  const { t } = useTranslation();

  const { filter, handleSelectFilter } = useProductContext();

  return (
    <MenuLayout title={t("products.search-filter.costs.title")}>
      <ul className="bg-transparent text-gray-800">
        {costs &&
          costs.length > 0 &&
          costs.map((cost, index) => {
            return (
              <li
                key={index}
                className="flex flex-nowrap items-center gap-3 py-2"
              >
                <Checkbox
                  id={`products-search-filter-cost-${cost?.value}`}
                  value={cost?.value}
                  onChange={() => handleSelectFilter(FILTER_KEY.COSTS, cost)}
                  checked={
                    filter?.[FILTER_KEY.COSTS]?.[cost?._id] !== undefined
                  }
                />
                <label
                  htmlFor={`products-search-filter-cost-${cost?.value}`}
                  className="select-none text-sm"
                >
                  {t(cost?.trans) === cost.trans ? cost?.label : t(cost?.trans)}
                </label>
              </li>
            );
          })}
      </ul>
    </MenuLayout>
  );
};

export default CostMenu;
