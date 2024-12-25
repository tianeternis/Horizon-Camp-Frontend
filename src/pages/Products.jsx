import { useDynamicTitle } from "@/hooks";
import { useTranslation } from "react-i18next";

const Products = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.product"));

  return <div>Product </div>;
};

export default Products;
