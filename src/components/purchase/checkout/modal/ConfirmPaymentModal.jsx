import { PATHS } from "@/routes";
import { createUrlPayment } from "@/services/paymentService";
import StatusCodes from "@/utils/status/StatusCodes";
import { Modal } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ConfirmPaymentModal = ({ show = false, onClose = () => {}, orderID }) => {
  const { t } = useTranslation();

  const handleClose = (e, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") return;
    onClose();
  };

  const navigate = useNavigate();
  const handlePayLater = () => {
    handleClose();
    navigate(PATHS.purchase());
  };

  const handlePayNow = async () => {
    if (orderID) {
      const res = await createUrlPayment({ orderId: orderID });

      if (res && res.EC === StatusCodes.SUCCESS) {
        const url = res.DT?.vnpUrl;

        if (!url) {
          toast.error(t("payment.modal.error_message"));
        }

        handleClose();
        window.location.replace(url);
      }

      if (res && res.EC === StatusCodes.ERRROR) {
        toast.error(res.EM);
      }
    } else {
      toast.error(t("payment.modal.error_message"));
    }
  };

  return (
    <div>
      <Modal open={show} onClose={handleClose}>
        <div className="absolute left-1/2 top-1/2 w-9/10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-white px-6 py-8 font-main outline-none sr-500:w-7/10 sm:w-6/10 sm:px-8 md:w-5/10 lg:w-4/10 xl:w-1/3">
          <FaRegCircleCheck className="mx-auto mb-4 h-10 w-10 text-green-500 sm:h-12 sm:w-12" />
          <h3 className="mb-5 text-center text-sm font-normal text-gray-500 sm:text-base xl:px-4">
            {t("payment.modal.message")}
          </h3>
          <div className="text-justify text-13px sm:text-sm">
            <span className="font-semibold">
              {t("payment.modal.notes_label")}:{" "}
            </span>
            <span>{t("payment.modal.notes")}</span>
          </div>
          <div className="mt-5 flex flex-col items-center justify-center gap-2.5 sr-500:flex-row">
            <button
              className="w-full rounded-md border border-solid border-gray-200 px-4 py-2.5 text-13px font-medium text-gray-700 hover:border-main hover:text-main sr-600:w-fit sm:text-sm"
              onClick={handlePayLater}
            >
              {t("payment.modal.pay_later")}
            </button>
            <button
              className="w-full rounded-md bg-main px-4 py-2.5 text-13px font-medium text-white hover:bg-primary sr-600:w-fit sm:text-sm"
              onClick={handlePayNow}
            >
              {t("payment.modal.pay_now")}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ConfirmPaymentModal;
