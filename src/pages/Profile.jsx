import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const Profile = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.profile"));

  return <BodyLayout>Profile </BodyLayout>;
};

export default Profile;
