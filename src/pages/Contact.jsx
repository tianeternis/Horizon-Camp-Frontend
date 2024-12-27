import ContactForm from "@/components/contact/ContactForm";
import ContactInformation from "@/components/contact/ContactInformation";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const Contact = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.contact"));

  return (
    <BodyLayout>
      <div className="space-y-10">
        <div className="w-full space-y-4 text-center">
          <div className="space-y-1">
            <div className="text-xl font-bold sm:text-2xl">
              {t("contact.title")}
            </div>
            <div className="mx-auto h-0.5 w-40 bg-main"></div>
          </div>
          <div className="text-sm font-medium sm:text-15px">
            {t("contact.sub-title")}
          </div>
        </div>
        <ContactInformation />
        <ContactForm />
      </div>
    </BodyLayout>
  );
};

export default Contact;
