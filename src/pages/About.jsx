import { useDynamicTitle } from "@/hooks";
import { useTranslation } from "react-i18next";

const About = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.about"));

  return <div>About </div>;
};

export default About;
