import { useDynamicTitle } from "@/hooks";
import { useTranslation } from "react-i18next";

const Login = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.login"));

  return <div>Login </div>;
};

export default Login;
