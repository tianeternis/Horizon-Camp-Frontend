import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiDollarCircle } from "react-icons/bi";
import ContentContainerLayout from "../layout/ContentContainerLayout";
import Radio from "../components/Radio";
import RadioGroup from "../components/RadioGroup";

const PAYMENT_METHOD = [
  { _id: 1, label: "Thanh toán khi nhận hàng - COD" },
  { _id: 2, label: "Thanh toán qua VNPay" },
];

const PaymentMethod = ({}) => {
  const { t } = useTranslation();

  const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHOD?.[0]?._id);

  return (
    <ContentContainerLayout
      title={t("order.checkout.payment-method.title")}
      icon={<BiDollarCircle />}
    >
      <div className="px-6 py-4 text-sm text-black">
        <RadioGroup
          id="checkout-payment-method"
          value={paymentMethod}
          setValue={setPaymentMethod}
          options={PAYMENT_METHOD}
        />
      </div>
    </ContentContainerLayout>
  );
};

export default PaymentMethod;
