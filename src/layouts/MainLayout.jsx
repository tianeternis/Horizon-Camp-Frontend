import { Outlet } from "react-router-dom";
import Header from "@/components/header/Header";
import BackToTop from "@/components/backTop/BackToTop";

const MainLayout = ({}) => {
  return (
    <div className="font-main text-base">
      <Header />
      <div>
        <Outlet />
      </div>
      <div>Footer</div>
      <BackToTop />
    </div>
  );
};

export default MainLayout;
