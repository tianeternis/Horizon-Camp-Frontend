import Checkbox from "@/components/inputs/Checkbox";
import { useTranslation } from "react-i18next";
import MenuLayout from "../../layout/MenuLayout";

const brands = [
  {
    _id: 1,
    label: "Blackgog",
    value: "blackdog",
  },
  {
    _id: 2,
    label: "Fire-Maple",
    value: "fire-mmaple",
  },
  {
    _id: 3,
    label: "Givi",
    value: "givi",
  },
  {
    _id: 4,
    label: "Jack Wolfskin",
    value: "jack-wolfskin",
  },
  {
    _id: 5,
    label: "Naturehike",
    value: "naturehike",
  },
];

const BrandMenu = ({}) => {
  const { t } = useTranslation();

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
