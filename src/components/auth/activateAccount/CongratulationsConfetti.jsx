import confetti from "@/assets/images/confetti.gif";
import { PATHS } from "@/routes";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CongratulationsConfetti = ({}) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center pt-6">
      <div className="space-y-2">
        <img
          src={confetti}
          alt="Congratulations"
          className="mx-auto w-28 animate-bounce md:w-36"
        />
        <div className="text-center text-base font-bold text-black md:text-lg">
          🎉 {t("auth.activate-account.congratulations")} 🎉
        </div>
        <div className="flex justify-center pt-4">
          <Link
            to={PATHS.login()}
            className="rounded-md bg-main px-4 py-2 text-sm font-medium text-white hover:bg-primary md:text-15px"
          >
            {t("auth.activate-account.login_now")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsConfetti;
