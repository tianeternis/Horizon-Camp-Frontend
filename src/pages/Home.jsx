import "@/assets/css/home.css";
import Banner from "@/components/home/Banner";
import Blogs from "@/components/home/Blogs";
import Brands from "@/components/home/Brands";
import Comments from "@/components/home/Comments";
import FeaturedCategory from "@/components/home/FeaturedCategory";
import IntroduceQuality from "@/components/home/IntroduceQuality";
import ProductCategory from "@/components/home/ProductCategory";
import Products from "@/components/home/Products";
import { useDynamicTitle } from "@/hooks";

const Home = ({}) => {
  useDynamicTitle("Horizon Camp");

  return (
    <div>
      <Banner />
      <IntroduceQuality />
      <div className="relative w-full bg-white py-6 before:absolute before:-top-1 before:h-full before:w-28 before:bg-[url(/src/assets/images/bg-before-category-brands.webp)] before:bg-contain before:bg-no-repeat after:absolute after:right-0 after:top-6 after:h-full after:w-28 after:bg-[url(/src/assets/images/bg-after-category-brands.webp)] after:bg-contain after:bg-no-repeat sr-500:before:w-40 sr-500:after:w-40 sm:before:w-52 sm:after:w-52 md:py-8 md:before:w-56 md:after:w-56 lg:py-12 lg:before:w-80 lg:after:w-80 xl:before:h-[580px] xl:before:w-[335px] xl:after:h-[550px] xl:after:w-80">
        <Brands />
        <ProductCategory />
      </div>
      <FeaturedCategory />
      <Products />
      <Comments />
      <Blogs />
    </div>
  );
};

export default Home;
