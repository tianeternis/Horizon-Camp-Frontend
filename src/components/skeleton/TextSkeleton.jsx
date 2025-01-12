const TextSkeleton = () => {
  return (
    <div className="w-full animate-pulse">
      <div className="mb-5 h-4 w-1/2 rounded bg-gray-200"></div>
      <div className="mb-2.5 h-4 w-full rounded bg-gray-200"></div>
      <div className="mb-2.5 h-4 w-full rounded bg-gray-200"></div>
      <div className="mb-2.5 h-4 w-4/5 rounded bg-gray-200"></div>
      <div className="mb-2.5 h-4 w-2/5 rounded bg-gray-200"></div>
      <div className="h-4 w-3/5 rounded bg-gray-200"></div>
    </div>
  );
};

export default TextSkeleton;
