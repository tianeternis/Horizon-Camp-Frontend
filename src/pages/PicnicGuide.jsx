import BlogCard from "@/components/blog/list/BlogCard";
import SortMenu, { sorts } from "@/components/blog/sort/SortMenu";
import Pagination from "@/components/pagination/Pagination";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useEffect, useMemo, useState } from "react";
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

  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = useMemo(
    () =>
      searchParams.get("sortBy")
        ? (() => {
            const sortFromURL = searchParams.get("sortBy");
            const selected = sorts.find((s) => s?.value === sortFromURL);

            return selected ? selected : DEFAULT_SORT;
          })()
        : DEFAULT_SORT,
    [searchParams],
  );

  const currentPage = useMemo(
    () => +searchParams.get("page") || 1,
    [searchParams],
  );

  useEffect(() => {
    const fetchGuides = async () => {
      setLoading(true);
      const query = Object.fromEntries([...searchParams]);

      const res = await getGuides({
        sort: query?.sortBy,
        page: query?.page ? query.page : 1,
        limit: 12,
      });

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

    fetchGuides();
  }, [searchParams]);

  const setSortBy = (selected) => {
    if (sortBy?.value !== selected?.value) {
      const newParams = new URLSearchParams(searchParams);

      newParams.delete("sortBy");

      if (selected?.value !== DEFAULT_SORT.value) {
        newParams.set("sortBy", selected?.value);
      }

      newParams.sort();
      setSearchParams(newParams);
    }
  };

  const setCurrentPage = (page) => {
    if (currentPage !== page) {
      const newParams = new URLSearchParams(searchParams);

      newParams.delete("page");

      if (page > 1) {
        newParams.set("page", page);
      }

      newParams.sort();
      setSearchParams(newParams);
    }
  };

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
