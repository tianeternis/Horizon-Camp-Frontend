import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const PicnicGuide = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.picnic-guide"));

  return <BodyLayout>PicnicGuide </BodyLayout>;
};

export default PicnicGuide;
