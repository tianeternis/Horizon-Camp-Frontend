import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const SocialAuth = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full py-6">
      <div className="mb-4 text-center text-13px text-gray-600 sm:flex sm:items-center sm:gap-4 sm:text-sm">
        <div className="hidden w-full border-t border-solid border-black/10 sm:block"></div>
        <span className="shrink-0 grow">{t("auth.login_with")}</span>
        <div className="hidden w-full border-t border-solid border-black/10 sm:block"></div>
      </div>
      <div className="mx-auto flex w-72 flex-nowrap gap-2 sm:w-2/3 sm:px-6">
        <button
          className={`flex w-1/2 flex-nowrap items-center rounded-sm bg-blue-600 text-white`}
        >
          <span className="border-r border-solid border-white p-3">
            <FaFacebookF />
          </span>
          <span className="flex w-full justify-center text-sm font-medium">
            Facebook
          </span>
        </button>
        <button
          className={`flex w-1/2 flex-nowrap items-center rounded-sm bg-red-600 text-white`}
        >
          <span className="border-r border-solid border-white p-3">
            <FaGoogle />
          </span>
          <span className="flex w-full justify-center text-sm font-medium">
            Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocialAuth;
