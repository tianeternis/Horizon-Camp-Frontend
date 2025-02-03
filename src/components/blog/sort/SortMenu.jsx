import SortMenuUI from "@/components/sort/SortMenu";
import { TbArrowsSort } from "react-icons/tb";
import { BiSortAZ, BiSortDown, BiSortUp, BiSortZA } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export const sorts = [
  {
    label: "Mặc định",
    value: "default",
    icon: <TbArrowsSort className="h-4 w-4 md:h-4.5 md:w-4.5" />,
    trans: "picnic-guide.sort.default",
  },
  {
    label: "Tiêu đề A - Z",
    value: "a-z",
    icon: <BiSortAZ className="h-4 w-4 md:h-4.5 md:w-4.5" />,
    trans: "picnic-guide.sort.a-z",
  },
  {
    label: "Tiêu đề Z - A",
    value: "z-a",
    icon: <BiSortZA className="h-4 w-4 md:h-4.5 md:w-4.5" />,
    trans: "picnic-guide.sort.z-a",
  },
  {
    label: "Cẩm nang mới nhất",
    value: "new",
    icon: <BiSortUp className="h-4 w-4 md:h-4.5 md:w-4.5" />,
    trans: "picnic-guide.sort.newest_guide",
  },
  {
    label: "Cẩm nang cũ nhất",
    value: "old",
    icon: <BiSortDown className="h-4 w-4 md:h-4.5 md:w-4.5" />,
    trans: "picnic-guide.sort.oldest_guide",
  },
];

const SortMenu = ({ sortBy, setSortBy }) => {
  const { t } = useTranslation();

  return <SortMenuUI sorts={sorts} selected={sortBy} setSelected={setSortBy} />;
};

export default SortMenu;
