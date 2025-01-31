import { RxDoubleArrowRight } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { Drawer, useMediaQuery } from "@mui/material";
import CategoryMenu from "./category/CategoryMenu";
import SearchFilter from "./filter/SearchFilter";

const open = true;

const Sidebar = ({}) => {
  const { t } = useTranslation();

  const screen_950 = useMediaQuery("(min-width: 950px)");

  return (
    <>
      <div className="hidden w-64 sr-950:block">
        <div className="w-full space-y-4">
          <CategoryMenu />
          <SearchFilter />
        </div>
      </div>
      <div className="sr-950:hidden">
        <Drawer open={open && screen_950 ? false : open} anchor="right">
          <div className="w-full bg-white font-main sr-500:w-80">
            <div className="w-full divide-y-2 divide-solid divide-gray-300 sr-950:space-y-4">
              <div className="inline-flex cursor-pointer items-center gap-2 p-4 text-15px font-bold uppercase hover:text-main">
                <RxDoubleArrowRight className="h-5 w-5" />{" "}
                {t("navigation.close")}
              </div>
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
