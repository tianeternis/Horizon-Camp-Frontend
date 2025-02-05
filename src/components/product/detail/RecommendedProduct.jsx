import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ProductCard from "../list/ProductCard";

const RecommendedProduct = ({}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full space-y-2 py-2">
      <div className="shrink-0 text-base font-semibold lg:text-lg">
        {t("products.detail.recommend_product")}
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3 sr-600:grid-cols-3 sr-900:grid-cols-4 sr-1150:grid-cols-5">
          {Array.from({ length: 10 }, (_, i) => (
            <ProductCard key={`home-product-card-${i}`} />
          ))}
        </div>
        <div className="flex w-full justify-center">
          <Link className="w-full rounded-sm border border-solid border-gray-200 bg-white py-2 text-center text-sm text-gray-800 shadow-sm hover:border-main hover:bg-main hover:text-white sr-400:w-6/10 sr-500:w-5/10 sm:w-3/10">
            {t("navigation.see_more")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecommendedProduct;
