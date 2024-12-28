import { useDynamicTitle } from "@/hooks";
import AuthLayout from "@/layouts/AuthLayout";
import { useTranslation } from "react-i18next";

const Login = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.login"));

  return <AuthLayout>Login </AuthLayout>;
};

export default Login;
