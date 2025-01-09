import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const AddressBook = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.address_book"));

  return <BodyLayout>AddressBook </BodyLayout>;
};

export default AddressBook;
