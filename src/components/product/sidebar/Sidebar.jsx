import CategoryMenu from "./category/CategoryMenu";
import SearchFilter from "./filter/SearchFilter";

const Sidebar = ({}) => {
  return (
    <div className="hidden w-64 sr-950:block">
      <div className="w-full space-y-4">
        <CategoryMenu />
        <SearchFilter />
      </div>
    </div>
  );
};

export default Sidebar;
