const ContentContainerLayout = ({ title = "", icon = <></>, children }) => {
  return (
    <div className="space-y-2">
      <div className="divide-y divide-solid divide-gray-200 rounded-sm bg-white">
        <div className="flex items-center gap-2.5 p-4 text-black sm:px-6">
          <span className="text-xl">{icon}</span>
          <span className="text-15px font-semibold sm:text-base">{title}</span>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default ContentContainerLayout;
