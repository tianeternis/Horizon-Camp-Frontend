import Pagination from "@/components/pagination/Pagination";
import ProductCard from "@/components/product/ProductCard";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const Products = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.product"));

  return (
    <BodyLayout>
      <div className="flex gap-6">
        <div className="hidden h-96 w-64 shrink-0 bg-white sr-950:block"></div>
        <div className="space-y-12">
          <div className="grid grid-cols-2 gap-3 sr-600:grid-cols-3 sr-900:grid-cols-4 sr-950:grid-cols-3 sr-1150:grid-cols-4">
            {Array.from({ length: 10 }, (_, i) => (
              <ProductCard key={`home-product-card-${i}`} />
            ))}
          </div>
          <div className="flex justify-center">
            <Pagination />
          </div>
        </div>
      </div>
    </BodyLayout>
  );
};

export default Products;
