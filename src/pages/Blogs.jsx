import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const Blogs = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.picnic-blog"));

  return <BodyLayout>Blogs </BodyLayout>;
};

export default Blogs;
