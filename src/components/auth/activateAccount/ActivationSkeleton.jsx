const ActivationSkeleton = ({}) => {
  return (
    <div className="animate-pulse space-y-6">
      <div className="sm:flex sm:items-center sm:gap-4">
        <div className="hidden h-14 w-14 bg-gray-200 sm:block"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 w-full rounded bg-gray-200"></div>
          <div className="h-4 w-1/2 rounded bg-gray-200"></div>
        </div>
      </div>
      <div className="space-y-2 text-sm md:text-15px">
        <div className="h-4 w-1/4 rounded bg-gray-200 font-bold"></div>
        <ul className="space-y-1 pl-4">
          <li className="h-4 w-3/4 rounded bg-gray-200"></li>
          <li className="h-4 w-2/3 rounded bg-gray-200"></li>
        </ul>
      </div>
      <div className="w-full border-t border-dashed border-black/15"></div>
      <div className="space-y-4">
        <div className="h-4 w-3/4 rounded bg-gray-200"></div>
        <form className="space-y-6">
          <div className="space-y-1">
            <div className="h-4 w-1/4 rounded bg-gray-200"></div>
            <div className="h-10 w-full rounded bg-gray-200"></div>
          </div>
          <div className="flex w-full justify-center">
            <div className="h-10 w-full rounded bg-gray-200 sm:w-1/4"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ActivationSkeleton;
