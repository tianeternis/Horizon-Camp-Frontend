import Pagination from "@/components/pagination/Pagination";
import ProductCard from "@/components/product/ProductCard";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TbArrowsSort } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

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
            <div className="text-lg font-bold uppercase">Tất cả sản phẩm</div>
            <div className="flex min-w-60 items-center justify-between border-b border-solid border-b-gray-300 pb-1 text-gray-800">
              <div className="flex items-center gap-2">
                <TbArrowsSort className="h-4.5 w-4.5" />
                <span className="text-sm font-medium">Mặc định</span>
              </div>
              <MdOutlineKeyboardArrowDown className="h-5 w-5" />
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
