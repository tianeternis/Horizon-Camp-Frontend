import logo from "@/assets/images/logo.webp";
import { Link, NavLink } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { ROUTES } from "@/routes";

const TopBar = ({ toggleDrawer = (v) => {} }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white/85">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-3 py-3 lg:py-2.5">
        <NavLink to={ROUTES.HOME} className="flex items-center justify-center">
          <img src={logo} className="w-16 md:w-24 lg:w-28" />
        </NavLink>
        <div className="relative hidden w-1/2 md:block">
          <input
            className="w-full rounded-full border border-solid border-secondary/80 bg-transparent px-4 py-2.5 text-sm outline-none"
            placeholder={t("search.placeholder")}
          />
          <RiSearch2Line className="absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2 cursor-pointer text-main" />
        </div>
        <div className="hidden items-center gap-3 text-15px md:flex lg:text-base">
          <Link
            to={ROUTES.LOGIN}
            className="font-medium text-secondary hover:text-main"
          >
            {t("navigation.login")}
          </Link>
          <div className="h-4 border-l border-solid border-black"></div>
          <Link
            to={ROUTES.REGISTER}
            className="font-medium text-secondary hover:text-main"
          >
            {t("navigation.register")}
          </Link>
        </div>
        <div className="flex items-center gap-2.5 md:hidden">
          <div className="group relative">
            <Link
              to={ROUTES.LOGIN}
              className="text-secondary duration-500 hover:text-main"
            >
              <BiUser className="h-6 w-6" />
            </Link>
            <div className="invisible absolute -right-5 z-40 origin-bottom scale-90 pt-4 opacity-0 transition-all duration-300 will-change-transform group-hover:visible group-hover:scale-100 group-hover:opacity-100">
              <div className="relative min-w-36 rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 before:absolute before:-top-2 before:right-6 before:h-4 before:w-4 before:rotate-45 before:bg-white">
                <div className="flex flex-col">
                  <Link
                    to={ROUTES.LOGIN}
                    className="px-3 py-2.5 text-sm text-black hover:text-main"
                  >
                    {t("navigation.login")}
                  </Link>
                  <div className="border-b border-solid border-black/15"></div>
                  <Link
                    to={ROUTES.REGISTER}
                    className="px-3 py-2.5 text-sm text-black hover:text-main"
                  >
                    {t("navigation.register")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link
            to={ROUTES.WISHLIST}
            className="text-secondary duration-500 hover:text-main"
          >
            <AiOutlineHeart className="h-6 w-6" />
          </Link>
          <Link
            to={ROUTES.CART}
            className="text-secondary duration-500 hover:text-main"
          >
            <LuShoppingCart className="h-6 w-6" />
          </Link>
          <div className="cursor-pointer text-secondary duration-500 hover:text-main">
            <span onClick={() => toggleDrawer(true)}>
              <CgMenuRightAlt className="h-7 w-7" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
