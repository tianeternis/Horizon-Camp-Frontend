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
      <div className="px-6 pt-4">
        <div className="grid grid-cols-12 items-center gap-2 rounded-sm bg-gray-100 p-4 text-sm font-medium text-black">
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
        <div className="divide-y divide-dashed divide-gray-300 px-4">
          {products?.map((product, i) => (
            <div
              key={`checkout-product-information-${i}-${product?._id}`}
              className="grid grid-cols-12 items-center gap-2 rounded-sm py-4 text-sm text-black"
            >
              <div className="col-span-6 flex items-center gap-4">
                <div className="w-20 shrink-0">
                  <img
                    src={product?.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <div className="font-medium">{product?.name}</div>
                  <div className="text-13px text-gray-700">
                    {product?.variant}
                  </div>
                </div>
              </div>
              <span className="col-span-2 text-right">
                {formatCurrency(product?.unitPrice)}
              </span>
              <span className="col-span-2 text-right">{product?.quantity}</span>
              <span className="col-span-2 text-right">
                {formatCurrency(+product?.unitPrice * +product?.quantity)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ContentContainerLayout>
  );
};

export default ProductInformation;
