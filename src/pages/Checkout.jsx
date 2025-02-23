import AddressInformation from "@/components/purchase/checkout/content/AddressInformation";
import CheckoutDetail from "@/components/purchase/checkout/content/CheckoutDetail";
import DeliveryMethod from "@/components/purchase/checkout/content/DeliveryMethod";
import Notes from "@/components/purchase/checkout/content/Notes";
import PaymentMethod from "@/components/purchase/checkout/content/PaymentMethod";
import ProductInformation from "@/components/purchase/checkout/content/ProductInformation";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { getShippingFee } from "@/services/ghnService";
import { getProductsForOrder } from "@/services/orderService";
import StatusCodes from "@/utils/status/StatusCodes";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.checkout"));

  const [queryParams] = useSearchParams();

  const [products, setProducts] = useState([]);

  const [address, setAddress] = useState();
  const [shippingFee, setShippingFee] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [notes, setNotes] = useState("");

  const totalQuantity = useMemo(() => {
    if (products?.length > 0) {
      return products?.reduce((total, item) => total + +item?.quantity || 0, 0);
    }

    return 0;
  }, [products]);

  const subTotal = useMemo(() => {
    if (products?.length > 0) {
      return products?.reduce(
        (total, item) => total + +item?.quantity * +item?.discountedPrice,
        0,
      );
    }

    return 0;
  }, [products]);

  useEffect(() => {
    const itemsID = queryParams.get("items");

    const fetchProducts = async () => {
      const res = await getProductsForOrder(itemsID);

      if (res && res.EC === StatusCodes.SUCCESS) {
        setProducts(res.DT);
      }

      if (res && res.EC === StatusCodes.ERRROR) {
        toast.error(res.EM);
      }
    };

    fetchProducts();
  }, [queryParams]);

  useEffect(() => {
    if (address) {
      const fetchShippingFee = async () => {
        const res = await getShippingFee(
          address?.districtID,
          address?.wardCode,
          totalQuantity * 600,
        );

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

  const handleSubmit = async () => {
    const detailsID = products?.map((product) => product?.detailID);

    console.log(
      detailsID,
      address,
      paymentMethod,
      notes,
      shippingFee,
      subTotal,
    );
  };

  return (
    <BodyLayout>
      <div className="space-y-4">
        <div className="text-base font-bold uppercase sm:text-lg">
          {t("order.checkout.title")}
        </div>
        <div className="space-y-3">
          <ProductInformation products={products} />
          <AddressInformation
            selectedAddress={address}
            setSelectedAddress={setAddress}
          />
          <DeliveryMethod fee={shippingFee} />
          <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
          <Notes value={notes} setValue={setNotes} />
          <CheckoutDetail
            shippingFee={shippingFee}
            subTotal={subTotal}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </BodyLayout>
  );
};

export default Checkout;
