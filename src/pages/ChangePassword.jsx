import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const ChangePassword = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.change-password"));

  return <BodyLayout>ChangePassword</BodyLayout>;
};

export default ChangePassword;
