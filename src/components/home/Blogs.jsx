import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import BlogCard from "@/components/blog/list/BlogCard";
import { PATHS } from "@/routes";

const blogs = [
  {
    title:
      "Chia sẻ kinh nghiệm cắm trại hồ Dầu Tiếng để có 1 chuyến đi hơn cả mong đợi",
    author: "Dung Nguyen",
    date: new Date("2024-10-25"),
    summary:
      "Hồ Dầu Tiếng là địa danh đẹp thơ mộng ở Tây Ninh chỉ cách TP.HCM có 85km. Đây phải nói là địa điểm hoàn hảo để có chu...",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/440/011/articles/t4.jpg?v=1635146258343",
  },
  {
    title: "Bỏ túi những “bí kíp” cho một chuyến dã ngoại cực chất",
    author: "Dung Nguyen",
    date: new Date("2024-10-25"),
    summary:
      "Không ngẫu nhiên mà sản phẩm lều trại lại thông dụng cho các chuyến dã ngoại như vậy. Sở dĩ khách hàng luôn tìm thuê ...",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/440/011/articles/t3.jpg?v=1635127761927",
  },
  {
    title: "Kinh Nghiệm Cắm Trại Cho Người Mới Bắt Đầu",
    author: "Dung Nguyen",
    date: new Date("2024-10-25"),
    summary:
      "Những điều cần biết cho lần cắm trại đầu tiên của bạn   Bài viết này là một phần của loạt bài Giới Thiệu về Cắm ...",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/440/011/articles/t1.jpg?v=1634964338490",
  },
  {
    title: "6 địa điểm du lịch gần sài gòn cho dịp nghỉ lễ 30/4 và mùng 1/5",
    author: "Dung Nguyen",
    date: new Date("2024-10-25"),
    summary:
      "Dưới đây là những điểm du lịch sinh thái gần Sài Gòn, nơi bạn có thể trải nghiệm những hoạt động vui chơi giải trí, đ...",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/440/011/articles/t1.jpg?v=1634964338490",
  },
  {
    title: "Những điều cấm kị khi khám phá hang động Quảng Bình",
    author: "Dung Nguyen",
    date: new Date("2024-10-25"),
    summary:
      "Khi khám phá hang động ở Quảng Bình, có một số hoạt động bị cấm kị để bảo vệ an toàn cá nhân, bảo vệ môi trường và bảo vệ di sản thiên nhiên. Dưới đây là những điều cấm kỵ quan trọng mà bạn cần nhớ:",
    image:
      "https://bizweb.dktcdn.net/100/513/520/articles/z4523030300601-a2e7f1811d2740a4f34f10357a08a4ea.jpg?v=1716349165927",
  },
];

const Blogs = ({}) => {
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
    <div className="w-full bg-transparent">
      <div className="mx-auto max-w-screen-xl px-3">
        <div className="space-y-14 py-8 sm:py-14 md:space-y-16">
          <h4 className="relative text-center text-xl font-bold uppercase text-main before:absolute before:-bottom-2 before:left-1/2 before:h-0.5 before:w-28 before:-translate-x-1/2 before:bg-main md:text-3xl md:before:-bottom-5 md:before:w-40">
            {t("home.blogs.title")}
          </h4>
          <div className="relative space-y-6 md:space-y-8 2xl:static">
            <div className="w-full 2xl:relative">
              <button
                className="absolute -bottom-1.5 left-0 z-20 rounded-full border border-solid border-black/10 bg-white p-3 text-gray-600 shadow-[0_0_8px_2px_rgba(0,0,0,0.08)] sr-500:left-1/4 md:left-1/3 2xl:-left-6 2xl:bottom-auto 2xl:top-1/2 2xl:-translate-y-1/2"
                onClick={() => handlePrevClick()}
              >
                <SlArrowLeft className="h-3 w-3 md:h-4 md:w-4 xl:h-5 xl:w-5" />
              </button>
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                onSwiper={(swiper) => setSwiper(swiper)}
                breakpoints={{
                  500: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1070: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                }}
              >
                {blogs.map((blog, i) => (
                  <SwiperSlide key={`home-slide-blog-${i}`}>
                    <BlogCard blog={blog} />
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
            <div className="text-center">
              <Link
                to={PATHS.picnicGuide()}
                className="text-sm font-semibold text-secondary hover:text-main md:text-15px"
              >
                {t("navigation.see_all")}...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
