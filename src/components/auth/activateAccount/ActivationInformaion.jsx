import successCheck from "@/assets/images/success-check.png";
import { Trans, useTranslation } from "react-i18next";

const ActivationInformaion = ({ handleAccept = () => {} }) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:gap-4">
        <div className="hidden w-16 sm:block">
          <img
            src={successCheck}
            alt="Success..."
            loading="lazy"
            className="w-full"
          />
        </div>
        <div className="text-sm md:text-15px">
          {t("auth.activate-account.message.msg_1", {
            email: "thienvu@gmail.com",
          })}
        </div>
      </div>
      <div className="space-y-4 text-sm md:text-15px">
        <div>{t("auth.activate-account.message.msg_2")}</div>
        <div>
          <Trans i18nKey="auth.activate-account.message.msg_3" />
        </div>
      </div>
      <div className="w-full pt-4 text-center">
        <button
          className="w-full rounded-md bg-main px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary sr-500:w-auto md:text-base"
          onClick={() => handleAccept()}
        >
          {t("auth.activate-account.activateNow")}
        </button>
      </div>
    </div>
  );
};

export default ActivationInformaion;
