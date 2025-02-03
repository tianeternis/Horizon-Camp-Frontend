import { RxDoubleArrowRight } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Drawer, useMediaQuery } from "@mui/material";
import CategoryMenu from "./category/CategoryMenu";
import SearchFilter from "./filter/SearchFilter";
import { useProductContext } from "../context/ProductContext";

const Sidebar = ({}) => {
  const { t } = useTranslation();

  const screen_950 = useMediaQuery("(min-width: 950px)");

  const { showDrawer, setShowDrawer } = useProductContext();

  useEffect(() => {
    if (showDrawer && screen_950) {
      toggleDrawer(false);
    }
  }, [showDrawer, setShowDrawer, screen_950]);

  const toggleDrawer = (value) => {
    setShowDrawer(value);
  };

  return (
    <>
      <div className="hidden w-64 sr-950:block">
        <div className="w-full space-y-4">
          <CategoryMenu />
          <SearchFilter />
        </div>
      </div>
      <div className="sr-950:hidden">
        <Drawer
          open={showDrawer}
          onClose={() => toggleDrawer(false)}
          anchor="right"
        >
          <div className="w-full bg-white font-main sr-500:w-80">
            <div className="w-full divide-y-2 divide-solid divide-gray-300 sr-950:space-y-4">
              <button
                className="inline-flex cursor-pointer items-center gap-2 p-4 text-15px text-gray-700 hover:text-main"
                onClick={() => setShowDrawer(false)}
              >
                <RxDoubleArrowRight className="h-5 w-5" />{" "}
                {t("navigation.close")}
              </button>
              <CategoryMenu />
              <SearchFilter />
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Sidebar;
