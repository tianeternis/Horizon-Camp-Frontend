import Banner from "@/components/home/Banner";
import IntroduceQuality from "@/components/home/IntroduceQuality";
import { useDynamicTitle } from "@/hooks";

const Home = ({}) => {
  useDynamicTitle("Horizon Camp");

  return (
    <div>
      <Banner />
      <IntroduceQuality />
    </div>
  );
};

export default Home;
