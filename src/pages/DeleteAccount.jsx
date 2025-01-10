import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const DeleteAccount = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.delete-account"));

  return <BodyLayout>DeleteAccount </BodyLayout>;
};

export default DeleteAccount;
