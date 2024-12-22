import logo from "@/assets/images/logo.webp";
import { NavLink } from "react-router-dom";
import { RxDoubleArrowRight } from "react-icons/rx";
import { motion } from "framer-motion";

const Drawer = ({ openDrawer = false, toggleDrawer = (v) => {} }) => {
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
            <NavLink to="/" onClick={() => toggleDrawer(false)}>
              <img src={logo} className="w-16" />
            </NavLink>
            <div
              onClick={() => toggleDrawer(false)}
              className="inline-flex cursor-pointer items-center gap-2 text-base font-bold uppercase hover:text-main"
            >
              <RxDoubleArrowRight className="h-5 w-5" /> Close
            </div>
          </div>
          <ul className="text-base">
            <li className="py-3">
              <NavLink
                to="/"
                className="font-semibold duration-300 hover:text-main"
              >
                Trang chủ
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                to="/about"
                className="font-semibold duration-300 hover:text-main"
              >
                Về chúng tôi
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                to="/products"
                className="font-semibold duration-300 hover:text-main"
              >
                Sản phẩm
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                to="/contact"
                className="font-semibold duration-300 hover:text-main"
              >
                Liên hệ
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                to="/faqs"
                className="font-semibold duration-300 hover:text-main"
              >
                FAQs
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                to="/blog"
                className="font-semibold duration-300 hover:text-main"
              >
                Blog dã ngoại
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Drawer;
