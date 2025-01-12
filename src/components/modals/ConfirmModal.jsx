import { Modal } from "@mui/material";
import Button from "@/components/buttons/Button";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

const ConfirmModal = ({
  show = false,
  onClose = () => {},
  handleOk = () => {},
  content = <></>,
  loading = false,
}) => {
  const { t } = useTranslation();

  const handleClose = (e, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") return;
    onClose();
  };

  return (
    <div>
      <Modal open={show} onClose={handleClose}>
        <div className="absolute left-1/2 top-1/2 w-9/10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-white px-6 py-8 font-main outline-none sr-500:w-7/10 sm:w-6/10 sm:px-8 md:w-5/10 lg:w-4/10 xl:w-1/3 2xl:w-3/10">
          <HiOutlineInformationCircle className="mx-auto mb-4 h-10 w-10 text-gray-400 sm:h-12 sm:w-12" />
          <h3 className="mb-5 text-center text-sm font-normal text-gray-500 sm:text-base xl:px-4">
            {content}
          </h3>
          <div className="flex justify-center gap-3">
            <Button
              onClick={handleOk}
              label={t("modal.ok")}
              loading={loading}
              loadingLabel={t("modal.ok")}
              buttonClass="inline-flex items-center rounded-lg bg-red-600 px-3 py-2 sm:px-4 text-center text-13px sm:text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 sm:py-2.5 disabled:hover:bg-red-600 disabled:opacity-80"
            />
            <Button
              onClick={handleClose}
              label={t("modal.cancel")}
              loading={loading}
              loadingLabel={t("modal.cancel")}
              loadingIconClass="!text-gray-900"
              buttonClass="rounded-lg border border-gray-200 bg-white px-3 py-2 sm:px-4 text-13px sm:text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:py-2.5 disabled:hover:bg-white disabled:hover:text-gray-900 disabled:opacity-80"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
