import { useDynamicTitle } from "@/hooks";
import { useTranslation } from "react-i18next";

const InformationSecurity = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.information-security"));

  return <div>InformationSecurity </div>;
};

export default InformationSecurity;
