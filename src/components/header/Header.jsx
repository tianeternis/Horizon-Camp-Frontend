import "@/assets/css/header.css";
import logo from "@/assets/images/logo.webp";
import { Link, NavLink } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = ({}) => {
  return (
    <div className="header w-full">
      <div className="bg-white">
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between p-3">
          <NavLink
            to="/"
            className="flex h-24 w-24 items-center justify-center"
          >
            <img src={logo} />
          </NavLink>
          <div className="relative w-1/2">
            <input
              className="border-secondary/80 w-full rounded-full border border-solid bg-transparent px-4 py-2.5 text-sm outline-none"
              placeholder="Bạn muốn tìm gì?"
            />
            <RiSearch2Line className="text-main absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2 cursor-pointer" />
          </div>
          <div className="flex items-center gap-3">
            <NavLink
              to="/login"
              className="hover:text-main text-secondary font-medium"
            >
              Đăng nhập
            </NavLink>
            <div className="h-4 border-l border-solid border-black"></div>
            <NavLink
              to="/register"
              className="hover:text-main text-secondary font-medium"
            >
              Đăng ký
            </NavLink>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-white">
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-3 py-5">
          <ul className="flex items-center gap-10">
            <li>
              <NavLink
                to="/"
                className="hover:text-main font-medium duration-500"
              >
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-main font-medium duration-500"
              >
                Về chúng tôi
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="hover:text-main font-medium duration-500"
              >
                Sản phẩm
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-main font-medium duration-500"
              >
                Liên hệ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faqs"
                className="hover:text-main font-medium duration-500"
              >
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="hover:text-main font-medium duration-500"
              >
                Blog dã ngoại
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <div className="hover:text-main cursor-pointer duration-500">
              <IoMdNotificationsOutline className="h-7 w-7" />
            </div>
            <Link to="/wishlish" className="hover:text-main duration-500">
              <GoHeart className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="hover:text-main duration-500">
              <LuShoppingCart className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
