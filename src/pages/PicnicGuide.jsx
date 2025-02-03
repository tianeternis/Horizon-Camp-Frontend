import BlogCard from "@/components/blog/list/BlogCard";
import SortMenu, { sorts } from "@/components/blog/sort/SortMenu";
import Pagination from "@/components/pagination/Pagination";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DEFAULT_SORT = sorts[0];

const guide = {
  title:
    "Chia sẻ kinh nghiệm cắm trại hồ Dầu Tiếng để có 1 chuyến đi hơn cả mong đợi",
  author: "Dung Nguyen",
  date: new Date("2024-10-25"),
  summary:
    "Hồ Dầu Tiếng là địa danh đẹp thơ mộng ở Tây Ninh chỉ cách TP.HCM có 85km. Đây phải nói là địa điểm hoàn hảo để có chu...",
  image:
    "https://bizweb.dktcdn.net/thumb/large/100/440/011/articles/t4.jpg?v=1635146258343",
};

const PicnicGuide = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.picnic-guide"));

  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState(DEFAULT_SORT);

  const [searchParams, setSearchParams] = useSearchParams();

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
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          <div className="grid grid-cols-1 gap-3 sr-500:grid-cols-2 md:grid-cols-3 sr-950:grid-cols-3 sr-1150:grid-cols-4">
            {Array.from({ length: 10 }, (_, i) => (
              <BlogCard key={`home-product-card-${i}`} blog={guide} />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Pagination
              count={6}
              page={currentPage}
              onChange={(_, page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </BodyLayout>
  );
};

export default PicnicGuide;
