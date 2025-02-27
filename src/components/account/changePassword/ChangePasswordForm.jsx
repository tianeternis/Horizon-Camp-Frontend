import { useAppForm } from "@/hooks";
import PasswordInput from "@/components/inputs/PassowordInput";
import { PATHS } from "@/routes";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { changePasswordFormSchema } from "./changePasswordFormSchema";
import { changePassword } from "@/services/userService";
import { useDispatch, useSelector } from "react-redux";
import StatusCodes from "@/utils/status/StatusCodes";
import { toast } from "react-toastify";
import { logoutSuccess } from "@/redux/reducer/userSlice";

const ChangePasswordForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm(changePasswordFormSchema);

  const user = useSelector((state) => state.user.account);

  const dispatch = useDispatch();
  const handleChangePassword = async (data) => {
    const res = await changePassword(user?._id, data);

    if (res && res.EC === StatusCodes.SUCCESS) {
      toast.success(res.EM);
      dispatch(logoutSuccess());
    }

    if (res && res.EC === StatusCodes.ERRROR) {
      toast.error(res.EM);
    }
  };

  return (
    <div className="w-full">
      <form
        id="change_password"
        className="w-full space-y-5"
        onSubmit={handleSubmit(handleChangePassword)}
      >
        <div className="flex flex-col gap-1.5 font-medium sm:flex-row sm:items-start sm:gap-8">
          <label className="text-13px sm:w-2/5 sm:text-right sm:text-sm md:w-1/2 lg:w-5/12">
            {t("account.change-password.current_password")}
          </label>
          <PasswordInput
            label="currentPassword"
            register={register}
            errors={errors}
            className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-13px text-gray-900 outline-none sm:text-sm"
          />
        </div>
        <div className="flex flex-col gap-1.5 font-medium sm:flex-row sm:items-start sm:gap-8">
          <label className="text-13px sm:w-2/5 sm:text-right sm:text-sm md:w-1/2 lg:w-5/12">
            {t("account.change-password.new_password")}
          </label>
          <PasswordInput
            label="newPassword"
            register={register}
            errors={errors}
            className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-13px text-gray-900 outline-none sm:text-sm"
          />
        </div>
        <div className="flex flex-col gap-1.5 font-medium sm:flex-row sm:items-start sm:gap-8">
          <label className="text-13px sm:w-2/5 sm:text-right sm:text-sm md:w-1/2 lg:w-5/12">
            {t("account.change-password.confirm_password")}
          </label>
          <PasswordInput
            label="confirmNewPassword"
            register={register}
            errors={errors}
            className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-13px text-gray-900 outline-none sm:text-sm"
          />
        </div>
      </form>
      <div className="mt-8 flex flex-col gap-3 sm:mx-auto sm:w-2/3 sm:flex-row sm:items-center sm:gap-4 md:w-full md:flex-row-reverse md:gap-8">
        <div className="w-full">
          <button
            type="submit"
            form="change_password"
            className="w-full rounded-md bg-main px-4 py-2 text-sm font-semibold text-white hover:bg-primary"
          >
            {t("account.change-password.update_password")}
          </button>
        </div>
        <div className="w-full text-center sm:text-left md:w-1/2 md:text-right lg:w-5/12">
          <Link to={PATHS.resetPassword()}>
            <span className="text-sm font-semibold text-secondary hover:text-main">
              {t("account.change-password.forgot_password")}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
