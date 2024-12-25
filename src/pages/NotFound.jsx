import notfound from "@/assets/images/notfound.webp";
import { useDynamicTitle } from "@/hooks";
import { PATHS } from "@/routes";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.notfound"));

  return (
    <div className="bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-3 px-3 py-10 sr-500:w-2/3 md:w-1/2 md:py-16 lg:w-2/5">
        <img src={notfound} className="mb-5 w-36 sm:w-48 md:w-56 lg:w-64" />
        <p className="text-center text-xl font-bold sm:text-2xl lg:text-3xl">
          {t("notfound.message_1")}
        </p>
        <p className="text-center text-sm sm:text-15px lg:text-base">
          <Trans i18nKey="notfound.message_2" />
        </p>
        <Link
          to={PATHS.home()}
          className="hover:bg-primary mt-2 rounded-md bg-main px-4 py-2 text-sm font-medium text-white sm:text-15px lg:px-6 lg:py-2.5 lg:text-base"
        >
          {t("notfound.back")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
