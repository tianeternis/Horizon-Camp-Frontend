import "@/assets/css/layout.css";
import { NavLink } from "react-router-dom";
import BodyLayout from "./BodyLayout";
import { useTranslation } from "react-i18next";
import { PATHS } from "@/routes";
import SocialAuth from "@/components/auth/SocialAuth";

const AuthLayout = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-white sm:bg-transparent">
      <BodyLayout>
        <div className="auth w-full">
          <div className="w-full sm:mx-auto sm:w-[32rem] sm:rounded-md sm:bg-white md:w-[34rem]">
            <div className="w-full px-3 text-black sm:p-6">
              <ul className="flex-nowraps mb-8 flex w-full gap-1">
                <li className="grow font-semibold">
                  <NavLink
                    to={PATHS.register()}
                    className="flex w-full items-center justify-center border-b border-solid border-b-black/20 py-3 uppercase hover:text-primary"
                  >
                    {t("auth.register")}
                  </NavLink>
                </li>
                <li className="grow font-semibold">
                  <NavLink
                    to={PATHS.login()}
                    className="flex w-full items-center justify-center border-b border-solid border-b-black/20 py-3 uppercase hover:text-primary"
                  >
                    {t("auth.login")}
                  </NavLink>
                </li>
              </ul>

              {children}
            </div>
            <SocialAuth />
          </div>
        </div>
      </BodyLayout>
    </div>
  );
};

export default AuthLayout;
