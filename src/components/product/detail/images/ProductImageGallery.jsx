import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-rotate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgRotate from "lightgallery/plugins/rotate";

import { useRef, useState } from "react";

const ProductImageGallery = ({ images = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const galleryRef = useRef(null);

  const openGallery = (index) => {
    if (galleryRef.current) {
      galleryRef.current.openGallery(index);
    }
  };

  return (
    <div className="product-images w-full">
      <LightGallery
        onInit={(ref) => (galleryRef.current = ref.instance)}
        speed={500}
        plugins={[lgZoom, lgThumbnail, lgFullscreen, lgRotate]}
        dynamic
        dynamicEl={images?.map((img) => ({
          src: img,
          thumb: img,
        }))}
      />
      <div className="w-full">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {images?.map((img, index) => (
            <SwiperSlide
              key={`product-image-gallery-${index}`}
              onClick={() => openGallery(index)}
            >
              <div className="w-full">
                <img src={img} alt="" className="cursor-pointer object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {images?.map((image, i) => (
            <SwiperSlide key={`product-images-gallery-thumb-slide-${i}`}>
              <img
                src={image}
                alt=""
                loading="lazy"
                className="h-full w-full rounded-md border border-solid border-gray-200 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductImageGallery;
