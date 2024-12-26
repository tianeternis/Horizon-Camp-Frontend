import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const Products = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.product"));

  return <BodyLayout>Product </BodyLayout>;
};

export default Products;
