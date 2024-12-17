import { Outlet } from "react-router-dom";
import Header from "@/components/header/Header";

const MainLayout = ({}) => {
  return (
    <div className="font-main text-base">
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>Footer</div>
    </div>
  );
};

export default MainLayout;
