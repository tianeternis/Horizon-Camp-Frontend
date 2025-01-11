import Checkbox from "@/components/inputs/Checkbox";
import PasswordInput from "@/components/inputs/PassowordInput";
import { useAppForm } from "@/hooks";
import { PATHS } from "@/routes";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { deleteAccountFormSchema } from "./deleteFormSchema";
import { motion } from "framer-motion";
import DeleteAccountModal from "./DeleteAccountModal";

const DeleteConfirmation = ({ isPassAuthRequired = true }) => {
  const [agreement, setAgreement] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm(deleteAccountFormSchema);

  const handleConfirmDelete = (data) => {
    console.log(data);
    setData(data);
    setShowDeleteModal(true);
  };

  const handleCloseModal = () => {
    setData(null);
    setShowDeleteModal(false);
  };

  const handleDelete = () => {
    console.log("submit: ", data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handleCloseModal();
    }, 3000);
  };

  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="space-y-8">
        <div className="space-y-3 text-13px md:text-sm">
          <div>{t("account.delete-account.confirmation.confirm_0")}</div>
          <ul className="list-decimal space-y-3 pl-8">
            <li>{t("account.delete-account.confirmation.confirm_1")}</li>
            <li>{t("account.delete-account.confirmation.confirm_2")}</li>
            <li>{t("account.delete-account.confirmation.confirm_3")}</li>
            <li>{t("account.delete-account.confirmation.confirm_4")}</li>
          </ul>
        </div>
        <div className="flex items-center gap-2.5">
          <Checkbox
            id="confirm_delete_checkbox"
            checked={agreement}
            onChange={(e) => setAgreement(e.target.checked)}
          />
          <label
            htmlFor="confirm_delete_checkbox"
            className="text-13px font-semibold md:text-sm"
          >
            {t("account.delete-account.confirmation.isAgreed")}
          </label>
        </div>
        {!isPassAuthRequired && (
          <motion.div
            initial={{
              display: "none",
              opacity: 0,
              visibility: "hidden",
            }}
            animate={{
              display: agreement ? "block" : "none",
              opacity: agreement ? 1 : 0,
              visibility: agreement ? "visible" : "hidden",
            }}
            transition={{
              opacity: { duration: 0.3 },
            }}
            className="will-change-auto"
          >
            <div className="flex justify-center sm:justify-start">
              <button
                className="cursor-pointer rounded-md bg-main px-8 py-2.5 text-center text-13px font-medium text-white hover:bg-primary disabled:cursor-not-allowed disabled:bg-main disabled:opacity-75 disabled:hover:bg-main md:text-sm"
                onClick={() => setShowDeleteModal(true)}
              >
                {t("account.delete-account.delete")}
              </button>
            </div>
          </motion.div>
        )}
      </div>
      {isPassAuthRequired && (
        <motion.div
          initial={{
            height: 0,
            display: "none",
            opacity: 0,
            visibility: "hidden",
          }}
          animate={{
            height: agreement ? "auto" : 0,
            display: agreement ? "block" : "none",
            opacity: agreement ? 1 : 0,
            visibility: agreement ? "visible" : "hidden",
          }}
          transition={{
            height: { duration: 0.5, ease: "easeInOut" },
            opacity: { duration: 0.3 },
          }}
          className="will-change-auto"
        >
          <motion.div
            animate={{ margin: agreement ? "2rem 0" : 0 }}
            className="border-t border-solid border-black/10"
          ></motion.div>
          <div className="space-y-3">
            <div className="text-center text-sm font-medium md:text-15px">
              {t("account.delete-account.confirm_message")}
            </div>
            <form
              className="mx-auto w-full space-y-6 sr-500:w-2/3 sr-530:w-3/5 md:w-2/3 lg:w-2/5"
              onSubmit={handleSubmit(handleConfirmDelete)}
            >
              <PasswordInput
                label="password"
                register={register}
                errors={errors}
                placeholder={t("account.delete-account.password")}
                className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-13px text-gray-900 outline-none sm:text-sm"
              />
              <div className="flex justify-center gap-4">
                <Link
                  to={PATHS.account()}
                  className="cursor-pointer rounded-md bg-gray-300 px-4 py-2 text-13px font-semibold text-black hover:bg-gray-400 md:text-sm"
                >
                  {t("account.delete-account.cancel")}
                </Link>
                <button
                  type="submit"
                  className="cursor-pointer rounded-md bg-main px-4 py-2 text-13px font-semibold text-white hover:bg-primary md:text-sm"
                >
                  {t("account.delete-account.delete")}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
      <DeleteAccountModal
        show={showDeleteModal}
        onClose={handleCloseModal}
        loading={loading}
        handleOk={handleDelete}
      />
    </div>
  );
};

export default DeleteConfirmation;
