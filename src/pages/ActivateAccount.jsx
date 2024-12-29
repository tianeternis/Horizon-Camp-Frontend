import ActivationForm from "@/components/auth/activateAccount/ActivationForm";
import ActivationInformaion from "@/components/auth/activateAccount/ActivationInformaion";
import ActivationSkeleton from "@/components/auth/activateAccount/ActivationSkeleton";
import CongratulationsConfetti from "@/components/auth/activateAccount/CongratulationsConfetti";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { PATHS } from "@/routes";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ActivateAccount = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.activate-account"));

  const [isActivated, setIsActivated] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAcceptActivate = () => {
    setShowSkeleton(true);
    setTimeout(() => {
      setShowSkeleton(false);
      setIsActivated(true);
    }, 1000);
  };

  const handleActivateAccount = (data) => {
    console.log(data);
    setIsActivated(false);
    setShowConfetti(true);
  };

  return (
    <div className="w-full bg-white sm:bg-transparent">
      <BodyLayout>
        <div className="w-full">
          <div className="relative w-full space-y-4 p-6 sm:mx-auto sm:w-[34rem] sm:rounded-md sm:bg-white sm:shadow-[0_0_8px_3px_rgba(0,0,0,0.02)] md:w-[40rem]">
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
              {isActivated === false &&
                showSkeleton === false &&
                showConfetti === false && (
                  <ActivationInformaion handleAccept={handleAcceptActivate} />
                )}
              {showSkeleton === true && <ActivationSkeleton />}
              {isActivated === true && (
                <ActivationForm handleActivateAccount={handleActivateAccount} />
              )}
              {showConfetti === true && <CongratulationsConfetti />}
            </div>
          </div>
        </div>
      </BodyLayout>
    </div>
  );
};

export default ActivateAccount;
