import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { Trans, useTranslation } from "react-i18next";

const ReturnPolicy = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.return-policy"));

  return (
    <BodyLayout className="w-full py-8">
      <div className="space-y-6">
        <div className="rounded-sm border-b-2 border-solid border-main bg-white p-4 text-15px font-bold uppercase sm:text-base">
          {t("return-policy.title")}
        </div>
        <div className="space-y-5 rounded-sm bg-white px-4 py-3.5 text-justify text-sm sm:text-15px">
          <div className="space-y-3.5">
            <h4 className="text-lg font-semibold text-primary sm:text-xl">
              {t("return-policy.title")}
            </h4>
            <ul className="list-disc space-y-2 pl-8 text-sm sm:text-15px">
              <li>{t("return-policy.policy.policy_1")}</li>
              <li>
                <Trans i18nKey="return-policy.policy.policy_2" />
              </li>
            </ul>
            <p>
              <Trans i18nKey="return-policy.policy.policy_3" />
            </p>
          </div>
          <div className="space-y-3.5">
            <h4 className="text-lg font-semibold text-primary sm:text-xl">
              {t("return-policy.conditions.title")}
            </h4>
            <ul className="list-disc space-y-2 pl-8 text-sm sm:text-15px">
              <li>{t("return-policy.conditions.condition_1")}</li>
              <li>{t("return-policy.conditions.condition_2")}</li>
              <li>{t("return-policy.conditions.condition_3")}</li>
              <li>{t("return-policy.conditions.condition_4")}</li>
              <li>{t("return-policy.conditions.condition_5")}</li>
            </ul>
          </div>
          <div className="space-y-3.5">
            <h4 className="text-15px font-semibold italic sm:text-base">
              {t("return-policy.contact.title")}
            </h4>
            <ul className="list-disc space-y-1.5 pl-8 text-sm sm:text-15px">
              <li>{t("return-policy.contact.phone")}: 0123456789</li>
              <li>
                {t("return-policy.contact.email")}:
                horizoncamp.support@gmail.com
              </li>
              <li>
                {t("return-policy.contact.address")}: Khu 2, Đ. 3/2, P. Xuân
                Khánh, Q. Ninh Kiều, TP. CT
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BodyLayout>
  );
};

export default ReturnPolicy;
