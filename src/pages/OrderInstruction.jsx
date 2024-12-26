import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const OrderInstrution = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.order-instruction"));

  return (
    <BodyLayout className="w-full py-8">
      <div className="space-y-6">
        <div className="rounded-sm border-b-2 border-solid border-main bg-white px-4 py-3.5 text-15px font-bold uppercase sm:text-base">
          {t("order-instruction.title")}
        </div>
        <div className="space-y-4 rounded-sm bg-white px-4 py-3.5 text-justify text-sm sm:text-15px">
          <p>
            <Trans i18nKey="order-instruction.step_1" />{" "}
            <Link to="/" className="font-medium text-blue-500 underline">
              Horizon Camp
            </Link>
            .
          </p>
          <p>
            <Trans i18nKey="order-instruction.step_2" />
          </p>
          <p>
            <Trans i18nKey="order-instruction.step_3" />
          </p>
          <div className="space-y-2">
            <p>
              <Trans i18nKey="order-instruction.step_4" />
            </p>
            <p>
              <Trans i18nKey="order-instruction.step_4_des" />
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-bold underline">
              {t("order-instruction.note.title")}:
            </p>
            <ul className="list-disc space-y-1.5 pl-8">
              <li>{t("order-instruction.note.note_1")}</li>
              <li>{t("order-instruction.note.note_2")}</li>
              <li>{t("order-instruction.note.note_3")}</li>
              <li className="font-medium">
                {t("order-instruction.note.note_4")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BodyLayout>
  );
};

export default OrderInstrution;
