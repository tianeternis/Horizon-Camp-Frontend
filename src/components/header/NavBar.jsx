import { Link, NavLink } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { ROUTES } from "@/routes";

const NavBar = ({}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-secondary/85 text-white">
      <div className="mx-auto hidden w-full max-w-screen-xl items-center justify-between px-3 py-5 md:flex">
        <ul className="hidden items-center gap-6 text-15px md:flex lg:gap-10">
          <li>
            <NavLink
              to={ROUTES.HOME}
              className="font-medium duration-500 hover:text-main"
            >
              {t("navigation.home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.ABOUT}
              className="font-medium duration-500 hover:text-main"
            >
              {t("navigation.about")}
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              to={ROUTES.PRODUCTS}
              className="inline-flex flex-nowrap items-center font-medium duration-500 hover:text-main"
            >
              <span>{t("navigation.product")}</span>
              <MdArrowDropDown className="h-5 w-5 transform duration-500 group-hover:rotate-180" />
            </NavLink>
            <div className="invisible absolute left-0 top-full z-40 w-full translate-y-8 transform border-t border-solid border-white/50 bg-secondary/85 opacity-0 transition-all duration-500 ease-in-out will-change-transform group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="h-80"></div>
            </div>
          </li>
          <li>
            <NavLink
              to={ROUTES.CONTACT}
              className="font-medium duration-500 hover:text-main"
            >
              {t("navigation.contact")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.FAQs}
              className="font-medium duration-500 hover:text-main"
            >
              FAQs
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.BLOGS}
              className="font-medium duration-500 hover:text-main"
            >
              {t("navigation.picnic-blog")}
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-2.5 sm:gap-4">
          <Link to={ROUTES.WISHLIST} className="duration-500 hover:text-main">
            <AiOutlineHeart className="h-6 w-6" />
          </Link>
          <Link to={ROUTES.CART} className="duration-500 hover:text-main">
            <LuShoppingCart className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="flex w-full justify-center px-3 py-2.5 sm:py-3 md:hidden">
        <div className="relative w-full sm:w-3/4">
          <input
            className="w-full rounded-2xl border border-solid border-white bg-transparent px-4 py-2.5 text-xs outline-none placeholder:text-white/85"
            placeholder={t("search.placeholder")}
          />
          <RiSearch2Line className="absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2 cursor-pointer text-main" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
