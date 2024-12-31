import "@/assets/css/home.css";
import Banner from "@/components/home/Banner";
import Brands from "@/components/home/Brands";
import IntroduceQuality from "@/components/home/IntroduceQuality";
import ProductCategory from "@/components/home/ProductCategory";
import { useDynamicTitle } from "@/hooks";

const Home = ({}) => {
  useDynamicTitle("Horizon Camp");

  return (
    <div>
      <Banner />
      <IntroduceQuality />
      <ProductCategory />
      <Brands />
    </div>
  );
};

export default Home;
