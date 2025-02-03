import QuantityInput from "@/components/inputs/QuantityInput";
import { formatCurrency } from "@/utils/format/currency";
import { formatQuantity } from "@/utils/format/quantity";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ProductImageGallery from "./images/ProductImageGallery";

const ProductInformation = ({ product = {} }) => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full flex-col gap-4 rounded-sm bg-white px-4 py-5 md:px-8 lg:flex-row lg:gap-10 lg:px-6 lg:py-6">
      <div className="w-[28rem] shrink-0">
        <ProductImageGallery images={product?.images} />
      </div>
      <div className="grow space-y-10">
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-semibold text-black">
            {product?.name}
          </div>

          <div className="flex items-center gap-4">
            {/* <span className="flex items-center justify-center gap-0.5 border-x-2 border-solid border-yellow-500 bg-yellow-200 px-2 py-1 text-yellow-600">
              <FaStar />
              <span className="ml-1 text-xs font-bold">
                {product?.averageRating}
              </span>
            </span> */}
            <div className="text-xs sm:text-sm">
              <span className="font-semibold">
                {formatQuantity(product?.totalSold)}
              </span>
              <span className="ms-1">{t("productDetailPage.sold")}</span>
            </div>
          </div>
          <div className="space-x-2.5">
            <span className="text-tertiary text-2xl font-semibold">
              {formatCurrency(product?.discountedPrice)}
            </span>
            {product?.discount > 0 && (
              <>
                <span className="text-base text-slate-300 line-through">
                  {formatCurrency(product?.price)}
                </span>
                <span className="rounded-md bg-red-500 px-1.5 py-1 text-sm font-medium">
                  -{product?.discount}%
                </span>
              </>
            )}
          </div>
        </div>
        <div className="space-y-8">
          {product?.isAvailibility ? (
            <>
              <div className="flex items-center gap-6">
                <span className="text-sm">
                  {t("productDetailPage.quantity")}
                </span>
                <QuantityInput
                //   value={quantity}
                //   onChange={(quantity) => setQuantity(quantity)}
                />
              </div>
              <div className="flex w-full gap-2 sr-530:w-4/5 sr-530:gap-4 sm:w-auto md:w-4/5">
                <button
                  className="bg-tertiary grow rounded-md px-2 py-2.5 text-sm font-medium hover:bg-yellow-600 sr-530:px-4"
                  //   onClick={() => handleAddToCart()}
                >
                  {t("productDetailPage.addToCart")}
                </button>
                <Link
                  to="/booking"
                  className="hover:bg-tertiary grow rounded-md bg-yellow-600 px-2 py-2.5 text-center text-sm font-medium sr-530:px-4"
                >
                  {t("productDetailPage.bookNow")}
                </Link>
              </div>
            </>
          ) : (
            <div className="py-2">
              <div className="rounded-md bg-[#fff3cd] px-4 py-3 text-sm font-medium text-yellow-600">
                {t("productDetailPage.outOfproduct")}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
