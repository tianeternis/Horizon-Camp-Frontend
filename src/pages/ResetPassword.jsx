import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const ResetPassword = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.reset-password"));

  return <BodyLayout>Reset password</BodyLayout>;
};

export default ResetPassword;
