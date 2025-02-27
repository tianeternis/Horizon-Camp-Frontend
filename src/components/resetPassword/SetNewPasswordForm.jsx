import { useAppForm } from "@/hooks";
import Input from "@/components/inputs/Input";
import PasswordInput from "@/components/inputs/PassowordInput";
import Button from "@/components/buttons/Button";
import { setNewPasswordFormSchema } from "./resetPasswordFormSchema";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FaCircleXmark } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";
import { resetPassword, sendVerificationCode } from "@/services/userService";
import StatusCodes from "@/utils/status/StatusCodes";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutSuccess } from "@/redux/reducer/userSlice";
import { PATHS } from "@/routes";

const SetNewPasswordForm = ({ data }) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm(setNewPasswordFormSchema);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmitForm = async (values) => {
    setLoading(true);
    const res = await resetPassword(data?.id, values);

    if (res && res.EC === StatusCodes.SUCCESS) {
      toast.success(res.EM);
      dispatch(logoutSuccess());
      navigate(PATHS.login());
    }

    if (res && res.EC === StatusCodes.ERRROR) {
      setMessage(res.EM);
    }
    setLoading(false);
  };

  const handleResendCode = async () => {
    setResendLoading(true);

    const res = await sendVerificationCode({ email: data?.email });

    if (res && res.EC === StatusCodes.SUCCESS) {
      toast.success(res.EM);
      setMessage("");
    }

    if (res && res.EC === StatusCodes.ERRROR) {
      setMessage(res.EM);
    }

    setResendLoading(false);
  };

  return (
    <div>
      <div className="w-full space-y-4 rounded-md border border-dashed border-gray-300 p-4">
        <p className="text-sm">
          {t("reset-password.set-new-password.message")}
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(handleSubmitForm)}>
          <Input
            label="code"
            register={register}
            errors={errors}
            placeholder={t("reset-password.set-new-password.code")}
            className="w-full rounded-sm border border-solid border-black/15 px-3 py-2.5 text-13px text-gray-800 outline-none placeholder:text-gray-500 sm:text-sm"
          />
          <PasswordInput
            label="password"
            register={register}
            errors={errors}
            placeholder={t("reset-password.set-new-password.password")}
            className="w-full rounded-sm border border-solid border-black/15 px-3 py-2.5 text-13px text-gray-800 outline-none placeholder:text-gray-500 sm:text-sm"
          />
          <div className="flex w-full justify-center">
            <Button
              label={t("reset-password.set-new-password.confirm")}
              loading={loading}
              buttonClass="w-full rounded-md bg-main px-4 py-2 text-sm justify-center font-semibold text-white hover:bg-primary disabled:hover:bg-main sr-530:w-1/2 lg:w-1/3 lg:px-8"
            />
          </div>
        </form>
        <div className="pt-2 text-center">
          <span className="text-xs text-gray-500 sm:text-13px">
            {t("reset-password.set-new-password.send-code.message")},{" "}
          </span>
          <button
            className="inline-flex items-center gap-1 text-13px font-medium text-main hover:text-orange-700 sm:text-sm"
            onClick={handleResendCode}
          >
            {resendLoading && (
              <span>
                <CgSpinner className="animate-spin text-base sm:text-lg" />
              </span>
            )}
            {t("reset-password.set-new-password.send-code.action")}
          </button>
        </div>
        {message && (
          <div className="rounded-md border border-solid border-red-200 bg-red-50 p-4">
            <div className="flex items-center gap-4">
              <FaCircleXmark className="text-lg text-red-600 sm:text-xl" />
              <span className="text-13px sm:text-sm">{message}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SetNewPasswordForm;
