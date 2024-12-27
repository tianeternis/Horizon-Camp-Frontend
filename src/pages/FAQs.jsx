import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const FAQs = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.faqs"));

  return (
    <div className="bg-white">
      <BodyLayout>FAQs </BodyLayout>
    </div>
  );
};

export default FAQs;
