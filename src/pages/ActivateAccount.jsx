import successCheck from "@/assets/images/success-check.png";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { PATHS } from "@/routes";
import { Trans, useTranslation } from "react-i18next";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ActivateAccount = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.activate-account"));

  return (
    <div className="w-full bg-white sm:bg-transparent">
      <BodyLayout>
        <div className="w-full">
          <div className="w-full space-y-4 p-6 sm:mx-auto sm:w-[32rem] sm:rounded-md sm:bg-white md:w-[40rem]">
            <Link
              to={PATHS.home()}
              className="flex items-center gap-2 text-secondary hover:text-primary"
            >
              <IoMdArrowBack className="h-5 w-5" />
              <span className="text-13px sm:text-sm">
                {t("auth.activate-account.back_to_home")}
              </span>
            </Link>
            <div className="w-full space-y-6">
              <h4 className="pb-2 text-center text-xl font-semibold uppercase text-black md:text-2xl">
                {t("auth.activate-account.title")}
              </h4>
              <div className="sm:flex sm:items-center sm:gap-4">
                <div className="hidden w-16 sm:block">
                  <img
                    src={successCheck}
                    alt="Success..."
                    loading="lazy"
                    className="w-full"
                  />
                </div>
                <div className="text-sm md:text-15px">
                  {t("auth.activate-account.message.msg_1", {
                    email: "thienvu@gmail.com",
                  })}
                </div>
              </div>
              <div className="space-y-4 text-sm md:text-15px">
                <div>{t("auth.activate-account.message.msg_2")}</div>
                <div>
                  <Trans i18nKey="auth.activate-account.message.msg_3" />
                </div>
              </div>
              <div className="w-full pt-4 text-center">
                <button className="w-full rounded-md bg-main px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary sr-500:w-auto md:text-base">
                  {t("auth.activate-account.activateNow")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </BodyLayout>
    </div>
  );
};

export default ActivateAccount;
