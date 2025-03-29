import { notify } from "@/components/notify";
import AddressInformation from "@/components/purchase/checkout/content/AddressInformation";
import CheckoutDetail from "@/components/purchase/checkout/content/CheckoutDetail";
import DeliveryMethod from "@/components/purchase/checkout/content/DeliveryMethod";
import Notes from "@/components/purchase/checkout/content/Notes";
import PaymentMethod from "@/components/purchase/checkout/content/PaymentMethod";
import ProductInformation from "@/components/purchase/checkout/content/ProductInformation";
import ConfirmPaymentModal from "@/components/purchase/checkout/modal/ConfirmPaymentModal";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { fetchCartItemsQuantity } from "@/redux/reducer/cartSlide";
import { PATHS } from "@/routes";
import { getShippingFee } from "@/services/ghnService";
import { createNewOrder, getProductsForOrder } from "@/services/orderService";
import StatusCodes from "@/utils/status/StatusCodes";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
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

  const [confirmPayment, setConfirmPayment] = useState({
    show: false,
    data: null,
  });

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

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.account);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (products.length <= 0) {
      notify.show(t("order.checkout.no_products"));
      return;
    }

    if (!address) {
      notify.show(t("order.checkout.no_address"));
      return;
    }

    if (!paymentMethod) {
      notify.show(t("order.checkout.no_payment_method"));
      return;
    }

    const detailsID = products?.map((product) => product?.detailID);

    const res = await createNewOrder({
      userID: user?._id,
      detailsID,
      addressID: address?._id,
      paymentMethodID: paymentMethod,
      notes,
      shippingFee,
      subTotal: subTotal + shippingFee,
    });

    if (res && res.EC === StatusCodes.SUCCESS) {
      const data = res.DT;

      dispatch(fetchCartItemsQuantity(user?._id));

      if (data?.isVNPAY) {
        setConfirmPayment({ show: true, data: data?._id });
      } else {
        toast.success(res.EM);
        navigate(PATHS.purchase());
      }
    }

    if (
      res &&
      (res.EC === StatusCodes.MISSING_PRODUCT ||
        res.EC === StatusCodes.NOT_ENOUGH_PRODUCT)
    ) {
      notify.show(res.EM);
    }

    if (res && res.EC === StatusCodes.ERRROR) {
      toast.error(res.EM);
    }
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
      {confirmPayment.show && confirmPayment.data && (
        <ConfirmPaymentModal
          show={confirmPayment.show}
          onClose={() => setConfirmPayment({ show: false, data: null })}
          orderID={confirmPayment.data}
        />
      )}
    </BodyLayout>
  );
};

export default Checkout;
