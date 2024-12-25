import { useDynamicTitle } from "@/hooks";
import { useTranslation } from "react-i18next";

const Contact = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.contact"));

  return <div>Contact </div>;
};

export default Contact;
