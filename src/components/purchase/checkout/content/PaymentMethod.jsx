import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiDollarCircle } from "react-icons/bi";
import ContentContainerLayout from "../layout/ContentContainerLayout";
import RadioGroup from "../components/RadioGroup";
import { getPaymentMethods } from "@/services/orderService";
import StatusCodes from "@/utils/status/StatusCodes";

const PaymentMethod = ({ paymentMethod, setPaymentMethod = (value) => {} }) => {
  const { t } = useTranslation();

  const [paymentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const res = await getPaymentMethods();

      if (res && res.EC === StatusCodes.SUCCESS) {
        const data = res.DT;

        const newData = data?.map((item) => ({
          _id: item?._id,
          label: item?.name,
        }));

        setPaymentMethods(newData);
        setPaymentMethod(newData?.[0]?._id);
      }
    };

    fetchPaymentMethods();
  }, []);

  return (
    <ContentContainerLayout
      title={t("order.checkout.payment-method.title")}
      icon={<BiDollarCircle />}
    >
      <div className="p-4 text-13px text-black sm:px-6 sm:text-sm">
        <RadioGroup
          id="checkout-payment-method"
          value={paymentMethod}
          setValue={setPaymentMethod}
          options={paymentMethods}
        />
      </div>
    </ContentContainerLayout>
  );
};

export default PaymentMethod;
