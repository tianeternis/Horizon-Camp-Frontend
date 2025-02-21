import logo from "@/assets/images/logo.webp";
import Spin from "@/components/spin/Spin";
import i18next from "i18next";

const Loading = ({}) => {
  return (
    <div className="relative h-screen w-full bg-white">
      <div className="absolute p-6 sm:p-10">
        <img src={logo} alt="" loading="lazy" className="w-20 sm:w-28" />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 font-main">
        <div className="text-2xl sm:text-4xl">
          <Spin />
        </div>
        <div className="text-sm font-medium text-gray-800 sm:text-base">
          {i18next.t("loading", { lng: i18next.language })}...
        </div>
      </div>
    </div>
  );
};

export default Loading;
