import { useTranslation } from "react-i18next";
import { useAppForm } from "@/hooks";
import Input from "@/components/inputs/Input";
import Textarea from "@/components/inputs/Textarea";
import { contactFormSchema } from "./ContactFormSchema";

const ContactForm = ({}) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm(contactFormSchema);

  const hanldeSendContact = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-8 rounded-sm bg-white p-6">
      <div className="space-y-2">
        <div className="flex items-center gap-6">
          <div className="shrink-0 grow text-base font-semibold uppercase sm:text-lg">
            {t("contact.form.title")}
          </div>
          <div className="w-full border-t border-solid border-black/10"></div>
        </div>
        <div className="text-13px sm:text-sm">
          {t("contact.form.description")}
        </div>
      </div>
      <div className="w-full">
        <form
          className="w-full space-y-5 sm:space-y-8"
          onSubmit={handleSubmit(hanldeSendContact)}
        >
          <div className="w-full space-y-5 sm:grid sm:grid-cols-12 sm:gap-8 sm:space-y-0">
            <div className="block w-full sm:col-span-12 lg:col-span-4">
              <Input
                register={register}
                errors={errors}
                label="fullname"
                className="block w-full rounded-2xl border border-gray-300 bg-transparent px-4 py-3 text-13px text-gray-900 outline-none sm:text-sm"
                placeholder={t("contact.form.fullname")}
              />
            </div>
            <div className="block w-full sm:col-span-6 lg:col-span-4">
              <Input
                register={register}
                errors={errors}
                type="email"
                label="email"
                className="6 block w-full rounded-2xl border border-gray-300 bg-transparent px-4 py-3 text-13px text-gray-900 outline-none sm:text-sm"
                placeholder={t("contact.form.email")}
              />
            </div>
            <div className="block w-full sm:col-span-6 lg:col-span-4">
              <Input
                register={register}
                errors={errors}
                label="phone"
                className="block w-full rounded-2xl border border-gray-300 bg-transparent px-4 py-3 text-13px text-gray-900 outline-none sm:text-sm"
                placeholder={t("contact.form.phone")}
              />
            </div>
          </div>
          <div className="block w-full sm:col-span-12 lg:col-span-4">
            <Textarea
              register={register}
              errors={errors}
              label="content"
              rows="8"
              className="block w-full rounded-2xl border border-gray-300 bg-transparent px-4 py-3 text-13px text-gray-900 outline-none sm:text-sm"
              placeholder={t("contact.form.content")}
            />
          </div>
          <div className="w-full text-center">
            <button
              type="submit"
              className="w-full rounded-2xl bg-main px-10 py-3 text-center text-sm font-semibold text-white hover:bg-primary focus:outline-none sm:w-auto"
            >
              {t("contact.form.send")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
