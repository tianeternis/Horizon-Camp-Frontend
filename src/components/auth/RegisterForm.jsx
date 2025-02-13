import Input from "@/components/inputs/Input";
import PasswordInput from "@/components/inputs/PassowordInput";
import { useAppForm } from "@/hooks";
import { registerFormSchema } from "./authFormSchema";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { register as apiRegister } from "@/services/authService";
import StatusCodes from "@/utils/status/StatusCodes";
import NotificationModal from "./NotificationModal";
import { toast } from "react-toastify";

const RegisterForm = ({}) => {
  const { t } = useTranslation();

  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [data, setData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm(registerFormSchema);

  const handleRegister = async (data) => {
    const res = await apiRegister(data);

    if (res && res.EC === StatusCodes.SUCCESS) {
      handleOpenNotification(res.DT._id, res.DT.email, true);
    }

    if (res && res.EC === StatusCodes.INACTIVE_ACCOUNT) {
      handleOpenNotification(res.DT._id, res.DT.email, false);
    }

    if (res && res.EC === StatusCodes.ERRROR) {
      toast.error(res.EM);
    }
  };

  const handleOpenNotification = (_id, email, success) => {
    setData({ _id, email, success });
    setShowNotificationModal(true);
  };

  const handleCloseNotification = () => {
    setData(null);
    setShowNotificationModal(false);
  };

  return (
    <div>
      <div className="w-full">
        <h4 className="mb-6 text-center text-xl font-semibold uppercase text-black sm:text-2xl">
          {t("auth.register")}
        </h4>
        <form
          id="register"
          className="w-full space-y-5"
          onSubmit={handleSubmit(handleRegister)}
        >
          <Input
            label="fullName"
            register={register}
            errors={errors}
            placeholder={t("auth.fullname")}
            className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500 sm:text-base"
          />
          <Input
            label="email"
            register={register}
            errors={errors}
            type="email"
            placeholder={t("auth.email")}
            className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500 sm:text-base"
          />
          <PasswordInput
            label="password"
            register={register}
            errors={errors}
            placeholder={t("auth.password")}
            className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500 sm:text-base"
          />
          <PasswordInput
            label="confirmPassword"
            register={register}
            errors={errors}
            placeholder={t("auth.confirm_password")}
            className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500 sm:text-base"
          />
        </form>
        <div className="mt-8 w-full">
          <button
            form="register"
            className="w-full rounded-md bg-main px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary sm:text-base"
          >
            {t("auth.register")}
          </button>
        </div>
      </div>
      {showNotificationModal && (
        <NotificationModal
          show={showNotificationModal}
          onClose={handleCloseNotification}
          data={data}
        />
      )}
    </div>
  );
};

export default RegisterForm;
