import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { PATHS } from "@/routes";
import { getOrderByID } from "@/services/orderService";
import { formatAddress } from "@/utils/format/address";
import { formatCurrency } from "@/utils/format/currency";
import StatusCodes from "@/utils/status/StatusCodes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const PaymentResult = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.payment_result"));

  const [searchParams] = new useSearchParams();

  const orderId = searchParams.get("orderId");
  const code = searchParams.get("code");

  const [order, setOrder] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (orderId || code) {
      const fetchOrder = async () => {
        const res = await getOrderByID(orderId);

        if (res && res.EC === StatusCodes.SUCCESS) {
          setOrder(res.DT);
        }

        if (res && res.EC === StatusCodes.ERRROR) {
          navigate(PATHS.home());
        }
      };

      fetchOrder();
    } else {
      navigate(PATHS.home());
    }
  }, [orderId, code]);

  return (
    <BodyLayout>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-full max-w-screen-md space-y-8 rounded-md bg-white px-4 py-8 shadow-md sm:p-10">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <div className="text-xl font-semibold uppercase sm:text-2xl">
              {code === "00" ? (
                <span className="text-green-500">
                  {t("payment.result.success_message")}
                </span>
              ) : (
                <span className="text-red-500">
                  {t("payment.result.failure_message")}
                </span>
              )}
            </div>
            <div className="text-3xl sm:text-4xl">
              {code === "00" ? (
                <FaRegCheckCircle className="text-green-500" />
              ) : (
                <RxCrossCircled className="text-red-500" />
              )}
            </div>
            <p className="text-sm text-gray-600 sm:text-15px">
              {code === "00"
                ? t("payment.result.success_description")
                : t("payment.result.failure_description")}
            </p>
          </div>
          <div className="grid gap-x-2.5 gap-y-4 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-gray-800 sm:text-15px">
                {t("payment.result.order_id")}
              </p>
              <p className="text-13px sm:text-sm">{order?._id}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-800 sm:text-15px">
                {t("payment.result.order_status")}
              </p>
              <p className="text-13px sm:text-sm">{order?.orderStatus}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-800 sm:text-15px">
                {t("payment.result.customer_name")}
              </p>
              <p className="text-13px sm:text-sm">{order?.address?.fullName}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-800 sm:text-15px">
                {t("payment.result.phone")}
              </p>
              <p className="text-13px sm:text-sm">{order?.address?.phone}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-800 sm:text-15px">
                {t("payment.result.address")}
              </p>
              <p className="text-13px sm:text-sm">
                {formatAddress({
                  details: order?.address?.detailAddress,
                  province: order?.address?.provinceName,
                  district: order?.address?.districtName,
                  ward: order?.address?.wardName,
                })}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-800 sm:text-15px">
                {t("payment.result.payment_method")}
              </p>
              <p className="text-13px sm:text-sm">{order?.paymentMethod}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-800 sm:text-15px">
                {t("payment.result.order_total")}
              </p>
              <p className="text-13px sm:text-sm">
                {formatCurrency(order?.orderTotal)}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 sm:text-15px">
                {t("payment.result.payment_status")}
              </p>
              <p className="text-13px sm:text-sm">{order?.paymentStatus}</p>
            </div>
          </div>
          <div className="space-x-4 text-center">
            <Link
              to={PATHS.products()}
              className="rounded-md bg-red-500 px-3 py-2.5 text-sm font-medium text-white hover:bg-red-600"
            >
              {t("payment.result.buy_more")}
            </Link>
            <Link
              to={PATHS.purchase()}
              className="rounded-md bg-green-500 px-3 py-2.5 text-sm font-medium text-white hover:bg-green-600"
            >
              {t("payment.result.order_page")}
            </Link>
          </div>
        </div>
      </div>
    </BodyLayout>
  );
};

export default PaymentResult;
