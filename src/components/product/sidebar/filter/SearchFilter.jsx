import { useTranslation } from "react-i18next";
import { MdOutlineFilterAlt } from "react-icons/md";
import CostMenu from "./CostMenu";
import BrandMenu from "./BrandMenu";
import ColorMenu from "./ColorMenu";
import SizeMenu from "./SizeMenu";
import SidebarMenuLayout from "../../layout/SidbarMenuLayout";

const SearchFilter = ({}) => {
  const { t } = useTranslation();

  return (
    <SidebarMenuLayout
      title={t("products.search-filter.title")}
      icon={<MdOutlineFilterAlt className="h-5 w-5" />}
    >
      <div className="divide-y divide-solid divide-gray-200">
        <CostMenu />
        <BrandMenu />
        <ColorMenu />
        <SizeMenu />
      </div>
    </SidebarMenuLayout>
  );
};

export default SearchFilter;
