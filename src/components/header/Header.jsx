import "@/assets/css/header.css";
import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Drawer from "./Drawer";

const Header = ({ index = false }) => {
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
    <header className="header">
      <div
        className={`${index ? "absolute" : "relative"} left-0 right-0 top-0 z-20 w-full`}
      >
        <TopBar toggleDrawer={toggleDrawer} />
        <NavBar />
      </div>
      <Drawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
    </header>
  );
};

export default Header;
