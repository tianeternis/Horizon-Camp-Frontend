import logo from "@/assets/images/logo.webp";
import { NavLink } from "react-router-dom";
import { RxDoubleArrowRight } from "react-icons/rx";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { PATHS } from "@/routes";

const Drawer = ({ openDrawer = false, toggleDrawer = (v) => {} }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="fixed bottom-0 right-0 top-0 z-50 flex w-full flex-nowrap overflow-hidden md:hidden"
      initial={{ width: 0 }}
      animate={{ width: openDrawer ? "100%" : 0 }}
      exit={{ width: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        className="grow bg-black/60"
        onClick={() => toggleDrawer(false)}
      ></div>
      <div className="w-full bg-white/95 min-[400px]:w-2/3 sm:w-1/2">
        <div className="space-y-3 p-4">
          <div className="flex flex-nowrap items-center justify-between border-b-2 border-solid border-secondary pb-2.5">
            <NavLink to={PATHS.home()} onClick={() => toggleDrawer(false)}>
              <img src={logo} className="w-16" />
            </NavLink>
            <div
              onClick={() => toggleDrawer(false)}
              className="inline-flex cursor-pointer items-center gap-2 text-15px font-bold uppercase hover:text-main"
            >
              <RxDoubleArrowRight className="h-5 w-5" /> {t("navigation.close")}
            </div>
          </div>
          <ul className="text-15px">
            <li className="py-3">
              <NavLink
                to={PATHS.home()}
                className="font-semibold duration-300 hover:text-main"
                onClick={() => toggleDrawer(false)}
              >
                {t("navigation.home")}
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                to={PATHS.about()}
                className="font-semibold duration-300 hover:text-main"
                onClick={() => toggleDrawer(false)}
              >
                {t("navigation.about")}
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                to={PATHS.products()}
                className="font-semibold duration-300 hover:text-main"
                onClick={() => toggleDrawer(false)}
              >
                {t("navigation.product")}
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                to={PATHS.contact()}
                className="font-semibold duration-300 hover:text-main"
                onClick={() => toggleDrawer(false)}
              >
                {t("navigation.contact")}
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                to={PATHS.faqs()}
                className="font-semibold duration-300 hover:text-main"
                onClick={() => toggleDrawer(false)}
              >
                FAQs
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                to={PATHS.blogs()}
                className="font-semibold duration-300 hover:text-main"
                onClick={() => toggleDrawer(false)}
              >
                {t("navigation.picnic-blog")}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Drawer;
