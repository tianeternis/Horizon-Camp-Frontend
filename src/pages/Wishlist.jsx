import { useDynamicTitle } from "@/hooks";
import { useTranslation } from "react-i18next";

const Wishlist = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.wishlist"));

  return <div>Wishlist </div>;
};

export default Wishlist;
