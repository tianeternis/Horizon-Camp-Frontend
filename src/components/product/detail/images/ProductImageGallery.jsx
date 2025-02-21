import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Download from "yet-another-react-lightbox/plugins/download";
import { useState } from "react";

const ProductImageGallery = ({ images = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openGallery = (index) => {
    setIndex(index);
    setOpen(true);
  };

  return (
    <div className="product-images mx-auto w-full sr-600:w-[30rem] md:w-[20rem] sr-800:w-[22.5rem] sr-950:w-[24rem] sr-1150:w-[32rem]">
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
        index={index}
        plugins={[Zoom, Thumbnails, Fullscreen, Download]}
      />
      <div className="flex w-full flex-col-reverse gap-2 sr-1150:flex-row">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          breakpoints={{
            1150: {
              direction: "vertical",
            },
          }}
          className="mySwiper h-4/5 w-full sr-1150:!h-[27rem] sr-1150:!w-[16%]"
        >
          {images?.map((image, i) => (
            <SwiperSlide key={`product-images-gallery-thumb-slide-${i}`}>
              <img
                src={image}
                alt=""
                loading="lazy"
                className="block h-full w-full rounded-sm border border-solid border-gray-200 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          style={{
            "--swiper-navigation-color": "var(--color-main)",
            "--swiper-pagination-color": "var(--color-main)",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 h-1/5 w-full sr-1150:!h-full sr-1150:!w-[84%]"
        >
          {images?.map((img, index) => (
            <SwiperSlide
              key={`product-image-gallery-${index}`}
              onClick={() => openGallery(index)}
            >
              <div className="sr-1150:h-[27rem]">
                <img
                  src={img}
                  alt=""
                  className="block h-full w-full cursor-pointer rounded-sm object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductImageGallery;
