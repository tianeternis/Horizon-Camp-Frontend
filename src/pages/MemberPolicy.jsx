import { useDynamicTitle } from "@/hooks";
import { useTranslation } from "react-i18next";

const MemberPolicy = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.member-policy"));

  return <div>MemberPolicy </div>;
};

export default MemberPolicy;
