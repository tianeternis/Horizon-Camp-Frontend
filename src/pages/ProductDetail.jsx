import "@/assets/css/products.css";
import ProductInformation from "@/components/product/detail/ProductInformation";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router-dom";

const product = {
  name: "Khăn tấm trải du lịch chụp ảnh picnic, trải bàn ăn bằng nhựa PVC chống thấm nước gấp gọn tiện dụng K147",
  images: [
    "https://bizweb.dktcdn.net/100/440/011/products/sp17.jpg?v=1634894825320",
    "https://bizweb.dktcdn.net/100/440/011/products/sp17-2.jpg?v=1634894826087",
    "https://bizweb.dktcdn.net/100/440/011/products/sp17-3.jpg?v=1634894826977",
    "https://bizweb.dktcdn.net/100/440/011/products/sp17-3.png?v=1634894828543",
    "https://bizweb.dktcdn.net/100/440/011/products/sp17-4.jpg?v=1634894829343",
  ],
  totalSold: 20000000,
};

const ProductDetail = ({}) => {
  // const product = useLoaderData();

  const { t } = useTranslation();

  useDynamicTitle(product?.name || "Horizon Camp");

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
              {/* <DishDescription dish={dish} />
            <DishReview dish={dish} />
            <SimilarDishes category={dish?.category?.[1]} /> */}
            </div>
            {/* <div className="shrink-0">
            <RecommendedDishes />
          </div> */}
          </div>
        )}
      </div>
    </BodyLayout>
  );
};

export default ProductDetail;
