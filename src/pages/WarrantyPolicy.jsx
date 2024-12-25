import { useDynamicTitle } from "@/hooks";
import { useTranslation } from "react-i18next";

const WarrantyPolicy = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.warranty-policy"));

  return <div>WarrantyPolicy </div>;
};

export default WarrantyPolicy;
