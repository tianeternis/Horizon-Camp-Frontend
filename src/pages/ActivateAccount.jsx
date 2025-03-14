import ActivationForm from "@/components/auth/activateAccount/ActivationForm";
import ActivationSkeleton from "@/components/auth/activateAccount/ActivationSkeleton";
import CongratulationsConfetti from "@/components/auth/activateAccount/CongratulationsConfetti";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { PATHS } from "@/routes";
import {
  sendActivationCode,
  verifyActivationCode,
} from "@/services/authService";
import StatusCodes from "@/utils/status/StatusCodes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ActivateAccount = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.activate-account"));

  const [isActivated, setIsActivated] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    setShowSkeleton(true);
    setTimeout(() => {
      setShowSkeleton(false);
      setIsActivated(true);
    }, 1000);
  }, []);

  const handleActivateAccount = async (data) => {
    const res = await verifyActivationCode({
      _id: params?.id,
      activationCode: data?.activationCode,
    });

    if (res && res.EC === StatusCodes.SUCCESS) {
      setIsActivated(false);
      setShowConfetti(true);
    }

    if (res && res.EC === StatusCodes.ERRROR) {
      toast.error(res.EM);
    }
  };

  const handleResendCode = async () => {
    setLoading(true);
    const res = await sendActivationCode(params?.id);
    setLoading(false);

    if (res && res.EC === StatusCodes.SUCCESS) {
      toast.success(res.EM);
    }

    if (res && res.EC === StatusCodes.ERRROR) {
      toast.error(res.EM);
    }
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
              <span className="text-xs sm:text-13px">
                {t("auth.activate-account.back_to_home")}
              </span>
            </Link>
            <div className="w-full space-y-6">
              <h4 className="pb-2 text-center text-lg font-semibold uppercase text-black md:text-xl">
                {t("auth.activate-account.title.main")}
              </h4>
              {showSkeleton === true && <ActivationSkeleton />}
              {isActivated === true && (
                <ActivationForm
                  handleActivateAccount={handleActivateAccount}
                  handleResendCode={handleResendCode}
                  loading={loading}
                />
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
