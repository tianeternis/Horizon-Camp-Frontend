import LoadingButton from "@/components/buttons/LoadingButton";
import { Modal } from "@mui/material";
import { useTranslation } from "react-i18next";
import { HiOutlineInformationCircle } from "react-icons/hi2";

const DeleteAccountModal = ({
  show = false,
  onClose = () => {},
  loading = false,
  handleOk = () => {},
}) => {
  const { t } = useTranslation();

  const handleClose = (e, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") return;
    onClose();
  };

  return (
    <div>
      <Modal open={show} onClose={handleClose}>
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-white p-8 font-main outline-none"
          style={{ width: 500 }}
        >
          <HiOutlineInformationCircle className="mx-auto mb-4 h-12 w-12 text-gray-400" />
          <h3 className="mb-5 px-4 text-center text-sm font-normal text-gray-500 sm:text-base">
            {t("account.delete-account.finish_confirm")}
          </h3>
          <div className="flex justify-center gap-3">
            <LoadingButton
              onClick={handleOk}
              label={t("modal.ok")}
              loading={loading}
              loadingLabel={t("modal.ok")}
              buttonClass="inline-flex items-center rounded-lg bg-red-600 px-5 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 sm:py-2.5 disabled:hover:bg-red-600 disabled:opacity-80"
            />
            <LoadingButton
              onClick={handleClose}
              label={t("modal.cancel")}
              loading={loading}
              loadingLabel={t("modal.cancel")}
              loadingIconClass="!text-gray-900"
              buttonClass="rounded-lg border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:py-2.5 disabled:hover:bg-white disabled:hover:text-gray-900 disabled:opacity-80"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteAccountModal;
