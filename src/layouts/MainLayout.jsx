import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import BackToTop from "@/components/backTop/BackToTop";
import LanguageSwitcher from "@/components/language/LanguageSwitcher";

const INDEX_LIST = ["/"];

const MainLayout = ({}) => {
  const location = useLocation();
  const isIndex = INDEX_LIST.includes(location.pathname);

  return (
    <div className="font-main text-base">
      <Header index={isIndex} />
      <div>
        <Outlet />
      </div>
      <Footer />

      <BackToTop />
      <LanguageSwitcher />
    </div>
  );
};

export default MainLayout;
