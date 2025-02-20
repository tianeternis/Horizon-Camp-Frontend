import { useTranslation } from "react-i18next";
import { BiCategoryAlt } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SidebarMenuLayout from "../../layout/SidbarMenuLayout";
import { useProductContext } from "../../context/ProductContext";
import { getCategories } from "@/services/categoryService";
import StatusCodes from "@/utils/status/StatusCodes";
import { PATHS } from "@/routes";

const CategoryMenu = ({}) => {
  const { t } = useTranslation();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getCategories();

      if (res && res.EC === StatusCodes.SUCCESS) {
        setCategories(res.DT?.data);
      }
    };

    fetchCategories();
  }, []);

  const { reset } = useProductContext();

  const navigate = useNavigate();

  const handleNavigateMenu = (e, _id) => {
    e.preventDefault();
    navigate(PATHS.productsByCategory({ "category-slug": _id }));
    reset();
  };

  return (
    <SidebarMenuLayout
      title={t("products.category.title")}
      icon={<BiCategoryAlt className="h-5 w-5" />}
    >
      <div className="px-4 py-3 text-gray-800">
        {categories &&
          categories.length > 0 &&
          categories.map((category, i) => (
            <div
              key={`category-menu-${i}-${category?._id}`}
              className="py-2 text-sm"
            >
              <NavLink
                to={PATHS.productsByCategory({
                  "category-slug": category?.slug,
                })}
                className="hover:font-medium hover:text-primary"
                onClick={(e) => handleNavigateMenu(e, category?.slug)}
              >
                {category?.name}
              </NavLink>
            </div>
          ))}
      </div>
    </SidebarMenuLayout>
  );
};

export default CategoryMenu;
