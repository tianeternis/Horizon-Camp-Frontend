import { useDynamicTitle } from "@/hooks";
import { useTranslation } from "react-i18next";

const Blogs = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.picnic-blog"));

  return <div>Blogs </div>;
};

export default Blogs;
