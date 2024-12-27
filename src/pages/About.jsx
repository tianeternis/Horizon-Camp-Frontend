import intro_1 from "@/assets/images/intro-1.webp";
import intro_2 from "@/assets/images/intro-2.webp";
import intro_3 from "@/assets/images/intro-3.webp";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";

const About = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.about"));

  return (
    <div className="bg-white">
      <BodyLayout>
        <div className="space-y-10">
          <div className="flex flex-col items-center gap-2">
            <div className="text-lg font-bold sm:text-2xl">
              {t("about.title")}
            </div>
            <div className="w-32 border-t-2 border-solid border-main sm:w-40"></div>
          </div>
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold sm:text-3xl">
                  {t("about.intro_1.title")}
                </h4>
                <div className="flex items-center gap-2">
                  <div className="w-10 border-t-2 border-solid border-main sm:w-14"></div>
                  <div className="text-13px font-medium uppercase tracking-widest text-gray-500 sm:text-sm sm:tracking-[3.2px]">
                    {t("about.logan")}
                  </div>
                </div>
              </div>
              <div className="text-justify text-sm text-gray-500 sm:text-15px">
                {t("about.intro_1.description")}
              </div>
            </div>
            <div className="flex-1">
              <img src={intro_1} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 lg:flex-row-reverse lg:gap-10">
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold sm:text-3xl">
                  {t("about.intro_2.title")}
                </h4>
                <div className="flex items-center gap-2">
                  <div className="w-10 border-t-2 border-solid border-main sm:w-14"></div>
                  <div className="text-13px font-medium uppercase tracking-widest text-gray-500 sm:text-sm sm:tracking-[3.2px]">
                    {t("about.logan")}
                  </div>
                </div>
              </div>
              <div className="text-justify text-sm text-gray-500 sm:text-15px">
                {t("about.intro_2.description")}
              </div>
            </div>
            <div className="flex-1">
              <img src={intro_2} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold sm:text-3xl">
                  {t("about.intro_3.title")}
                </h4>
                <div className="flex items-center gap-2">
                  <div className="w-10 border-t-2 border-solid border-main sm:w-14"></div>
                  <div className="text-13px font-medium uppercase tracking-widest text-gray-500 sm:text-sm sm:tracking-[3.2px]">
                    {t("about.logan")}
                  </div>
                </div>
              </div>
              <div className="text-justify text-sm text-gray-500 sm:text-15px">
                {t("about.intro_3.description")}
              </div>
            </div>
            <div className="flex-1">
              <img src={intro_3} alt="" />
            </div>
          </div>
        </div>
      </BodyLayout>
    </div>
  );
};

export default About;
