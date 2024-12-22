import "@/assets/css/header.css";
import logo from "@/assets/images/logo.webp";
import { Link, NavLink } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import { RxDoubleArrowRight } from "react-icons/rx";
import { MdArrowDropDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Drawer from "./Drawer";

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
        <TopBar toggleDrawer={toggleDrawer} />
        <NavBar />
      </div>
      <Drawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default Header;
