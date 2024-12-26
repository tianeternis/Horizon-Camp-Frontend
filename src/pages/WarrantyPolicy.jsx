import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { Trans, useTranslation } from "react-i18next";

const WarrantyPolicy = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.warranty-policy"));

  return (
    <BodyLayout className="w-full py-8">
      <div className="space-y-6">
        <div className="rounded-sm border-b-2 border-solid border-main bg-white p-4 text-15px font-bold uppercase sm:text-base">
          {t("warranty-policy.title")}
        </div>
        <div className="space-y-5 rounded-sm bg-white px-4 py-3.5 text-justify text-sm sm:text-15px">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary sm:text-xl">
              {t("warranty-policy.general.description")}
            </h4>
            <ul className="list-disc space-y-2 pl-8 text-sm sm:text-15px">
              <li>
                <Trans i18nKey="warranty-policy.general.return_policy" />
              </li>
              <li>
                <Trans i18nKey="warranty-policy.general.remote_customers" />
              </li>
            </ul>
            <p>
              <Trans i18nKey="warranty-policy.general.other_products" />
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary sm:text-xl">
              1. {t("warranty-policy.categories.official_products.title")}
            </h4>
            <div className="space-y-2">
              <p>
                <Trans i18nKey="warranty-policy.categories.official_products.description" />
              </p>
              <p>
                <Trans i18nKey="warranty-policy.categories.official_products.note" />
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-primary sm:text-lg">
                {t(
                  "warranty-policy.categories.official_products.warranty_process.title",
                )}
                :
              </h4>
              <ul className="list-disc space-y-2 pl-8 text-sm sm:text-15px">
                <li>
                  <Trans i18nKey="warranty-policy.categories.official_products.warranty_process.step1" />
                </li>
                <li>
                  <Trans i18nKey="warranty-policy.categories.official_products.warranty_process.step2" />
                </li>
                <li>
                  <Trans i18nKey="warranty-policy.categories.official_products.warranty_process.step3" />
                </li>
                <li>
                  <Trans i18nKey="warranty-policy.categories.official_products.warranty_process.step4" />
                </li>
                <li>
                  <Trans i18nKey="warranty-policy.categories.official_products.warranty_process.step5" />
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary sm:text-xl">
              2. {t("warranty-policy.categories.shoes.title")}
            </h4>
            <ul className="list-disc space-y-2 pl-8 text-sm sm:text-15px">
              <li>
                <Trans i18nKey="warranty-policy.categories.shoes.warranty_period" />
              </li>
              <li>
                <Trans i18nKey="warranty-policy.categories.shoes.manufacturer_defect" />
              </li>
              <li>
                <Trans i18nKey="warranty-policy.categories.shoes.user_fault" />
              </li>
              <li>
                <Trans i18nKey="warranty-policy.categories.shoes.extended_support" />
              </li>
            </ul>
            <p>
              <Trans i18nKey="warranty-policy.categories.shoes.note" />
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary sm:text-xl">
              3. {t("warranty-policy.categories.bags.title")}
            </h4>
            <ul className="list-disc space-y-2 pl-8 text-sm sm:text-15px">
              <li>
                <Trans i18nKey="warranty-policy.categories.bags.warranty_period" />
              </li>
              <li>
                <Trans i18nKey="warranty-policy.categories.bags.coverage" />
              </li>
              <li>
                <Trans i18nKey="warranty-policy.categories.bags.conditions" />
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary sm:text-xl">
              4. {t("warranty-policy.categories.lighting.title")}
            </h4>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold sm:text-15px">
                {t(
                  "warranty-policy.categories.lighting.decorative_lights.title",
                )}
              </h4>
              <ul className="list-disc space-y-2 pl-8 text-sm sm:text-15px">
                <li>
                  <Trans i18nKey="warranty-policy.categories.lighting.decorative_lights.warranty_period" />
                </li>
                <li>
                  <Trans i18nKey="warranty-policy.categories.lighting.decorative_lights.conditions" />
                </li>
                <li>
                  <Trans i18nKey="warranty-policy.categories.lighting.decorative_lights.support" />
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold sm:text-15px">
                {t(
                  "warranty-policy.categories.lighting.handheld_headlights.title",
                )}
              </h4>
              <ul className="list-disc space-y-2 pl-8 text-sm sm:text-15px">
                <li>
                  <Trans i18nKey="warranty-policy.categories.lighting.handheld_headlights.warranty_period" />
                </li>
                <li>
                  <Trans i18nKey="warranty-policy.categories.lighting.handheld_headlights.manufacturer_defect" />
                </li>
                <li>
                  <Trans i18nKey="warranty-policy.categories.lighting.handheld_headlights.no_coverage" />
                </li>
                <li>
                  <Trans i18nKey="warranty-policy.categories.lighting.handheld_headlights.battery" />
                </li>
                <li>
                  <Trans i18nKey="warranty-policy.categories.lighting.handheld_headlights.support" />
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold sm:text-15px">
                {t("warranty-policy.categories.lighting.camping_lights.title")}
              </h4>
              <ul className="list-disc space-y-2 pl-8 text-sm sm:text-15px">
                <li>
                  <Trans i18nKey="warranty-policy.categories.lighting.camping_lights.warranty_period" />
                </li>
                <li>
                  <Trans i18nKey="warranty-policy.categories.lighting.camping_lights.conditions" />
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary sm:text-xl">
              5. {t("warranty-policy.categories.foldable_chairs.title")}
            </h4>
            <ul className="list-disc space-y-2 pl-8 text-sm sm:text-15px">
              <li>
                <Trans i18nKey="warranty-policy.categories.foldable_chairs.warranty_period" />
              </li>
              <li>
                <Trans i18nKey="warranty-policy.categories.foldable_chairs.manufacturer_defect" />
              </li>
              <li>
                <Trans i18nKey="warranty-policy.categories.foldable_chairs.no_coverage" />
              </li>
              <li>
                <Trans i18nKey="warranty-policy.categories.foldable_chairs.support" />
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary sm:text-xl">
              6. {t("warranty-policy.categories.foldable_tables.title")}
            </h4>
            <ul className="list-disc space-y-2 pl-8 text-sm sm:text-15px">
              <li>
                <Trans i18nKey="warranty-policy.categories.foldable_tables.warranty_period" />
              </li>
              <li>
                <Trans i18nKey="warranty-policy.categories.foldable_tables.manufacturer_defect" />
              </li>
              <li>
                <Trans i18nKey="warranty-policy.categories.foldable_tables.no_coverage" />
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary sm:text-xl">
              7. {t("warranty-policy.categories.tents.title")}
            </h4>
            <ul className="list-disc space-y-2 pl-8 text-sm sm:text-15px">
              <li>
                <Trans i18nKey="warranty-policy.categories.tents.warranty_period" />
              </li>
              <li>
                <Trans i18nKey="warranty-policy.categories.tents.coverage" />
              </li>
              <li>
                <Trans i18nKey="warranty-policy.categories.tents.conditions" />
              </li>
              <li>
                <Trans i18nKey="warranty-policy.categories.tents.support" />
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary sm:text-xl">
              8. {t("warranty-policy.categories.portable_stoves.title")}
            </h4>
            <ul className="list-disc space-y-2 pl-8 text-sm sm:text-15px">
              <li>
                <Trans i18nKey="warranty-policy.categories.portable_stoves.warranty_period" />
              </li>
              <li>
                <Trans i18nKey="warranty-policy.categories.portable_stoves.conditions" />
              </li>
              <li>
                <Trans i18nKey="warranty-policy.categories.portable_stoves.support" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BodyLayout>
  );
};

export default WarrantyPolicy;
