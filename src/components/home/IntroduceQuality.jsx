import backgroundIntro from "@/assets/images/bg-intro.webp";
import intro1 from "@/assets/images/whychoose_1_img.webp";
import intro2 from "@/assets/images/whychoose_2_img.webp";
import intro3 from "@/assets/images/whychoose_3_img.webp";
import intro4 from "@/assets/images/whychoose_4_img.webp";
import { useTranslation } from "react-i18next";

const IntroduceQuality = ({}) => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundIntro})`,
        backgroundPosition: "center bottom",
      }}
      className="bg-[#fbf6f2] bg-contain bg-scroll bg-no-repeat pb-28 pt-10 sr-500:pb-32 sm:pb-40 md:pb-56 lg:pb-72 lg:pt-14"
    >
      <div className="mx-auto max-w-screen-xl px-3">
        <div className="grid grid-cols-4 gap-6">
          <div className="group col-span-4 flex cursor-pointer select-none flex-col items-center justify-center gap-3 rounded-md bg-white p-5 text-black shadow-[0_0_6px_2px_rgba(255,255,255,0.4)] hover:bg-main hover:text-white sr-500:col-span-2 lg:col-span-1">
            <div className="w-12 md:w-16">
              <img
                src={intro1}
                alt=""
                loading="lazy"
                className="w-full group-hover:brightness-[3]"
              />
            </div>
            <div className="text-center text-base font-bold uppercase md:text-lg">
              {t("home.intro.intro_1.title")}
            </div>
            <div className="text-center text-13px md:text-sm">
              {t("home.intro.intro_1.description")}
            </div>
          </div>
          <div className="group col-span-4 flex cursor-pointer select-none flex-col items-center justify-center gap-3 rounded-md bg-white p-5 text-black shadow-[0_0_6px_2px_rgba(255,255,255,0.4)] hover:bg-main hover:text-white sr-500:col-span-2 lg:col-span-1">
            <div className="w-12 md:w-16">
              <img
                src={intro2}
                alt=""
                loading="lazy"
                className="w-full group-hover:brightness-[3]"
              />
            </div>
            <div className="text-center text-base font-bold uppercase md:text-lg">
              {t("home.intro.intro_2.title")}
            </div>
            <div className="text-center text-13px md:text-sm">
              {t("home.intro.intro_2.description")}
            </div>
          </div>
          <div className="group col-span-4 flex cursor-pointer select-none flex-col items-center justify-center gap-3 rounded-md bg-white p-5 text-black shadow-[0_0_6px_2px_rgba(255,255,255,0.4)] hover:bg-main hover:text-white sr-500:col-span-2 lg:col-span-1">
            <div className="w-12 md:w-16">
              <img
                src={intro3}
                alt=""
                loading="lazy"
                className="w-full group-hover:brightness-[3]"
              />
            </div>
            <div className="text-center text-base font-bold uppercase md:text-lg">
              {t("home.intro.intro_3.title")}
            </div>
            <div className="text-center text-13px md:text-sm">
              {t("home.intro.intro_3.description")}
            </div>
          </div>
          <div className="group col-span-4 flex cursor-pointer select-none flex-col items-center justify-center gap-3 rounded-md bg-white p-5 text-black shadow-[0_0_6px_2px_rgba(255,255,255,0.4)] hover:bg-main hover:text-white sr-500:col-span-2 lg:col-span-1">
            <div className="w-12 md:w-16">
              <img
                src={intro4}
                alt=""
                loading="lazy"
                className="w-full group-hover:brightness-[3]"
              />
            </div>
            <div className="text-center text-base font-bold uppercase md:text-lg">
              {t("home.intro.intro_4.title")}
            </div>
            <div className="text-center text-13px md:text-sm">
              {t("home.intro.intro_4.description")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroduceQuality;
