import { useAppForm } from "@/hooks";
import Input from "@/components/inputs/Input";
import Button from "@/components/buttons/Button";
import { confirmEmailFormSchema } from "./resetPasswordFormSchema";
import { useTranslation } from "react-i18next";
import { FaCircleXmark } from "react-icons/fa6";
import { useState } from "react";
import { sendVerificationCode } from "@/services/userService";
import StatusCodes from "@/utils/status/StatusCodes";

const ConfirmEmailForm = ({ confirmed = false, setConfirmed = () => {} }) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm(confirmEmailFormSchema);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = async (data) => {
    setLoading(true);

    const res = await sendVerificationCode(data);

    if (res && res.EC === StatusCodes.SUCCESS) {
      setConfirmed({
        isConfirmed: true,
        data: { id: res.DT?._id, email: data?.email },
      });
      setMessage("");
    }

    if (res && res.EC === StatusCodes.ERRROR) {
      setMessage(res.EM);
    }

    setLoading(false);
  };

  return (
    <div>
      <div className="w-full space-y-4 rounded-md border border-dashed border-gray-300 p-4">
        <p className="text-sm">{t("reset-password.confirm-email.message")}</p>
        <form className="space-y-4" onSubmit={handleSubmit(handleSubmitForm)}>
          <Input
            label="email"
            register={register}
            errors={errors}
            type="email"
            placeholder="Email"
            className="w-full rounded-sm border border-solid border-black/15 px-3 py-2.5 text-13px text-gray-800 outline-none placeholder:text-gray-500 disabled:opacity-50 sm:text-sm"
            disabled={confirmed}
          />
          {!confirmed && (
            <div className="flex w-full justify-center">
              <Button
                label={t("reset-password.confirm-email.confirm")}
                loading={loading}
                buttonClass="w-full rounded-md bg-main px-4 py-2 text-sm justify-center font-semibold text-white hover:bg-primary disabled:hover:bg-main sr-530:w-1/2 lg:w-1/3 lg:px-8"
              />
            </div>
          )}
        </form>
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

export default ConfirmEmailForm;
