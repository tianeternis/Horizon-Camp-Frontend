import RegisterForm from "@/components/auth/RegisterForm";
import { useDynamicTitle } from "@/hooks";
import AuthLayout from "@/layouts/AuthLayout";
import { useTranslation } from "react-i18next";

const Register = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.register"));

  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
