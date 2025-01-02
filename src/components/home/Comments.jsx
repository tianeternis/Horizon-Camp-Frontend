import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Rating from "@/components/rating/Rating";
import Avatar from "@/components/avatar/Avatar";
import { RiDoubleQuotesL } from "react-icons/ri";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Controller, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

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

  const [swiper, setSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handlePrevClick = () => {
    if (swiper && thumbsSwiper) {
      swiper.slidePrev();
      thumbsSwiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiper && thumbsSwiper) {
      swiper.slideNext();
      thumbsSwiper.slideNext();
    }
  };

  return (
    <div className="home-comments w-full bg-white">
      <div className="mx-auto max-w-screen-xl px-3">
        <div className="space-y-16 py-8 sm:py-14">
          <h4 className="relative text-center text-xl font-bold uppercase text-main before:absolute before:-bottom-5 before:left-1/2 before:h-0.5 before:w-28 before:-translate-x-1/2 before:bg-main md:text-3xl md:before:w-40">
            {t("home.comments.title")}
          </h4>
          <div>
            <div className="mx-auto w-3/5 space-y-6">
              <Swiper
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                onSwiper={setSwiper}
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
              <div className="flex items-center justify-center gap-2 px-32">
                <button
                  className="flex items-center justify-center rounded-full bg-main p-3"
                  onClick={() => handlePrevClick()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 7 14"
                    fill="none"
                  >
                    <path
                      d="M3.2535 3.74609L1.42254 5.57706C0.859155 6.14044 0.859155 6.98551 1.42254 7.54889L6 12.1264"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M6 1L5.22533 1.70423"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <Swiper
                  slidesPerView={3}
                  centeredSlides={true}
                  loop={true}
                  onSwiper={setThumbsSwiper}
                >
                  {reviews.map((review, i) => (
                    <SwiperSlide key={`thumb-slide-review-${i}`}>
                      {({ isActive }) => (
                        <div className="flex w-full items-center justify-center">
                          <Avatar
                            image={review?.avatar}
                            name={review?.name}
                            size={isActive ? 130 : 90}
                            fontSize={isActive ? 65 : 40}
                          />
                        </div>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button
                  className="flex items-center justify-center rounded-full bg-main p-3"
                  onClick={() => handleNextClick()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 7 14"
                    fill="none"
                  >
                    <path
                      d="M3.7465 3.74609L5.57746 5.57706C6.14085 6.14044 6.14085 6.98551 5.57746 7.54889L1 12.1264"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M1 1L1.77467 1.70423"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
