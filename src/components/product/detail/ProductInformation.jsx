import QuantityInput from "@/components/inputs/QuantityInput";
import Rating from "@/components/rating/Rating";
import { formatCurrency } from "@/utils/format/currency";
import { formatQuantity } from "@/utils/format/quantity";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ProductImageGallery from "./images/ProductImageGallery";

const ProductInformation = ({ product = {} }) => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full flex-col gap-4 rounded-sm bg-white p-4 lg:flex-row lg:gap-8">
      <div className="shrink-0">
        <ProductImageGallery images={product?.images} />
      </div>
      <div className="grow space-y-10">
        <div className="flex flex-col gap-3">
          <div className="text-2xl font-semibold text-black">
            {product?.name}
          </div>
          <div className="space-y-2">
            <div className="flex items-center divide-x divide-solid divide-gray-300">
              <span className="flex items-center justify-center gap-2 pr-4">
                <span className="text-xs text-black sm:text-sm">
                  {product?.averageRating}
                </span>
                <Rating readOnly value={product?.averageRating} size={18} />
              </span>
              <div className="pl-4">
                <span className="text-xs sm:text-sm">
                  {formatQuantity(product?.totalSold)}
                </span>
                <span className="ms-1 text-11px sm:text-13px">
                  {t("products.detail.sold")}
                </span>
              </div>
            </div>
            <div className="text-justify text-sm">{product?.brief}</div>
            <div className="flex items-center justify-between">
              <div className="space-x-3">
                <span className="text-2xl font-semibold text-primary">
                  {formatCurrency(product?.discountedPrice)}
                </span>
                {product?.discount > 0 && (
                  <>
                    <span className="text-base text-slate-400 line-through">
                      {formatCurrency(product?.price)}
                    </span>
                    <span className="rounded-md bg-primary px-1.5 py-1 text-xs font-medium text-white">
                      -{product?.discount}%
                    </span>
                  </>
                )}
              </div>
              <div className="rounded-sm p-2.5 shadow-[0_0_2px_rgba(0,0,0,0.14)]">
                <img
                  src={product?.brand?.image}
                  alt=""
                  loading="lazy"
                  className="w-12 rounded-sm object-cover"
                />
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <span className="w-2/12 text-sm">
                {t("products.detail.color")}
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="w-2/12 text-sm">
                {t("products.detail.size")}
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="w-2/12 text-sm">
                {t("products.detail.quantity")}
              </span>
              <QuantityInput
              //   value={quantity}
              //   onChange={(quantity) => setQuantity(quantity)}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full gap-2 sr-530:w-4/5 sr-530:gap-4 sm:w-auto md:w-5/10">
          <button
            className="grow rounded-md border border-solid border-main bg-main px-2 py-2.5 text-sm font-semibold text-white hover:border-gray-400 hover:bg-transparent hover:bg-yellow-600 hover:text-black sr-530:px-4"
            onClick={() => handleAddToCart()}
          >
            {t("products.detail.add_to_cart")}
          </button>
          <Link
            to="/booking"
            className="grow rounded-md border border-solid border-gray-400 bg-transparent px-2 py-2.5 text-center text-sm font-semibold text-black hover:border-main hover:bg-main hover:text-white sr-530:px-4"
          >
            {t("products.detail.buy_now")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
