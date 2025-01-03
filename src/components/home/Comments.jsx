import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Rating from "@/components/rating/Rating";
import Avatar from "@/components/avatar/Avatar";
import { RiDoubleQuotesL } from "react-icons/ri";

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
    star: 4,
  },
  {
    name: "Thương Nguyễn",
    content:
      "Lều là một phần rất quan trọng trong trải nghiệm của khách hàng. Trải qua nhiều chặng đường, khách hàng của Tôi đều phản hồi tích cực về chất lượng của lều. Lều chắc chắn, thông thoáng, tạo cảm giác ấm cúng khi ngủ giữa thiên nhiên. Tôi đánh giá 5/5 sao về chất lượng sản phẩm. Cảm ơn nhiều",
    avatar:
      "https://bizweb.dktcdn.net/100/440/011/themes/894889/assets/image_customer_review_2.jpg?1702953098418",
    star: 3,
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
    <div
      className="home-comments w-ful relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-main/90"
      style={{
        backgroundImage: `url(/src/assets/images/bg-review.webp)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="mx-auto max-w-screen-xl px-3">
        <div className="py-8 sm:py-10">
          <div className="mx-auto w-full space-y-6 lg:w-3/4 xl:w-3/5">
            <Swiper
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              onSwiper={setSwiper}
            >
              {reviews.map((review, i) => (
                <SwiperSlide key={`slide-review-${i}`}>
                  <div className="w-full space-y-3 text-white">
                    <div className="flex items-center justify-center pb-3">
                      <RiDoubleQuotesL className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14" />
                    </div>
                    <div className="text-center text-sm sm:text-15px md:text-base">
                      {review?.content}
                    </div>
                    <div className="text-center text-base font-bold sm:text-lg">
                      {review?.name}
                    </div>
                    <div className="text-center text-2xl sm:text-3xl md:text-[32px]">
                      <Rating
                        value={review?.star}
                        readOnly={true}
                        colorFilled="#fffc00"
                        colorEmpty="#fff"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="w-full">
              <div className="sr-600:w-96 mx-auto flex w-full items-center justify-center gap-2 sm:w-[26rem] md:w-[32rem]">
                <button
                  className="z-20 flex items-center justify-center rounded-full bg-white p-3"
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
                      stroke="#E88E1D"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M6 1L5.22533 1.70423"
                      stroke="#E88E1D"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <Swiper
                  slidesPerView={1}
                  centeredSlides={true}
                  loop={true}
                  onSwiper={setThumbsSwiper}
                  breakpoints={{
                    600: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {reviews.map((review, i) => (
                    <SwiperSlide key={`thumb-slide-review-${i}`}>
                      {({ isActive }) => (
                        <div className="flex w-full items-center justify-center">
                          <Avatar
                            image={review?.avatar}
                            name={review?.name}
                            sx={
                              isActive
                                ? {
                                    border: "2px solid #fff",
                                    width: { xs: 80, sm: 100, md: 130 },
                                    height: { xs: 80, sm: 100, md: 130 },
                                    fontSize: {
                                      xs: "2.5rem",
                                      sm: "2.8rem",
                                      md: "3.6rem",
                                    },
                                  }
                                : {
                                    width: { xs: 50, sm: 60, md: 90 },
                                    height: { xs: 50, sm: 60, md: 90 },
                                    fontSize: {
                                      xs: "1.3rem",
                                      sm: "1.5rem",
                                      md: "2.4rem",
                                    },
                                  }
                            }
                          />
                        </div>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button
                  className="z-20 flex items-center justify-center rounded-full bg-white p-3"
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
                      stroke="#E88E1D"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M1 1L1.77467 1.70423"
                      stroke="#E88E1D"
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
