import ProductCard from "@/components/product/list/ProductCard";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PATHS } from "@/routes";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getBestSellerProducts,
  getProducts,
  getRecommendationProducts,
} from "@/services/productService";
import StatusCodes from "@/utils/status/StatusCodes";

const LIMIT = 10;

const TABS = {
  NEWEST: "newest",
  BEST_SELER: "best_seler",
  RECOMMENDATION: "discount",
};

const Products = ({}) => {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState(TABS.RECOMMENDATION);
  const [products, setProducts] = useState([]);

  const user = useSelector((state) => state.user.account);

  useEffect(() => {
    if (activeTab === TABS.RECOMMENDATION) {
      const fetchProducts = async () => {
        const res = await getRecommendationProducts(user?._id, LIMIT);

        if (res && res.EC === StatusCodes.SUCCESS) {
          setProducts(res.DT);
        }

        if (res && res.EC === StatusCodes.ERRROR) {
          setProducts([]);
        }
      };

      fetchProducts();
    }

    if (activeTab === TABS.NEWEST) {
      const fetchProducts = async () => {
        const res = await getProducts({
          sortBy: "new",
          page: 1,
          limit: LIMIT,
        });

        if (res && res.EC === StatusCodes.SUCCESS) {
          setProducts(res.DT?.data);
        }

        if (res && res.EC === StatusCodes.ERRROR) {
          setProducts([]);
        }
      };

      fetchProducts();
    }

    if (activeTab === TABS.BEST_SELER) {
      const fetchProducts = async () => {
        const res = await getBestSellerProducts(LIMIT);

        if (res && res.EC === StatusCodes.SUCCESS) {
          setProducts(res.DT);
        }

        if (res && res.EC === StatusCodes.ERRROR) {
          setProducts([]);
        }
      };

      fetchProducts();
    }
  }, [activeTab]);

  return (
    <div className="w-full bg-transparent">
      <div className="mx-auto max-w-screen-xl px-3">
        <div className="space-y-10 py-8 sm:py-14">
          <div className="space-y-10 md:space-y-12">
            <h4 className="relative text-center text-xl font-bold uppercase text-main before:absolute before:-bottom-2 before:left-1/2 before:h-0.5 before:w-28 before:-translate-x-1/2 before:bg-main md:text-3xl md:before:-bottom-5 md:before:w-40">
              {t("home.products.title")}
            </h4>
            <div className="flex items-center justify-center gap-2 md:gap-4">
              <div
                className={`cursor-pointer rounded-3xl border border-solid border-gray-300 px-2.5 py-2 text-13px duration-150 hover:border-main hover:bg-main hover:font-medium hover:text-white md:px-8 md:text-sm ${activeTab === TABS.RECOMMENDATION ? "border-main bg-main font-semibold text-white" : ""}`}
                onClick={() => setActiveTab(TABS.RECOMMENDATION)}
              >
                {t("home.products.recommendations")}
              </div>
              <div
                className={`cursor-pointer rounded-3xl border border-solid border-gray-300 px-2.5 py-2 text-13px duration-150 hover:border-main hover:bg-main hover:font-medium hover:text-white md:px-8 md:text-sm ${activeTab === TABS.NEWEST ? "border-main bg-main font-semibold text-white" : ""}`}
                onClick={() => setActiveTab(TABS.NEWEST)}
              >
                {t("home.products.newest")}
              </div>
              <div
                className={`cursor-pointer rounded-3xl border border-solid border-gray-300 px-2.5 py-2 text-13px duration-150 hover:border-main hover:bg-main hover:font-medium hover:text-white md:px-8 md:text-sm ${activeTab === TABS.BEST_SELER ? "border-main bg-main font-semibold text-white" : ""}`}
                onClick={() => setActiveTab(TABS.BEST_SELER)}
              >
                {t("home.products.best_seler")}
              </div>
            </div>
          </div>
          <div className="w-full space-y-6">
            <div className="grid grid-cols-2 gap-3 sr-600:grid-cols-3 sr-900:grid-cols-4 sr-1150:grid-cols-5">
              {products?.length > 0 &&
                products?.map((product, i) => (
                  <ProductCard
                    key={`home-product-card-${i}`}
                    product={product}
                  />
                ))}
            </div>
            <div className="flex w-full justify-center lg:justify-end">
              <Link
                to={PATHS.products()}
                className="flex w-fit items-center gap-2 text-gray-800 hover:text-main"
              >
                <span className="text-xs font-semibold md:text-13px">
                  {t("navigation.view_all")}
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                  >
                    <path
                      d="M10.0588 1.13525L15 6.15876L10.0588 11.0999"
                      stroke="#F49348"
                      strokeWidth="1.25"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7.17651 6.15894H14.9177"
                      stroke="#F49348"
                      strokeWidth="1.25"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M1 6.15894H3.88235"
                      stroke="#F49348"
                      strokeWidth="1.25"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
