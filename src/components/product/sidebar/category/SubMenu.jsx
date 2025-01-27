import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SubMenu = ({ menuItem = {}, path = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
      <NavLink
        to={`${path}/${menuItem?._id}`}
        end
        className="group flex cursor-pointer flex-nowrap items-center justify-between py-2 hover:font-medium hover:text-primary"
      >
        <div className="text-sm">{menuItem?.name}</div>
        {menuItem?.subMenu?.length > 0 && (
          <span
            className={`cursor-pointer text-xl text-gray-400 transition-transform duration-500 group-hover:rounded-full group-hover:bg-gray-100 group-hover:text-gray-500 ${isOpen ? "rotate-180" : ""}`}
            onClick={(e) => toggleMenu(e)}
          >
            <MdOutlineKeyboardArrowDown />
          </span>
        )}
      </NavLink>
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={{
          hidden: {
            opacity: 0,
            height: 0,
            transition: {
              opacity: { duration: 0.2 },
              height: { duration: 0.4 },
            },
          },
          visible: {
            opacity: 1,
            height: "auto",
            transition: {
              opacity: { duration: 0.2 },
              height: { duration: 0.4 },
            },
          },
        }}
        className="will-change-opacity overflow-hidden pl-6 will-change-transform"
      >
        {menuItem.subMenu &&
          menuItem.subMenu.length > 0 &&
          menuItem.subMenu.map((menu) => {
            return (
              <NavLink
                to={`${path}/${menu?._id}`}
                end
                key={menu?._id}
                className="block cursor-pointer py-2 text-sm hover:font-medium hover:text-primary"
              >
                {menu?.name}
              </NavLink>
            );
          })}
      </motion.div>
    </div>
  );
};

export default SubMenu;
