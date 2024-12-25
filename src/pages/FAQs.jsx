import { useDynamicTitle } from "@/hooks";
import { useTranslation } from "react-i18next";

const FAQs = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.faqs"));

  return <div>FAQs </div>;
};

export default FAQs;
