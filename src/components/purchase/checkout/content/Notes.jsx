import { useTranslation } from "react-i18next";
import { TbNotes } from "react-icons/tb";
import ContentContainerLayout from "../layout/ContentContainerLayout";

const Notes = ({ value, setValue = (value) => {} }) => {
  const { t } = useTranslation();

  return (
    <ContentContainerLayout
      title={t("order.checkout.notes.title")}
      icon={<TbNotes />}
    >
      <div className="p-4 text-black sm:px-6">
        <textarea
          value={value}
          rows={4}
          placeholder={t("order.checkout.notes.placeholder")}
          spellCheck={false}
          className="w-full rounded-md border border-solid border-gray-200 bg-transparent p-4 text-13px outline-none sm:text-sm"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </ContentContainerLayout>
  );
};

export default Notes;
