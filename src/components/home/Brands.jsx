import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState } from "react";

const brands = [
  "https://dioutdoor.vn/media/2020/07/logo-leatherman-1024x213.png.webp",
  "https://dioutdoor.vn/media/2020/08/logo-brand-naturehike.png.webp",
  "https://dioutdoor.vn/media/2024/02/logo-beston-battery-300x50.png",
  "https://dioutdoor.vn/media/2023/12/Logo-brand-maxsun.png.webp",
  "https://dioutdoor.vn/media/2020/08/logo-brand-Opinel-1024x442.png.webp",
  "https://dioutdoor.vn/media/2020/08/logo-brand-sawyer.png.webp",
  "https://dioutdoor.vn/media/2020/08/logo-brand-Trangia-1024x255.png.webp",
  "https://dioutdoor.vn/media/2021/07/logo-black-sticker.svg",
];

const Brands = ({}) => {
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
    <div className="home-brands w-full bg-transparent py-4">
      <div className="group relative z-10 h-full w-full">
        <div className="mx-auto max-w-screen-xl cursor-pointer px-3">
          <button
            className="invisible absolute left-4 top-1/2 z-20 -translate-x-2 -translate-y-1/2 transform rounded-full bg-main p-2.5 text-white duration-150 hover:text-secondary group-hover:visible group-hover:translate-x-0 md:p-3 xl:left-20 xl:-translate-x-6 xl:bg-transparent xl:p-0 xl:text-black"
            onClick={() => handlePrevClick()}
          >
            <SlArrowLeft className="h-3 w-3 md:h-4 md:w-4 xl:h-5 xl:w-5" />
          </button>
          <Swiper
            spaceBetween={15}
            slidesPerView={3}
            loop={true}
            cssMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            onSwiper={(swiper) => setSwiper(swiper)}
            breakpoints={{
              500: {
                slidesPerView: 4,
              },
              640: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 6,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 20,
              },
            }}
          >
            {brands.map((brand, i) => (
              <SwiperSlide key={`slide-brand-${i}`}>
                <div className="flex items-center justify-center">
                  <Link>
                    <img src={brand} alt="" className="w-32" />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="invisible absolute right-4 top-1/2 z-20 -translate-y-1/2 translate-x-2 transform rounded-full bg-main p-2.5 text-white duration-150 hover:text-secondary group-hover:visible group-hover:translate-x-0 md:p-3 xl:right-20 xl:translate-x-6 xl:bg-transparent xl:p-0 xl:text-black"
            onClick={() => handleNextClick()}
          >
            <SlArrowRight className="h-3 w-3 md:h-4 md:w-4 xl:h-5 xl:w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Brands;
