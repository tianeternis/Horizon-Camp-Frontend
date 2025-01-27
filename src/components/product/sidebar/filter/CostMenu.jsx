import Checkbox from "@/components/inputs/Checkbox";
import { useTranslation } from "react-i18next";
import MenuLayout from "../../layout/MenuLayout";

const costs = [
  {
    id: 1,
    label: "Dưới 100.000đ",
    value: "<100000",
    trans: "products.search-filter.costs.<100000",
  },
  {
    id: 2,
    label: "Từ 100.000đ - 200.000đ",
    value: "100000-200000",
    trans: "products.search-filter.costs.100000-200000",
  },
  {
    id: 3,
    label: "Từ 200.000đ - 500.000đ",
    value: "200000-500000",
    trans: "products.search-filter.costs.200000-500000",
  },
  {
    id: 4,
    label: "Từ 500.000đ - 1 triệu",
    value: "500000-1000000",
    trans: "products.search-filter.costs.500000-1tr",
  },
  {
    id: 5,
    label: "Trên 1 triệu",
    value: ">1000000",
    trans: "products.search-filter.costs.>1tr",
  },
];

const CostMenu = ({}) => {
  const { t } = useTranslation();

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
