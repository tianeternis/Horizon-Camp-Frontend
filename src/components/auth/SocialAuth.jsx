import { auth, google, signIn } from "@/configs/firebase";
import { useTranslation } from "react-i18next";
import { FcGoogle } from "react-icons/fc";

const SocialAuth = () => {
  const { t } = useTranslation();

  const handleLoginWithGoogle = async () => {
    try {
      const res = await signIn(auth, new google());

      const { email, displayName } = res.user;
    } catch (error) {
      console.log("Sign in with google error: ", error);
    }
  };

  return (
    <div className="w-full py-6 sm:pt-0">
      <div className="mb-4 flex items-center gap-6 px-3 text-center text-13px text-gray-600 sm:px-0 sm:text-sm">
        <div className="w-full border-t border-solid border-black/10"></div>
        <span className="shrink-0 grow">{t("auth.or")}</span>
        <div className="w-full border-t border-solid border-black/10"></div>
      </div>
      <div className="w-full px-3">
        <button
          className="mx-auto flex w-full flex-nowrap items-center justify-center gap-2.5 rounded-sm border border-solid border-gray-100 bg-transparent px-8 py-2.5 text-gray-800 hover:bg-gray-50 sm:w-6/10"
          onClick={handleLoginWithGoogle}
        >
          <FcGoogle className="text-xl" />
          <span className="text-sm font-medium">
            {t("auth.login_with_google")}
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocialAuth;
