import "@/assets/css/products.css";
import ProductDescription from "@/components/product/detail/ProductDescription";
import ProductInformation from "@/components/product/detail/ProductInformation";
import ProductReview from "@/components/product/detail/ProductReview";
import RecommendedProduct from "@/components/product/detail/RecommendedProduct";
import SimilarProduct from "@/components/product/detail/SimilarProduct";
import { useDynamicTitle, useTopPage } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router-dom";

const ProductDetail = ({}) => {
  const product = useLoaderData();

  const { t } = useTranslation();

  useDynamicTitle(product?.name || "Horizon Camp");
  useTopPage([product]);

  return (
    <BodyLayout>
      <div className="product-detail">
        {_.isEmpty(product) ? (
          <div className="rounded-md border border-solid border-orange-100 bg-orange-50 px-4 py-3 text-13px font-medium text-orange-500 sr-550:py-4 sr-550:text-sm">
            {t("products.detail.not_found")}
          </div>
        ) : (
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="grow space-y-3">
              <ProductInformation product={product} />
              <ProductDescription product={product} />
              <ProductReview productID={product?._id} />
              {/* <SimilarProduct
                categorySlug={product?.category?.slug}
                productID={product?._id}
              /> */}
              <RecommendedProduct productID={product?._id} />
            </div>
          </div>
        )}
      </div>
    </BodyLayout>
  );
};

export default ProductDetail;
