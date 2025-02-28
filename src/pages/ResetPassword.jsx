import ConfirmEmailForm from "@/components/resetPassword/ConfirmEmailForm";
import SetNewPasswordForm from "@/components/resetPassword/SetNewPasswordForm";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsArrowDown } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ResetPassword = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.reset-password"));

  const [confirmed, setConfirmed] = useState({
    isConfirmed: false,
    data: null,
  });

  return (
    <div className="w-full bg-white sm:bg-transparent">
      <BodyLayout>
        <div className="w-full">
          <div className="relative w-full space-y-4 sm:mx-auto sm:w-[34rem] sm:rounded-md sm:bg-white sm:p-6 sm:shadow-[0_0_8px_3px_rgba(0,0,0,0.02)] md:w-[40rem]">
            <Link
              to={-1}
              className="flex items-center gap-2 text-secondary hover:text-primary"
            >
              <IoMdArrowBack className="h-5 w-5" />
              <span className="text-13px sm:text-sm">
                {t("reset-password.back")}
              </span>
            </Link>
            <div className="w-full space-y-6">
              <h4 className="pb-2 text-center text-base font-semibold uppercase text-black md:text-lg">
                {t("reset-password.title")}
              </h4>
              <ConfirmEmailForm
                confirmed={confirmed.isConfirmed}
                setConfirmed={setConfirmed}
              />
              {confirmed.isConfirmed && confirmed.data && (
                <>
                  <div className="flex w-full justify-center text-2xl text-gray-400">
                    <BsArrowDown />
                  </div>
                  <SetNewPasswordForm data={confirmed.data} />
                </>
              )}
            </div>
          </div>
        </div>
      </BodyLayout>
    </div>
  );
};

export default ResetPassword;
