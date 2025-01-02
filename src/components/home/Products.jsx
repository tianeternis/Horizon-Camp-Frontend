import { useState } from "react";
import { useTranslation } from "react-i18next";

const TABS = {
  NEWEST: "newest",
  BEST_SELER: "best_seler",
  DISCOUNT: "discount",
};

const Products = ({}) => {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState(TABS.NEWEST);

  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-screen-xl px-3">
        <div className="space-y-10 py-8 sm:py-14">
          <div className="space-y-12">
            <h4 className="relative text-center text-xl font-bold uppercase text-main before:absolute before:-bottom-2 before:left-1/2 before:h-0.5 before:w-28 before:-translate-x-1/2 before:bg-main md:text-3xl md:before:-bottom-5 md:before:w-40">
              {t("home.products.title")}
            </h4>
            <div className="flex items-center gap-4">
              <div
                className={`cursor-pointer rounded-3xl border border-solid border-gray-300 px-8 py-2 text-sm duration-150 hover:border-main hover:bg-main hover:font-medium hover:text-white ${activeTab === TABS.NEWEST ? "border-main bg-main font-semibold text-white" : ""}`}
                onClick={() => setActiveTab(TABS.NEWEST)}
              >
                Mới nhất
              </div>
              <div
                className={`cursor-pointer rounded-3xl border border-solid border-gray-300 px-8 py-2 text-sm duration-150 hover:border-main hover:bg-main hover:font-medium hover:text-white ${activeTab === TABS.BEST_SELER ? "border-main bg-main font-semibold text-white" : ""}`}
                onClick={() => setActiveTab(TABS.BEST_SELER)}
              >
                Bán chạy
              </div>
              <div
                className={`cursor-pointer rounded-3xl border border-solid border-gray-300 px-8 py-2 text-sm duration-150 hover:border-main hover:bg-main hover:font-medium hover:text-white ${activeTab === TABS.DISCOUNT ? "border-main bg-main font-semibold text-white" : ""}`}
                onClick={() => setActiveTab(TABS.DISCOUNT)}
              >
                Giảm giá
              </div>
            </div>
          </div>
          <div className="h-80">{activeTab}</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
