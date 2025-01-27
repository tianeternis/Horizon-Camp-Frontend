import { useTranslation } from "react-i18next";
import MenuLayout from "../../layout/MenuLayout";

const sizes = [
  { _id: 1, name: "XS" },
  { _id: 2, name: "S" },
  { _id: 3, name: "M" },
  { _id: 4, name: "L" },
  { _id: 5, name: "XL" },
  { _id: 6, name: "XXL" },
  { _id: 7, name: "XXXL" },
  { _id: 8, name: "4XL" },
  { _id: 9, name: "5XL" },
];

const SizeMenu = ({}) => {
  const { t } = useTranslation();

  return (
    <MenuLayout title={t("products.search-filter.sizes.title")}>
      <div className="flex flex-wrap justify-between gap-2 bg-transparent py-2 text-gray-800">
        {sizes &&
          sizes.length > 0 &&
          sizes.map((size, index) => {
            return (
              <div key={`products-search-filter-size-${index}-${size?._id}`}>
                <div className="w-16 cursor-pointer rounded-sm border border-solid border-gray-200 py-1 text-center text-13px hover:border-primary hover:text-primary">
                  {size?.name}
                </div>
              </div>
            );
          })}
      </div>
    </MenuLayout>
  );
};

export default SizeMenu;
