import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";

const ProductDescription = ({ product = {} }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full divide-y divide-solid divide-gray-200 rounded-sm bg-white">
      <div className="space-y-4 px-4 py-6">
        <div className="shrink-0 text-base font-semibold lg:text-lg">
          {t("products.detail.detail_information")}
        </div>
        <div className="space-y-5 text-sm">
          <div className="flex gap-2">
            <span className="w-1/3 shrink-0 text-gray-800 lg:w-1/4 xl:w-1/5">
              {t("products.detail.category")}
            </span>
            <span className="flex flex-wrap items-center gap-1.5 font-medium text-primary">
              {product?.category && product?.category[0] && (
                <>
                  <span>{product?.category[0]?.name}</span>
                  <IoIosArrowForward />
                </>
              )}
              {product?.category && product?.category[1] && (
                <span>{product?.category[1]?.name}</span>
              )}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="w-1/3 shrink-0 text-gray-800 lg:w-1/4 xl:w-1/5">
              {t("products.detail.brand")}
            </span>
            <span className="font-medium">{product?.brand?.name}</span>
          </div>
          {product?.additionalInformation &&
            product?.additionalInformation?.length > 0 &&
            product?.additionalInformation?.map((item, i) => (
              <div
                key={`product-description-additional-information-${item?._id}-${i}`}
                className="flex gap-2"
              >
                <span className="w-1/3 shrink-0 text-gray-800 lg:w-1/4 xl:w-1/5">
                  {item?.name}
                </span>
                <span className="font-medium">{item?.value}</span>
              </div>
            ))}
        </div>
      </div>
      <div className="space-y-4 px-4 py-6">
        <div className="shrink-0 text-base font-semibold lg:text-lg">
          {t("products.detail.detail_information")}
        </div>
        <div className="text-justify text-sm leading-6">
          {product?.description}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
