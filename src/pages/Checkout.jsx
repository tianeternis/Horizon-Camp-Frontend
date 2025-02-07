import AddressInformation from "@/components/purchase/checkout/content/AddressInformation";
import CheckoutDetail from "@/components/purchase/checkout/content/CheckoutDetail";
import DeliveryMethod from "@/components/purchase/checkout/content/DeliveryMethod";
import PaymentMethod from "@/components/purchase/checkout/content/PaymentMethod";
import ProductInformation from "@/components/purchase/checkout/content/ProductInformation";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const Checkout = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.checkout"));

  return (
    <BodyLayout>
      <div className="space-y-4">
        <div className="text-base font-bold uppercase sm:text-lg">
          {t("order.checkout.title")}
        </div>
        <div className="space-y-3">
          <ProductInformation />
          <AddressInformation />
          <DeliveryMethod />
          <PaymentMethod />
          <CheckoutDetail />
        </div>
      </div>
    </BodyLayout>
  );
};

export default Checkout;
