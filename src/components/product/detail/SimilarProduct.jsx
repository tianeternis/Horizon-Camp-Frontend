import { useTranslation } from "react-i18next";
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../list/ProductCard";
import { Link } from "react-router-dom";

const SimilarProduct = ({}) => {
  const { t } = useTranslation();

  const [swiper, setSwiper] = useState(null);

  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div className="w-full space-y-2 pt-4">
      <div className="flex items-center justify-between">
        <div className="shrink-0 text-base font-semibold lg:text-lg">
          {t("products.detail.similar_product")}
        </div>
        <Link className="flex w-fit items-center gap-2 text-gray-800 hover:text-main">
          <span className="text-xs font-semibold md:text-13px">
            {t("navigation.see_all")}
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
            >
              <path
                d="M10.0588 1.13525L15 6.15876L10.0588 11.0999"
                stroke="#F49348"
                strokeWidth="1.25"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M7.17651 6.15894H14.9177"
                stroke="#F49348"
                strokeWidth="1.25"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M1 6.15894H3.88235"
                stroke="#F49348"
                strokeWidth="1.25"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </Link>
      </div>
      <div className="max-w-screen-xl">
        <div className="w-full 2xl:relative">
          <button
            className="absolute -bottom-1.5 left-0 z-20 rounded-full border border-solid border-black/10 bg-white p-3 text-gray-600 shadow-[0_0_8px_2px_rgba(0,0,0,0.08)] sr-500:left-1/4 md:left-1/3 2xl:-left-6 2xl:bottom-auto 2xl:top-1/2 2xl:-translate-y-1/2"
            onClick={() => handlePrevClick()}
          >
            <SlArrowLeft className="h-3 w-3 md:h-4 md:w-4 xl:h-5 xl:w-5" />
          </button>
          <Swiper
            spaceBetween={12}
            slidesPerView={2}
            loop={true}
            onSwiper={(swiper) => setSwiper(swiper)}
            breakpoints={{
              600: {
                slidesPerView: 3,
              },
              900: {
                slidesPerView: 4,
              },
              1150: {
                slidesPerView: 5,
              },
            }}
          >
            {Array.from({ length: 16 }, (_, i) => (
              <SwiperSlide key={`product-detail-similar-product-${i}`}>
                <ProductCard />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="absolute -bottom-1.5 right-0 z-20 rounded-full border border-solid border-black/10 bg-white p-3 text-gray-600 shadow-[0_0_8px_2px_rgba(0,0,0,0.08)] sr-500:right-1/4 md:right-1/3 2xl:-right-6 2xl:bottom-auto 2xl:top-1/2 2xl:-translate-y-1/2"
            onClick={() => handleNextClick()}
          >
            <SlArrowRight className="h-3 w-3 md:h-4 md:w-4 xl:h-5 xl:w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimilarProduct;
