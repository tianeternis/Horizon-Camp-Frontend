import FAQsItem from "@/components/faqs/FAQsItem";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { PATHS } from "@/routes";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const FAQs = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.faqs"));

  const faqs = t("faqs.content", { returnObjects: true });

  return (
    <div className="bg-white">
      <BodyLayout>
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h4 className="relative pb-2 text-2xl font-semibold before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-32 before:-translate-x-1/2 before:bg-main md:before:w-52 lg:text-3xl">
              {t("faqs.title")}
            </h4>
            <p className="text-sm text-gray-800 lg:text-15px">
              {t("faqs.sub_title")}{" "}
              <Link
                to={PATHS.contact()}
                className="font-medium uppercase hover:text-main"
              >
                {t("faqs.contact")}
              </Link>
            </p>
          </div>
          <div className="w-full space-y-12">
            {faqs.length > 0 &&
              faqs.map((item, i) => (
                <div key={`faqs-${i}`} className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="shrink-0 grow text-lg font-semibold uppercase md:text-xl">
                      {item.title}
                    </span>
                    <div className="w-full border-t border-solid border-black/15"></div>
                  </div>
                  <div className="space-y-6">
                    {item.questions.map((questionItem, index) => (
                      <FAQsItem
                        key={`faqs-question-${index}`}
                        question={questionItem.question}
                        answer={questionItem.answer}
                      />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </BodyLayout>
    </div>
  );
};

export default FAQs;
