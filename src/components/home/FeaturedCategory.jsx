import { PATHS } from "@/routes";
import { getFuturedCategories } from "@/services/categoryService";
import StatusCodes from "@/utils/status/StatusCodes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Túi ngủ - Đệm ngủ",
    url: "https://dioutdoor.vn/media/2023/09/Menu-v23-dem-ngu-tui-ngu.jpg.webp",
  },
  {
    name: "Túi du lịch",
    url: "https://dioutdoor.vn/media/2023/09/Menu-v23-tui-du-lich.jpg.webp",
  },
  {
    name: "Thùng đá - Túi giữ lạnh",
    url: "https://dioutdoor.vn/media/2023/09/Menu-v23-thung-da-giu-lanh.jpg.webp",
  },
  {
    name: "Nồi chảo & Hộp nấu",
    url: "https://dioutdoor.vn/media/2023/09/Menu-v23-bep-noi-da-ngoai.jpg.webp",
  },
  {
    name: "Mũ nón chống nắng",
    url: "https://dioutdoor.vn/media/2023/09/Menu-v23-mu-non-chong-nang.jpg.webp",
  },
  {
    name: "Lều & Tăng dã ngoại",
    url: "https://dioutdoor.vn/media/2023/09/Menu-v23-leu-cam-trai.jpg.webp",
  },
  {
    name: "Giày trekking - Leo núi",
    url: "https://dioutdoor.vn/media/2023/09/Menu-v23-giay-dep-trekking.jpg.webp",
  },
  {
    name: "Đèn pin & Lưu trữ điện",
    url: "https://dioutdoor.vn/media/2023/09/Menu-v23-den-pin-chieu-sang.jpg.webp",
  },
  {
    name: "Dao sinh tồn - Dao đi phượt",
    url: "https://dioutdoor.vn/media/2023/09/Menu-v23-Dao-sing-ton.jpg.webp",
  },
  {
    name: "Bếp gas - Bếp nướng",
    url: "https://dioutdoor.vn/media/2023/09/Menu-v23-Bep-ga-nau-nuong.jpg.webp",
  },
  {
    name: "Bàn & Ghế cắm trại",
    url: "https://dioutdoor.vn/media/2023/09/Menu-v23-ban-ghe-da-ngoai.jpg.webp",
  },
  {
    name: "Balo trekking - Leo núi",
    url: "https://dioutdoor.vn/media/2023/09/Menu-v23-Balo-leo-nui-tro-luc.jpg.webp",
  },
];
const FeaturedCategory = ({}) => {
  const { t } = useTranslation();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getFuturedCategories();

      if (res && res.EC === StatusCodes.SUCCESS) {
        setCategories(res.DT);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full bg-[#fff9f4]">
      <div className="mx-auto max-w-screen-xl px-3">
        <div className="py-8 sm:py-14">
          <h4 className="relative mb-14 text-center text-xl font-bold uppercase text-main before:absolute before:-bottom-2 before:left-1/2 before:h-0.5 before:w-28 before:-translate-x-1/2 before:bg-main md:mb-20 md:text-3xl md:before:-bottom-5 md:before:w-40">
            {t("home.featured-category.title")}
          </h4>
          <div className="grid grid-cols-2 gap-x-2.5 gap-y-6 sr-500:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {categories?.map((category, i) => (
              <div
                key={`home-featured-category-${i}-${category?._id}`}
                className="z-10"
              >
                <Link
                  to={PATHS.productsByCategory({
                    "category-slug": category?.slug,
                  })}
                  className="group space-y-1.5"
                >
                  <div className="w-full overflow-hidden rounded-md bg-white shadow-sm">
                    <img
                      src={category?.image}
                      alt=""
                      loading="lazy"
                      className="w-full rounded-md object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="text-center text-13px font-medium sm:text-sm">
                    {category?.name}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;
