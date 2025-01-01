import { useTranslation } from "react-i18next";

const Blogs = ({}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#fff8ef]">
      <div className="mx-auto max-w-screen-xl px-3">
        <div className="space-y-16 py-8 sm:py-14">
          <h4 className="relative text-center text-xl font-bold uppercase text-main before:absolute before:-bottom-5 before:left-1/2 before:h-0.5 before:w-28 before:-translate-x-1/2 before:bg-main md:text-3xl md:before:w-40">
            {t("home.blogs.title")}
          </h4>
          <div className="h-80">Blogs</div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
