import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const About = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.about"));

  return <BodyLayout>About </BodyLayout>;
};

export default About;
