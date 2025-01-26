import Pagination from "@/components/pagination/Pagination";
import ProductCard from "@/components/product/list/ProductCard";
import SortMenu from "@/components/product/sort/SortMenu";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineFilterAlt } from "react-icons/md";

const Products = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.product"));

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <BodyLayout>
      <div className="flex gap-4">
        <div className="hidden h-96 w-64 shrink-0 bg-white sr-950:block"></div>
        <div className="w-full space-y-6">
          <div className="flex items-center justify-between">
            <div className="text-base font-bold uppercase md:text-lg">
              {t("products.title")}
            </div>
            <div className="flex items-end justify-center gap-6">
              <SortMenu />
              <Tooltip title={t("products.search-filter.title")} arrow>
                <button className="flex items-center justify-center rounded border border-solid border-gray-300 p-1 duration-300 hover:border-main hover:bg-main hover:text-white">
                  <MdOutlineFilterAlt className="h-6 w-6" />
                </button>
              </Tooltip>
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
    </BodyLayout>
  );
};

export default Products;
