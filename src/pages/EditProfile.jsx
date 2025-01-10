import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const EditProfile = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.edit-profile"));

  return <BodyLayout>EditProfile </BodyLayout>;
};

export default EditProfile;
