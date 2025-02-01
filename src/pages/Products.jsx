import { ProductProvider } from "@/components/product/context/ProductContext";
import Pagination from "@/components/pagination/Pagination";
import ProductCard from "@/components/product/list/ProductCard";
import Sidebar from "@/components/product/sidebar/Sidebar";
import SortMenu from "@/components/product/sort/SortMenu";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineFilterAlt } from "react-icons/md";
import { FILTER_KEY } from "@/components/product/constants";

const DEFAULT_FILTER = {
  [FILTER_KEY.COSTS]: {},
  [FILTER_KEY.BRANDS]: {},
  [FILTER_KEY.COLORS]: {},
  [FILTER_KEY.SIZES]: {},
};

const Products = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.product"));

  const [showDrawer, setShowDrawer] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(DEFAULT_FILTER);

  const handleSelectFilter = (filterKey, value) => {};

  const handleRemoveFilter = (filterKey, value) => {};

  const handleClearAllFilter = () => {
    setFilter(DEFAULT_FILTER);
  };

  return (
    <BodyLayout>
      <ProductProvider value={{ showDrawer, setShowDrawer }}>
        <div className="flex sr-950:gap-4">
          <div className="shrink-0">
            <Sidebar />
          </div>
          <div className="w-full space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-base font-bold uppercase md:text-lg">
                {t("products.title")}
              </div>
              <div className="flex items-end justify-center gap-2.5 sr-530:gap-6">
                <SortMenu />
                <div className="sr-950:hidden">
                  <Tooltip title={t("products.search-filter.title")} arrow>
                    <button
                      className="flex items-center justify-center rounded border border-solid border-gray-300 p-1 duration-300 hover:border-main hover:bg-main hover:text-white"
                      onClick={() => setShowDrawer(true)}
                    >
                      <MdOutlineFilterAlt className="h-6 w-6" />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              <div className="grid grid-cols-2 gap-3 sr-600:grid-cols-3 sr-900:grid-cols-4 sr-950:grid-cols-3 sr-1150:grid-cols-4">
                {Array.from({ length: 10 }, (_, i) => (
                  <ProductCard key={`home-product-card-${i}`} />
                ))}
              </div>
              <div className="flex items-center justify-center">
                <Pagination
                  count={6}
                  page={currentPage}
                  onChange={(_, page) => setCurrentPage(page)}
                />
              </div>
            </div>
          </div>
        </div>
      </ProductProvider>
    </BodyLayout>
  );
};

export default Products;
