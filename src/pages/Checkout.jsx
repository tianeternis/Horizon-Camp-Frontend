import AddressInformation from "@/components/purchase/checkout/content/AddressInformation";
import CheckoutDetail from "@/components/purchase/checkout/content/CheckoutDetail";
import DeliveryMethod from "@/components/purchase/checkout/content/DeliveryMethod";
import PaymentMethod from "@/components/purchase/checkout/content/PaymentMethod";
import ProductInformation from "@/components/purchase/checkout/content/ProductInformation";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { getShippingFee } from "@/services/ghnService";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const Checkout = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.checkout"));

  const [address, setAddress] = useState();
  const [shippingFee, setShippingFee] = useState(0);

  useEffect(() => {
    if (address) {
      const fetchShippingFee = async () => {
        const res = await getShippingFee(
          address?.districtID,
          address?.wardCode,
          2 * 600,
        );

        console.log(res);

        if (res && res.data && res.data?.data) {
          setShippingFee(res.data?.data?.total);
        } else {
          setShippingFee(0);
        }
      };

      fetchShippingFee();
    } else {
      setShippingFee(0);
    }
  }, [address]);

  console.log(address);

  return (
    <BodyLayout>
      <div className="space-y-4">
        <div className="text-base font-bold uppercase sm:text-lg">
          {t("order.checkout.title")}
        </div>
        <div className="space-y-3">
          <ProductInformation />
          <AddressInformation
            selectedAddress={address}
            setSelectedAddress={setAddress}
          />
          <DeliveryMethod fee={shippingFee} />
          <PaymentMethod />
          <CheckoutDetail shippingFee={shippingFee} />
        </div>
      </div>
    </BodyLayout>
  );
};

export default Checkout;
