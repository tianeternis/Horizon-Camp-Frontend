import List from "@mui/material/List";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Tooltip } from "@mui/material";
import CustomThemeProvider from "@/utils/mui/CustomThemeProvider";
import { TbArrowsSort } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const SortMenu = ({
  sorts = [],
  selected = {},
  setSelected = (value) => {},
}) => {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, option) => {
    setSelected(option);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <CustomThemeProvider>
        <List
          component="nav"
          sx={{
            display: "flex",
            alignItems: "flex-end",
            bgcolor: "transparent",
            padding: 0,
            "& .MuiButtonBase-root.MuiListItemButton-root": {
              padding: 0,
              ":hover": {
                bgcolor: "transparent",
              },
            },
          }}
        >
          <button
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
          >
            <div className="hidden min-w-48 items-center justify-between border-b border-solid border-b-gray-300 pb-1.5 text-gray-700 hover:border-b-main sr-530:flex md:min-w-56">
              <div className="flex items-center gap-2">
                {selected?.icon ?? (
                  <TbArrowsSort className="h-4 w-4 md:h-4.5 md:w-4.5" />
                )}
                <span className="text-13px font-medium md:text-sm">
                  {t(selected?.trans) === selected?.label
                    ? selected?.label
                    : t(selected?.trans)}
                </span>
              </div>
              <MdOutlineKeyboardArrowDown
                className={`h-4 w-4 duration-300 md:h-5 md:w-5 ${open ? "rotate-180" : ""}`}
              />
            </div>
            <div className="sr-530:hidden">
              <Tooltip title={t("products.sort.title")} arrow>
                <div className="flex items-center justify-center rounded border border-solid border-gray-300 p-1 duration-300 hover:border-main hover:bg-main hover:text-white">
                  <TbArrowsSort className="h-6 w-6" />
                </div>
              </Tooltip>
            </div>
          </button>
        </List>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.1))",
                boxShadow:
                  "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                mt: 1.5,
                minWidth: { xs: "192px", md: "224px" },
                borderRadius: "4px",
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  left: "90.5%",
                  "@media (min-width:530px)": {
                    left: "50%",
                  },
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) translateX(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {sorts.map((option, index) => (
            <MenuItem
              key={`sort-menu-option-${index}-${option?.value}`}
              selected={option?.value === selected?.value}
              onClick={(event) => handleMenuItemClick(event, option)}
              sx={{
                fontFamily: "var(--font-main)",
                fontSize: { xs: "13px", md: "14px" },
                minHeight: "auto",
                "&.Mui-selected": {
                  backgroundColor: "#f09a090f",
                  color: "#ff8d00",
                  ":hover": {
                    backgroundColor: "#f09a091f",
                  },
                },
              }}
            >
              {t(option?.trans) === option?.label
                ? option?.label
                : t(option?.trans)}
            </MenuItem>
          ))}
        </Menu>
      </CustomThemeProvider>
    </div>
  );
};

export default SortMenu;
