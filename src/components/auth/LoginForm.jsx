import Input from "@/components/inputs/Input";
import PasswordInput from "@/components/inputs/PassowordInput";
import { useAppForm } from "@/hooks";
import { PATHS } from "@/routes";
import { loginFormSchema } from "./authFormSchema";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/services/authService";
import StatusCodes from "@/utils/status/StatusCodes";
import { toast } from "react-toastify";
import NotificationModal from "./NotificationModal";
import { loginSuccess } from "@/redux/reducer/userSlice";

const LoginForm = ({}) => {
  const { t } = useTranslation();

  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [data, setData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm(loginFormSchema);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    const res = await login(data);

    if (res && res.EC === StatusCodes.SUCCESS) {
      toast.success(res.EM);
      dispatch(loginSuccess(res.DT));
      navigate(PATHS.home(), { replace: true });
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
        <h4 className="mb-6 text-center text-lg font-semibold uppercase text-black sm:text-xl">
          {t("auth.login")}
        </h4>
        <form
          id="login"
          className="w-full space-y-5"
          onSubmit={handleSubmit(handleLogin)}
        >
          <Input
            label="email"
            register={register}
            errors={errors}
            type="email"
            placeholder={t("auth.email")}
            className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-13px text-gray-900 outline-none placeholder:text-gray-500 sm:text-sm"
          />
          <PasswordInput
            label="password"
            register={register}
            errors={errors}
            placeholder={t("auth.password")}
            className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-13px text-gray-900 outline-none placeholder:text-gray-500 sm:text-sm"
          />
        </form>
        <div className="mt-8 w-full">
          <button
            form="login"
            className="w-full rounded-md bg-main px-4 py-2.5 text-13px font-semibold text-white hover:bg-primary sm:text-sm"
          >
            {t("auth.login")}
          </button>
        </div>
        <div className="mt-1.5 w-full text-right">
          <Link to={PATHS.resetPassword()}>
            <span className="hover:text-tertiary cursor-pointer text-xs text-gray-600 hover:text-black sm:text-13px">
              {t("auth.forgot_password")}
            </span>
          </Link>
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

export default LoginForm;
