import ChangePasswordForm from "@/components/account/changePassword/ChangePasswordForm";
import { useDynamicTitle } from "@/hooks";
import { useTranslation } from "react-i18next";

const ChangePassword = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.change-password"));

  return (
    <div className="divide-y divide-solid divide-black/10 px-2 text-black md:px-6">
      <div className="py-4">
        <p className="text-base font-bold sm:text-lg">
          {t("account.change-password.title")}
        </p>
      </div>
      <div className="py-6">
        <div className="mx-auto sr-530:w-4/5 sm:w-full lg:w-4/5 xl:w-3/5">
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
