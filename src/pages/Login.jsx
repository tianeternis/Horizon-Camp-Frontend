import LoginForm from "@/components/auth/LoginForm";
import { useDynamicTitle } from "@/hooks";
import AuthLayout from "@/layouts/AuthLayout";
import { useTranslation } from "react-i18next";

const Login = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.login"));

  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
