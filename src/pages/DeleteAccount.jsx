import { useDynamicTitle } from "@/hooks";
import DeleteConfirmation from "@/components/account/deleteAccount/DeleteConfirmation";
import TextSkeleton from "@/components/skeleton/TextSkeleton";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const DeleteAccount = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.delete-account"));

  const [isQualified, setIsQualified] = useState({
    qualified: true,
    orders: 0,
    isPassAuthRequired: true,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="divide-y divide-solid divide-black/10 px-2 text-black md:px-6">
      <div className="py-4">
        <p className="text-lg font-bold">{t("account.delete-account.title")}</p>
      </div>
      <div className="py-6">
        {loading === true && <TextSkeleton />}
        {loading === false &&
          (isQualified.qualified === true ? (
            <DeleteConfirmation
              isPassAuthRequired={isQualified.isPassAuthRequired}
            />
          ) : (
            <div className="space-y-6 text-sm">
              <div className="space-y-3">
                <div>
                  <span className="font-semibold">
                    {t("account.delete-account.qualified.warning_0")}
                  </span>{" "}
                  {t("account.delete-account.qualified.warning_1")}
                </div>
                <ul className="list-disc space-y-3 pl-8">
                  {isQualified.orders > 0 && (
                    <li>
                      <span className="font-bold text-primary">
                        {isQualified.orders}
                      </span>{" "}
                      {t("account.delete-account.qualified.purchase")}
                    </li>
                  )}
                </ul>
                <div>{t("account.delete-account.qualified.warning_2")}</div>
              </div>
              <p> {t("account.delete-account.qualified.thanks")}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DeleteAccount;
