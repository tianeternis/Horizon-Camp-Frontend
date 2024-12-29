import Input from "@/components/inputs/Input";
import PasswordInput from "@/components/inputs/PassowordInput";
import { useAppForm } from "@/hooks";
import { PATHS } from "@/routes";
import { loginFormSchema } from "./authFormSchema";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const LoginForm = ({}) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm(loginFormSchema);

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <h4 className="mb-6 text-center text-xl font-semibold uppercase text-black sm:text-2xl">
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
          className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500 sm:text-base"
        />
        <PasswordInput
          label="password"
          register={register}
          errors={errors}
          placeholder={t("auth.password")}
          className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500 sm:text-base"
        />
      </form>
      <div className="mt-8 w-full">
        <button
          form="login"
          className="w-full rounded-md bg-main px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary sm:text-base"
        >
          {t("auth.login")}
        </button>
      </div>
      <div className="mt-1.5 w-full text-right">
        <Link to={PATHS.resetPassword()}>
          <span className="hover:text-tertiary cursor-pointer text-13px text-gray-600 hover:text-black sm:text-sm">
            {t("auth.forgot_password")}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
