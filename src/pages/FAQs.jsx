import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const FAQs = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.faqs"));

  return <BodyLayout>FAQs </BodyLayout>;
};

export default FAQs;
