import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const Login = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.login"));

  return <BodyLayout>Login </BodyLayout>;
};

export default Login;
