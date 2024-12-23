import { Outlet } from "react-router-dom";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import BackToTop from "@/components/backTop/BackToTop";

const MainLayout = ({}) => {
  return (
    <div className="font-main text-base">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />

      <BackToTop />
    </div>
  );
};

export default MainLayout;
