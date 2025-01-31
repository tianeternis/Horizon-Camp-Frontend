const SidebarMenuLayout = ({ title, icon = <></>, children }) => {
  return (
    <div className="w-full bg-white sr-950:rounded-sm">
      <div className="w-full divide-y divide-solid divide-gray-200">
        <div className="flex items-center gap-2 px-4 py-3">
          {icon}
          <span className="text-base font-bold uppercase text-black">
            {title}
          </span>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default SidebarMenuLayout;
