import BlogCard from "@/components/blog/list/BlogCard";
import SortMenu, { sorts } from "@/components/blog/sort/SortMenu";
import Pagination from "@/components/pagination/Pagination";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getGuides } from "@/services/guideService";
import StatusCodes from "@/utils/status/StatusCodes";
import Spin from "@/components/spin/Spin";

const DEFAULT_SORT = sorts[0];

const PicnicGuide = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.picnic-guide"));

  const [guides, setGuides] = useState([]);
  const [pagination, setPagination] = useState({ total: 0, count: 0 });

  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState(DEFAULT_SORT);

  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const fetchGuides = async (sort, page, limit) => {
    setLoading(true);
    const res = await getGuides({ sort, page, limit });

    if (res && res.EC === StatusCodes.SUCCESS) {
      setGuides(res.DT?.data);
      setPagination({
        total: res?.DT?.pagination?.total,
        count: res?.DT?.pagination?.count,
      });
    }

    if (res && res.EC === StatusCodes.ERRROR) {
      setGuides([]);
      setPagination({
        total: 0,
        count: 0,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    const newParams = new URLSearchParams();

    if (currentPage > 1) {
      newParams.set("page", currentPage);
    }

    if (sortBy?.value !== DEFAULT_SORT?.value) {
      newParams.set("sortBy", sortBy?.value);
    }

    newParams.sort();
    setSearchParams(newParams);

    fetchGuides(sortBy.value, currentPage, 12);
  }, [currentPage, sortBy]);

  return (
    <BodyLayout>
      <div className="w-full space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-base font-bold uppercase md:text-lg">
            {t("picnic-guide.title")}
          </div>
          <SortMenu sortBy={sortBy} setSortBy={setSortBy} />
        </div>
        {loading ? (
          <div className="flex items-center justify-center py-14 text-3xl">
            <Spin />
          </div>
        ) : (
          <>
            {guides && guides?.length > 0 ? (
              <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                <div className="grid grid-cols-1 gap-3 sr-500:grid-cols-2 md:grid-cols-3 sr-950:grid-cols-3 sr-1150:grid-cols-4">
                  {guides?.map((guide, i) => (
                    <BlogCard key={`picnic-guides-card-${i}`} blog={guide} />
                  ))}
                </div>
                {pagination.count > 1 && (
                  <div className="flex items-center justify-center">
                    <Pagination
                      count={pagination?.count}
                      page={currentPage}
                      onChange={(_, page) => setCurrentPage(page)}
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="my-4 rounded-md border border-solid border-orange-100 bg-orange-50 p-6 text-sm text-secondary">
                {t("picnic-guide.no_data")}
              </div>
            )}
          </>
        )}
      </div>
    </BodyLayout>
  );
};

export default PicnicGuide;
