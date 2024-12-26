import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const InformationSecurity = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.information-security"));

  return (
    <BodyLayout className="w-full py-8">
      <div className="space-y-6">
        <div className="rounded-sm border-b-2 border-solid border-main bg-white px-4 py-3.5 text-15px font-bold uppercase sm:text-base">
          {t("information-security.title")}
        </div>
        <div className="space-y-5 rounded-sm bg-white p-4 text-justify text-sm sm:text-15px">
          <div className="space-y-3.5">
            <h4 className="text-lg font-semibold text-primary sm:text-xl">
              {t("information-security.content_1.title")}
            </h4>
            <ul className="list-disc space-y-2 pl-8 text-sm sm:text-15px">
              <li>{t("information-security.content_1.des_1")}</li>
              <li>{t("information-security.content_1.des_2")}</li>
              <li>{t("information-security.content_1.des_3")}</li>
              <li>{t("information-security.content_1.des_4")}</li>
              <li>{t("information-security.content_1.des_5")}</li>
              <li>{t("information-security.content_1.des_6")}</li>
              <li>{t("information-security.content_1.des_7")}</li>
            </ul>
          </div>
          <div className="space-y-3.5">
            <h4 className="text-lg font-semibold text-primary sm:text-xl">
              {t("information-security.content_2.title")}
            </h4>
            <ul className="list-disc space-y-2 pl-8 text-sm sm:text-15px">
              <li>{t("information-security.content_2.des_1")}</li>
              <li>{t("information-security.content_2.des_2")}</li>
              <li>{t("information-security.content_2.des_3")}</li>
              <li>{t("information-security.content_2.des_4")}</li>
            </ul>
            <p>{t("information-security.content_2.des_5")}</p>
          </div>
          <div className="space-y-3.5">
            <h4 className="text-lg font-semibold text-primary sm:text-xl">
              {t("information-security.content_3.title")}
            </h4>
            <p className="">{t("information-security.content_3.des")}</p>
          </div>
        </div>
      </div>
    </BodyLayout>
  );
};

export default InformationSecurity;
