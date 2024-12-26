import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const DeliveryAndReceipt = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.delivery-and-receipt"));

  return (
    <BodyLayout className="w-full py-8">
      <div className="space-y-6">
        <div className="rounded-sm border-b-2 border-solid border-main bg-white px-4 py-3.5 text-15px font-bold uppercase sm:text-base">
          {t("delivery-and-receipt.title")}
        </div>
        <div className="space-y-6 rounded-sm bg-white p-4 text-justify">
          <h4 className="text-lg font-semibold text-black sm:text-xl">
            {t("delivery-and-receipt.content-title")}
          </h4>
          <div className="space-y-2">
            <p className="text-15px font-semibold text-primary sm:text-base">
              I. {t("delivery-and-receipt.content_1.title")}:
            </p>
            <ul className="list-disc space-y-1.5 pl-8 text-sm sm:text-15px">
              <li>{t("delivery-and-receipt.content_1.des_1")}</li>
              <li>{t("delivery-and-receipt.content_1.des_2")}</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-15px font-semibold text-primary sm:text-base">
              II. {t("delivery-and-receipt.content_2.title")}:
            </p>
            <ul className="list-disc space-y-1.5 pl-8 text-sm sm:text-15px">
              <li>{t("delivery-and-receipt.content_2.des_1")}</li>
              <li>{t("delivery-and-receipt.content_2.des_2")}</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-15px font-semibold text-primary sm:text-base">
              III. {t("delivery-and-receipt.content_3.title")}:
            </p>
            <ul className="list-disc space-y-1.5 pl-8 text-sm sm:text-15px">
              <li>{t("delivery-and-receipt.content_3.des_1")}</li>
              <li>{t("delivery-and-receipt.content_3.des_2")}</li>
            </ul>
          </div>
        </div>
      </div>
    </BodyLayout>
  );
};

export default DeliveryAndReceipt;
