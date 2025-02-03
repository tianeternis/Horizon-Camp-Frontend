const MenuLayout = ({ title, children }) => {
  return (
    <div className="space-y-3 px-4 py-3">
      <div className="text-sm font-medium">{title}</div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default MenuLayout;
