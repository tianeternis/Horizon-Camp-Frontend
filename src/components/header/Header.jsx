import "@/assets/css/header.css";
import { createContext, useEffect, useState } from "react";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Drawer from "./Drawer";
import Breadcrumbs from "@/components/breadcrums/Breadcrums";

export const HeaderContext = createContext();

const Header = ({ index = false }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [keyword, setKeyword] = useState("");

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
    <HeaderContext.Provider value={{ keyword, setKeyword }}>
      <header className="header">
        <div
          className={`${index ? "index absolute" : "not-index relative"} left-0 right-0 top-0 z-20 w-full`}
        >
          <TopBar toggleDrawer={toggleDrawer} />
          <NavBar />
          {index === false && <Breadcrumbs />}
        </div>
        <Drawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
      </header>
    </HeaderContext.Provider>
  );
};

export default Header;
