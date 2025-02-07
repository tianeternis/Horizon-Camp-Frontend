import { formatCurrency } from "@/utils/format/currency";
import { useTranslation } from "react-i18next";
import { LuShoppingCart } from "react-icons/lu";
import ContentContainerLayout from "../layout/ContentContainerLayout";

const products = [
  {
    _id: 1,
    image:
      "https://bizweb.dktcdn.net/100/440/011/products/sp16-4.jpg?v=1634894750800",
    name: "Thảm dã ngoại, bạt trải picnic họa tiết caro chống thấm nước gấp gọn tiện lợi K148",
    variant: "Màu xám, 2XL",
    quantity: 1,
    unitPrice: 500000,
  },
  {
    _id: 2,
    image:
      "https://bizweb.dktcdn.net/100/440/011/products/sp16-4.jpg?v=1634894750800",
    name: "Thảm dã ngoại, bạt trải picnic họa tiết caro chống thấm nước gấp gọn tiện lợi K148",
    variant: "Màu xám, 2XL",
    quantity: 1,
    unitPrice: 500000,
  },
];

const ProductInformation = ({}) => {
  const { t } = useTranslation();

  return (
    <ContentContainerLayout
      title={t("order.checkout.product.title")}
      icon={<LuShoppingCart />}
    >
      <div className="px-4 sm:px-6 md:pt-4">
        <div className="hidden grid-cols-12 items-center gap-2 rounded-sm bg-gray-100 p-4 text-sm font-medium text-black md:grid">
          <div className="col-span-6">
            {t("order.checkout.product.product")}
          </div>
          <span className="col-span-2 text-right">
            {t("order.checkout.product.price")}
          </span>
          <span className="col-span-2 text-right">
            {t("order.checkout.product.quantity")}
          </span>
          <span className="col-span-2 text-right">
            {t("order.checkout.product.total_price")}
          </span>
        </div>
        <div className="divide-y divide-dashed divide-gray-300 md:px-4">
          {products?.map((product, i) => (
            <div
              key={`checkout-product-information-${i}-${product?._id}`}
              className="flex items-center gap-2 rounded-sm py-4 text-13px text-black sm:text-sm md:grid md:grid-cols-12"
            >
              <div className="flex w-full shrink-0 items-center gap-2 sr-530:w-8/10 sm:gap-4 md:col-span-6 md:w-full">
                <div className="w-18 shrink-0 sm:w-20">
                  <img
                    src={product?.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <div className="line-clamp-2 font-medium sr-530:line-clamp-3">
                    {product?.name}
                  </div>
                  <div className="text-xs text-gray-700 sm:text-13px">
                    {product?.variant}
                  </div>
                  <div className="flex items-center justify-between text-xs sr-530:hidden">
                    <div className="text-right">
                      {formatCurrency(product?.unitPrice)}
                    </div>
                    <div className="text-right font-medium text-main">
                      x{product?.quantity}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden grow space-y-0.5 sr-530:block md:col-span-6 md:grid md:grid-cols-6 md:gap-2">
                <div className="col-span-2 text-right">
                  {formatCurrency(product?.unitPrice)}
                </div>
                <div className="col-span-2 text-right">
                  <span className="md:hidden">x</span>
                  <span>{product?.quantity}</span>
                </div>
                <div className="col-span-2 pt-1 text-right font-medium text-primary md:p-0">
                  {formatCurrency(+product?.unitPrice * +product?.quantity)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentContainerLayout>
  );
};

export default ProductInformation;
