import notificationBellRings from "@/assets/images/notification-bell-rings.gif";
import Input from "@/components/inputs/Input";
import { useAppForm } from "@/hooks";
import { Trans, useTranslation } from "react-i18next";
import { activationFormSchema } from "./ActivationFormSchema";

const ActivationForm = ({ handleActivateAccount = (data) => {} }) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm(activationFormSchema);

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:gap-4">
        <div className="hidden w-14 shrink-0 grow-0 sm:block">
          <img
            src={notificationBellRings}
            alt=""
            loading="lazy"
            className="w-full"
          />
        </div>
        <div className="text-sm md:text-15px">
          {t("auth.activate-account.message.msg_4", {
            email: "thienvu@gmail.com",
          })}
        </div>
      </div>
      <div className="space-y-2 text-sm md:text-15px">
        <div className="font-bold">
          {t("auth.activate-account.message.msg_5.note")}:
        </div>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>
            <Trans i18nKey="auth.activate-account.message.msg_5.note_1" />
          </li>
          <li>{t("auth.activate-account.message.msg_5.note_2")}</li>
        </ul>
      </div>
      <div className="w-full border-t border-dashed border-black/15"></div>
      <div className="space-y-4">
        <div className="text-sm md:text-15px">
          {t("auth.activate-account.message.msg_6")}{" "}
          <button className="font-semibold text-orange-500 hover:text-orange-600">
            {t("auth.activate-account.send_code")}
          </button>
          .
        </div>
        <form
          className="space-y-6"
          onSubmit={handleSubmit(handleActivateAccount)}
        >
          <div className="space-y-1">
            <label className="text-sm font-medium">
              {t("auth.activate-account.activate_code")}{" "}
              <span className="text-red-600">*</span>
            </label>
            <Input
              label="activationCode"
              register={register}
              errors={errors}
              className="w-full rounded-md border border-solid border-black/15 px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-500 sm:text-15px"
            />
          </div>
          <div className="w-full text-center">
            <button
              type="submit"
              className="w-full rounded-md bg-main px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary sm:w-auto sm:text-15px"
            >
              {t("auth.activate-account.confirm_activate")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ActivationForm;
