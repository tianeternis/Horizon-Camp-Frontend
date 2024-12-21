import homeBackgroundImage from "@/assets/images/home-bg-img.webp";
// import homeBackgroundImage from "@/assets/images/home-bg-img-option.webp";
import { IoIosArrowRoundForward } from "react-icons/io";

const HomePage = ({}) => {
  return (
    <div>
      {/* <div
        style={{ backgroundImage: `url(${homeBackgroundImage})` }}
        className="h-screen w-full bg-cover bg-center bg-no-repeat"
      ></div> */}
      <div className="relative h-screen w-full">
        <img
          src={homeBackgroundImage}
          className="h-full w-full object-cover object-center"
        />
        {/* <div className="absolute left-[15%] top-[45%] w-1/3 -translate-x-[15%]">
          <p className="mb-2.5 text-3xl font-bold text-main">
            Cắm trại không phải là một chuyến đi, mà là một lối sống.
          </p>
          <p className="text-15px text-secondary">
            Mỗi lần dựng lều, ta không chỉ dựng lên một nơi trú ngụ tạm thời mà
            còn dựng lên một hành trình đầy kỷ niệm, nơi mọi thứ từ ánh lửa bập
            bùng đến những cuộc trò chuyện bất tận đều trở thành những khoảnh
            khắc đáng nhớ.
          </p>
          <button className="mt-6 flex items-center justify-center gap-2 rounded-md bg-main/80 px-6 py-2 font-medium text-white duration-100 hover:bg-main">
            Mua sắm ngay <IoIosArrowRoundForward className="h-7 w-7" />
          </button>
        </div> */}
      </div>
      <div>Home page</div>
    </div>
  );
};

export default HomePage;
