import "@/assets/css/header.css";
import logo from "@/assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import { RxDoubleArrowRight } from "react-icons/rx";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = ({}) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (newOpen) => {
    setOpenDrawer(newOpen);
  };

  useEffect(() => {
    // Thay đổi overflow của body khi drawer mở
    document.body.style.overflow = openDrawer ? "hidden" : "auto";

    // Clean up khi component unmount hoặc drawer đóng
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openDrawer]);

  return (
    <div className="header">
      <div className="absolute left-0 right-0 top-0 z-20 w-full">
        <div className="bg-white/85">
          <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-3 py-3 lg:py-2.5">
            <NavLink to="/" className="flex items-center justify-center">
              <img src={logo} className="w-16 md:w-24 lg:w-28" />
            </NavLink>
            <div className="relative hidden w-1/2 md:block">
              <input
                className="w-full rounded-full border border-solid border-secondary/80 bg-transparent px-4 py-2.5 text-sm outline-none"
                placeholder="Bạn muốn tìm gì?"
              />
              <RiSearch2Line className="absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2 cursor-pointer text-main" />
            </div>
            <div className="hidden items-center gap-3 text-15px md:flex lg:text-base">
              <NavLink
                to="/login"
                className="font-medium text-secondary hover:text-main"
              >
                Đăng nhập
              </NavLink>
              <div className="h-4 border-l border-solid border-black"></div>
              <NavLink
                to="/register"
                className="font-medium text-secondary hover:text-main"
              >
                Đăng ký
              </NavLink>
            </div>
            <div className="flex items-center gap-2.5 md:hidden">
              <div className="cursor-pointer text-secondary duration-500 hover:text-main">
                <BiUser className="h-6 w-6" />
              </div>
              <Link
                to="/wishlish"
                className="text-secondary duration-500 hover:text-main"
              >
                <AiOutlineHeart className="h-6 w-6" />
              </Link>
              <Link
                to="/cart"
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
        <div className="bg-secondary/85 text-white">
          <div className="mx-auto hidden w-full max-w-screen-xl items-center justify-between px-3 py-5 md:flex">
            <ul className="hidden items-center gap-6 text-15px md:flex lg:gap-10">
              <li>
                <NavLink
                  to="/"
                  className="font-medium duration-500 hover:text-main"
                >
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="font-medium duration-500 hover:text-main"
                >
                  Về chúng tôi
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="font-medium duration-500 hover:text-main"
                >
                  Sản phẩm
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="font-medium duration-500 hover:text-main"
                >
                  Liên hệ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faqs"
                  className="font-medium duration-500 hover:text-main"
                >
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="font-medium duration-500 hover:text-main"
                >
                  Blog dã ngoại
                </NavLink>
              </li>
            </ul>
            <div className="flex items-center gap-2.5 sm:gap-4">
              <Link to="/wishlish" className="duration-500 hover:text-main">
                <AiOutlineHeart className="h-6 w-6" />
              </Link>
              <Link to="/cart" className="duration-500 hover:text-main">
                <LuShoppingCart className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="flex w-full justify-center px-3 py-4 md:hidden">
            <div className="relative w-full sm:w-3/4">
              <input
                className="w-full rounded-2xl border border-solid border-white bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-white/85"
                placeholder="Bạn muốn tìm gì?"
              />
              <RiSearch2Line className="absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2 cursor-pointer text-main" />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="fixed bottom-0 right-0 top-0 z-50 flex w-full flex-nowrap overflow-hidden md:hidden"
        initial={{ width: 0 }}
        animate={{ width: openDrawer ? "100%" : 0 }}
        exit={{ width: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="grow bg-black/60"></div>
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
    </div>
  );
};

export default Header;
