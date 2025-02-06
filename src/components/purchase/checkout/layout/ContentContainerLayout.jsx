const ContentContainerLayout = ({ title = "", icon = <></>, children }) => {
  return (
    <div className="space-y-2">
      <div className="divide-y divide-solid divide-gray-200 rounded-sm bg-white">
        <div className="flex items-center gap-2.5 px-6 py-4 text-black">
          <span className="text-xl">{icon}</span>
          <span className="text-base font-semibold">{title}</span>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default ContentContainerLayout;
