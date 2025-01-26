import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { TbArrowsSort } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSortAZ, BiSortDown, BiSortUp, BiSortZA } from "react-icons/bi";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { createTheme, ThemeProvider } from "@mui/material";

const options = [
  {
    label: "Mặc định",
    value: "default",
    icon: <TbArrowsSort className="h-4 w-4 md:h-4.5 md:w-4.5" />,
    trans: "products.sort.default",
  },
  {
    label: "Tên A - Z",
    value: "a-z",
    icon: <BiSortAZ className="h-4 w-4 md:h-4.5 md:w-4.5" />,
    trans: "products.sort.a-z",
  },
  {
    label: "Tên Z - A",
    value: "z-a",
    icon: <BiSortZA className="h-4 w-4 md:h-4.5 md:w-4.5" />,
    trans: "products.sort.z-a",
  },
  {
    label: "Giá tăng dần",
    value: "asc-price",
    icon: <BiSortUp className="h-4 w-4 md:h-4.5 md:w-4.5" />,
    trans: "products.sort.asc_price",
  },
  {
    label: "Giá giảm dần",
    value: "desc-price",
    icon: <BiSortDown className="h-4 w-4 md:h-4.5 md:w-4.5" />,
    trans: "products.sort.desc_price",
  },
  {
    label: "Sản phẩm mới nhất",
    value: "new",
    icon: <BiSortUp className="h-4 w-4 md:h-4.5 md:w-4.5" />,
    trans: "products.sort.newest_product",
  },
  {
    label: "Sản phẩm cũ nhất",
    value: "old",
    icon: <BiSortDown className="h-4 w-4 md:h-4.5 md:w-4.5" />,
    trans: "products.sort.oldest_product",
  },
];

const SortMenu = ({}) => {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(options[0]);

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
      <ThemeProvider
        theme={createTheme({
          breakpoints: {
            values: {
              xs: 0,
              sm: 640,
              md: 768,
              lg: 1024,
              xl: 1280,
              "2xl": 1536,
            },
          },
        })}
      >
        <List
          component="nav"
          sx={{
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
            <div className="flex min-w-48 items-center justify-between border-b border-solid border-b-gray-300 pb-1.5 text-gray-700 hover:border-b-main md:min-w-56">
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
                  left: "50%",
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
          {options.map((option, index) => (
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
      </ThemeProvider>
    </div>
  );
};

export default SortMenu;
