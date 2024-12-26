import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const Register = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.register"));

  return <BodyLayout>Register </BodyLayout>;
};

export default Register;
