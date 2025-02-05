import Avatar from "@/components/avatar/Avatar";
import Pagination from "@/components/pagination/Pagination";
import Rating from "@/components/rating/Rating";
import { formatQuantity } from "@/utils/format/quantity";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ProductReview = ({ product = {} }) => {
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({
    // averageRating: 0,
    // ratingSummary: [],
    // totalRatings: 0,
    // totalPages: 0,
    // reviews: [],
    averageRating: 4.7,
    ratingSummary: [
      {
        rating: 5,
        percentage: 66.67,
      },
      {
        rating: 4,
        percentage: 33.33,
      },
      {
        rating: 3,
        percentage: 0,
      },
      {
        rating: 2,
        percentage: 0,
      },
      {
        rating: 1,
        percentage: 0,
      },
    ],
    totalRatings: 3,
    totalPages: 1,
    reviews: [
      {
        _id: "672edd26034fb2a740baf85d",
        review: "Salad rau mùa sốt cam hơi mặn một xíu, nên giảm muối hơn",
        rating: 4,
        rateDate: "09/11/2024",
        accountName: "Nhựt Nam",
        accountAvatar:
          "https://1nedrop.com/wp-content/uploads/2024/10/anh-avatar-vo-tri-13Hc4YAf.jpg",
      },
      {
        _id: "67272533b7fffdf942119f53",
        review: "",
        rating: 5,
        rateDate: "03/11/2024",
        accountName: "Trường Toàn",
        accountAvatar:
          "https://1nedrop.com/wp-content/uploads/2024/10/anh-avatar-vo-tri-13Hc4YAf.jpg",
      },
      {
        _id: "67238dd40d1e6e97f876e204",
        review: "",
        rating: 5,
        rateDate: "31/10/2024",
        accountName: "trngtran",
        accountAvatar:
          "https://1nedrop.com/wp-content/uploads/2024/10/anh-avatar-vo-tri-13Hc4YAf.jpg",
      },
    ],
  });

  return (
    <div className="divide-y divide-solid divide-gray-200 rounded-sm bg-white text-black">
      <div className="space-y-4 px-4 py-6">
        <p className="text-base font-semibold sr-950:text-lg">
          {t("products.detail.product_review")}
        </p>
        <div className="flex gap-4">
          <div className="flex w-fit shrink-0 flex-col items-center justify-center gap-1.5 lg:w-40">
            <div className="text-3xl font-medium sr-950:text-4xl">
              {data.averageRating}
              <span className="text-lg sr-950:text-xl">/5</span>
            </div>
            <div className="text-xl sr-950:text-2xl">
              <Rating readOnly value={data.averageRating} />
            </div>
            <div className="text-13px text-gray-600 sr-950:text-sm">
              ({formatQuantity(data.totalRatings)} {t("products.detail.review")}
              )
            </div>
          </div>
          <div className="grow space-y-1 text-13px sr-950:text-sm">
            {data.ratingSummary.map((rating, i) => {
              return (
                <div
                  key={`rating-percentage-${i}`}
                  className="flex items-center justify-start"
                >
                  <span className="w-10 text-right">
                    {rating?.rating} {t("products.detail.star")}
                  </span>
                  <div className="mx-2.5 h-1 grow rounded-md bg-gray-200">
                    <div
                      className="h-full rounded-md bg-main"
                      style={{ width: `${rating?.percentage}%` }}
                    ></div>
                  </div>
                  <span className="w-12 text-left">{rating?.percentage}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {data.reviews.map((item, index) => {
        return (
          <div
            key={`review-${index}-${item?._id}`}
            className="flex items-start gap-3 px-4 py-6"
          >
            <div className="shrink-0">
              <Avatar
                image={item?.accountAvatar}
                sx={{ width: { xs: 36, md: 40 }, height: { xs: 36, md: 40 } }}
              />
            </div>
            <div className="grow space-y-2.5">
              <div className="flex justify-between">
                <div className="flex flex-col gap-0.5">
                  <div className="text-13px font-medium sr-950:text-sm">
                    {item?.accountName}
                  </div>
                  <div
                    className="text-lg sr-950:text-xl"
                    style={{ marginLeft: "-0.125em" }}
                  >
                    <Rating readOnly value={item?.rating} />
                  </div>
                </div>
                <span className="text-11px">{item?.rateDate}</span>
              </div>
              {item?.review && <div className="text-xs">{item?.review}</div>}
            </div>
          </div>
        );
      })}
      {/* {data.totalPages > 1 && ( */}
      <div className="flex w-full items-center justify-center py-6">
        <Pagination
          page={currentPage}
          //   count={data.totalPages}
          count={10}
          onChange={(_, page) => setCurrentPage(page)}
        />
      </div>
      {/* )} */}
    </div>
  );
};

export default ProductReview;
