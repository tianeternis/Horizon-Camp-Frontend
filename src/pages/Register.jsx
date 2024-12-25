import { useDynamicTitle } from "@/hooks";
import { useTranslation } from "react-i18next";

const Register = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.register"));

  return <div>Register </div>;
};

export default Register;
