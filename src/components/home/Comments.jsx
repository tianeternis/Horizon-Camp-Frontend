import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Rating from "@/components/rating/Rating";
import { RiDoubleQuotesL } from "react-icons/ri";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const reviews = [
  {
    name: "Dũng Nguyễn",
    content:
      "Lều là một phần rất quan trọng trong trải nghiệm của khách hàng. Trải qua nhiều chặng đường, khách hàng của Tôi đều phản hồi tích cực về chất lượng của lều. Lều chắc chắn, thông thoáng, tạo cảm giác ấm cúng khi ngủ giữa thiên nhiên. Tôi đánh giá 5/5 sao về chất lượng sản phẩm. Cảm ơn nhiều",
    avatar:
      "https://bizweb.dktcdn.net/100/440/011/themes/894889/assets/image_customer_review_3.jpg?1702953098418",
    star: 5,
  },
  {
    name: "Nhung Nguyễn",
    content:
      "Lều là một phần rất quan trọng trong trải nghiệm của khách hàng. Trải qua nhiều chặng đường, khách hàng của Tôi đều phản hồi tích cực về chất lượng của lều. Lều chắc chắn, thông thoáng, tạo cảm giác ấm cúng khi ngủ giữa thiên nhiên. Tôi đánh giá 5/5 sao về chất lượng sản phẩm. Cảm ơn nhiều",
    avatar:
      "https://bizweb.dktcdn.net/100/440/011/themes/894889/assets/image_customer_review_4.jpg?1702953098418",
    star: 5,
  },
  {
    name: "Thương Nguyễn",
    content:
      "Lều là một phần rất quan trọng trong trải nghiệm của khách hàng. Trải qua nhiều chặng đường, khách hàng của Tôi đều phản hồi tích cực về chất lượng của lều. Lều chắc chắn, thông thoáng, tạo cảm giác ấm cúng khi ngủ giữa thiên nhiên. Tôi đánh giá 5/5 sao về chất lượng sản phẩm. Cảm ơn nhiều",
    avatar:
      "https://bizweb.dktcdn.net/100/440/011/themes/894889/assets/image_customer_review_2.jpg?1702953098418",
    star: 5,
  },
  {
    name: "Hạnh Nguyễn",
    content:
      "Lều là một phần rất quan trọng trong trải nghiệm của khách hàng. Trải qua nhiều chặng đường, khách hàng của Tôi đều phản hồi tích cực về chất lượng của lều. Lều chắc chắn, thông thoáng, tạo cảm giác ấm cúng khi ngủ giữa thiên nhiên. Tôi đánh giá 5/5 sao về chất lượng sản phẩm. Cảm ơn nhiều",
    avatar:
      "https://bizweb.dktcdn.net/100/440/011/themes/894889/assets/image_customer_review_1.jpg?1702953098418",
    star: 5,
  },
];

const Comments = ({}) => {
  const { t } = useTranslation();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-screen-xl px-3">
        <div className="space-y-16 py-8 sm:py-14">
          <h4 className="relative text-center text-xl font-bold uppercase text-main before:absolute before:-bottom-5 before:left-1/2 before:h-0.5 before:w-28 before:-translate-x-1/2 before:bg-main md:text-3xl md:before:w-40">
            {t("home.comments.title")}
          </h4>
          <div>
            <div className="mx-auto w-1/2">
              <Swiper
                spaceBetween={10}
                navigation={true}
                loop={true}
                centeredSlides={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {reviews.map((review, i) => (
                  <SwiperSlide key={`slide-review-${i}`}>
                    <div className="w-full space-y-3">
                      <div className="flex items-center justify-center pb-4 text-secondary">
                        <RiDoubleQuotesL className="h-14 w-14" />
                      </div>
                      <div className="text-center text-base">
                        {review?.content}
                      </div>
                      <div className="text-center text-lg font-bold text-secondary">
                        {review?.name}
                      </div>
                      <div className="text-center">
                        <Rating value={review?.star} readOnly={true} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {reviews.map((review, i) => (
                  <SwiperSlide key={`thumb-slide-review-${i}`}>
                    <div className="w-full">
                      <div>
                        <img src={review.avatar} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
