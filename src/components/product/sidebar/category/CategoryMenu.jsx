import { useTranslation } from "react-i18next";
import { BiCategoryAlt } from "react-icons/bi";
import SubMenu from "./SubMenu";
import SidebarMenuLayout from "../../layout/SidbarMenuLayout";

const categories = [
  {
    _id: "670b6cdbfcf2a197d869a7ac",
    name: "Leo núi - Dã ngoại",
    subMenu: [
      {
        _id: "670b70eafcf2a197d869a7c7",
        name: "Lều & Tăng Dã Ngoại",
      },
      {
        _id: "670b730f60e46ca648e20ebe",
        name: "Túi Ngủ - Đệm Ngủ",
      },
    ],
  },
  {
    _id: "670b6d48fcf2a197d869a7af",
    name: "Balo Du Lịch",
    subMenu: [
      {
        _id: "670ce69bbf92aa5e5f0a6ac4",
        name: "Balo Trekking - Leo Núi",
      },
      {
        _id: "670ce6e1bf92aa5e5f0a6ac7",
        name: "Phụ Kiện Balo",
      },
      {
        _id: "670ce709bf92aa5e5f0a6aca",
        name: "Túi Du Lịch",
      },
    ],
  },
  {
    _id: "670b6f36fcf2a197d869a7b2",
    name: "Dao - Dụng Cụ",
    subMenu: [
      {
        _id: "670ce22f00c7bf51a9f899df",
        name: "Dao Sinh Tồn - Dao Đi Phượt",
      },
      {
        _id: "670ce28100c7bf51a9f899e2",
        name: "Dụng Cụ Đa Năng",
      },
      {
        _id: "67121eb56a30f06ccb564bdb",
        name: "Rìu - Cưa - Búa - Xẻng",
      },
      {
        _id: "67121edb6a30f06ccb564be6",
        name: "Móc Khóa Đa Năng",
      },
    ],
  },
  {
    _id: "670b6fb5fcf2a197d869a7b5",
    name: "Đèn Pin & Lưu Trữ Điện",
    subMenu: [
      {
        _id: "670d593c79da7b74e8d40419",
        name: "Đèn Pin Cầm Tay",
      },
    ],
  },
  {
    _id: "670b6fe9fcf2a197d869a7b8",
    name: "Trang Phục Dã Ngoại",
    subMenu: [
      {
        _id: "670d5c2dda14f08bfec4e192",
        name: "Giày Trekking - Leo Núi",
      },
      {
        _id: "6712158d6a30f06ccb564af7",
        name: "Quần & Áo Dã Ngoại",
      },
      {
        _id: "670b7021fcf2a197d869a7bb",
        name: "Găng Tay & Bảo Hộ",
      },
      {
        _id: "670d5d63da14f08bfec4e1a9",
        name: "Phụ Kiện Trang Phục",
      },
    ],
  },
];

const CategoryMenu = ({}) => {
  const { t } = useTranslation();

  return (
    <SidebarMenuLayout
      title={t("products.category.title")}
      icon={<BiCategoryAlt className="h-5 w-5" />}
    >
      <div className="px-4 py-3 text-gray-800">
        {categories &&
          categories.length > 0 &&
          categories.map((category) => {
            return <SubMenu key={category?._id} menuItem={category} />;
          })}
      </div>
    </SidebarMenuLayout>
  );
};

export default CategoryMenu;
