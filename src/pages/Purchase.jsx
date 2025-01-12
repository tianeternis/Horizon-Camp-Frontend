import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const Purchase = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.purchase"));

  return <BodyLayout>Purchase </BodyLayout>;
};

export default Purchase;
