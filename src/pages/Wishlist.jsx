import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const Wishlist = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.wishlist"));

  return <BodyLayout>Wishlist </BodyLayout>;
};

export default Wishlist;
