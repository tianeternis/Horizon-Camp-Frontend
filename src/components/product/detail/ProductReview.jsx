import Avatar from "@/components/avatar/Avatar";
import Pagination from "@/components/pagination/Pagination";
import Rating from "@/components/rating/Rating";
import { getReviewsForProduct } from "@/services/reviewService";
import { formatDateToHHMMDDMMYYYY } from "@/utils/format/date";
import { formatQuantity } from "@/utils/format/quantity";
import StatusCodes from "@/utils/status/StatusCodes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const PAGE_SIZE = 6;

const ProductReview = ({ productID }) => {
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({
    average: 0,
    summary: [],
    total: 0,
    reviews: [],
  });
  const [pagination, setPagination] = useState({ total: 0, count: 0 });

  useEffect(() => {
    if (productID) {
      const fetchReviews = async () => {
        const res = await getReviewsForProduct(
          productID,
          currentPage,
          PAGE_SIZE,
        );

        if (res && res.EC === StatusCodes.SUCCESS) {
          const data = res.DT?.data;

          setData({
            average: data?.average,
            summary: data?.summary,
            total: data?.total,
            reviews: data?.reviews,
          });

          setPagination({
            count: res.DT?.pagination?.count,
            total: res.DT?.pagination?.total,
          });
        }
      };

      fetchReviews();
    }
  }, [productID]);

  return (
    <div className="divide-y divide-solid divide-gray-200 rounded-sm bg-white text-black">
      <div className="space-y-4 px-4 py-6">
        <p className="text-base font-semibold sr-950:text-lg">
          {t("products.detail.product_review")}
        </p>
        <div className="flex gap-4">
          <div className="flex w-fit shrink-0 flex-col items-center justify-center gap-1.5 lg:w-40">
            <div className="text-3xl font-medium sr-950:text-4xl">
              {data?.average}
              <span className="text-lg sr-950:text-xl">/5</span>
            </div>
            <div className="text-xl sr-950:text-2xl">
              <Rating readOnly value={data?.average} />
            </div>
            <div className="text-13px text-gray-600 sr-950:text-sm">
              ({formatQuantity(data?.total)} {t("products.detail.review")})
            </div>
          </div>
          <div className="grow space-y-1 text-13px sr-950:text-sm">
            {data?.summary?.map((item, i) => {
              return (
                <div
                  key={`rating-percentage-${i}`}
                  className="flex items-center justify-start"
                >
                  <span className="w-10 text-right">
                    {item?.rating} {t("products.detail.star")}
                  </span>
                  <div className="mx-2.5 h-1 grow rounded-md bg-gray-200">
                    <div
                      className="h-full rounded-md bg-main"
                      style={{ width: `${item?.percentage}%` }}
                    ></div>
                  </div>
                  <span className="w-12 text-left">{item?.percentage}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {data?.reviews?.map((item, index) => {
        return (
          <div
            key={`review-${index}-${item?._id}`}
            className="flex items-start gap-3 px-4 py-6"
          >
            <div className="shrink-0">
              <Avatar
                image={item?.userAvatar}
                name={item?.userFullName}
                sx={{ width: { xs: 36, md: 40 }, height: { xs: 36, md: 40 } }}
              />
            </div>
            <div className="grow space-y-2.5">
              <div className="flex flex-col gap-1.5 sm:flex-row sm:justify-between">
                <div className="flex flex-col gap-0.5">
                  <div className="text-13px font-medium sr-950:text-sm">
                    {item?.userFullName}
                  </div>
                  <div
                    className="w-fit text-lg sr-950:text-xl"
                    style={{ marginLeft: "-0.125em" }}
                  >
                    <Rating readOnly value={item?.rating} />
                  </div>
                </div>
                <div className="flex h-fit gap-1.5 text-11px text-gray-700 sm:flex-row-reverse">
                  <div>{formatDateToHHMMDDMMYYYY(item?.postedAt)}</div>
                  {(() => {
                    const variant = [];
                    if (item?.productColor) variant.push(item?.productColor);
                    if (item?.productSize) variant.push(item?.productSize);

                    return (
                      <>
                        <div className="border-r border-solid border-gray-500"></div>
                        <div>Phân loại hàng: {variant.join(", ")}</div>
                      </>
                    );
                  })()}
                </div>
              </div>
              {item?.review && <div className="text-xs">{item?.comment}</div>}
            </div>
          </div>
        );
      })}
      {pagination.count > 1 && (
        <div className="flex w-full items-center justify-center py-6">
          <Pagination
            page={currentPage}
            count={pagination.count}
            onChange={(_, page) => setCurrentPage(page)}
          />
        </div>
      )}
    </div>
  );
};

export default ProductReview;
