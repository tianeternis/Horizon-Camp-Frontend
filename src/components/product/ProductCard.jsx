import { formatCurrency } from "@/utils/format/currency";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { formatQuantity } from "@/utils/format/quantity";
import { useTranslation } from "react-i18next";

const ProductCard = ({}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="w-full rounded-sm bg-white">
        <div className="lg:before:z-1 group/actions relative w-full cursor-pointer overflow-hidden lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:h-full lg:before:w-full lg:before:bg-secondary/60 lg:before:opacity-0 lg:before:transition-all lg:before:duration-300 lg:before:hover:opacity-100">
          <div>
            <img
              src={
                "https://bizweb.dktcdn.net/100/440/011/products/sp9.jpg?v=1634875820087"
              }
              alt=""
              loading="lazy"
              className="sr-400:max-h-44 sr-400:min-h-4max-h-44 sr-550:max-h-52 sr-550:min-h-52 sr-650:max-h-48 sr-650:min-h-48 max-h-32 min-h-32 w-full rounded-t-sm object-cover object-center sr-500:max-h-48 sr-500:min-h-48 sr-600:max-h-40 sr-600:min-h-40 md:max-h-52 md:min-h-52"
            />
          </div>
          <div className="z-1 absolute right-1.5 top-1.5 rounded-2xl bg-main px-2 py-1 text-xs font-medium text-white sm:px-3 sm:py-1.5 sm:text-13px">
            20%
          </div>
          <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2 opacity-0 transition-all duration-300 group-hover/actions:opacity-100 lg:flex">
            <Link className="flex items-center justify-center rounded-full bg-white p-2.5 text-main hover:bg-main hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                className="h-4 w-4"
              >
                <path
                  d="M5.84107 8.39128C5.5577 7.96622 5.41602 7.47032 5.41602 6.97442C5.41602 5.55755 6.5495 4.42407 7.96637 4.42407C9.38324 4.42407 10.5167 5.55755 10.5167 6.97442C10.5167 8.39128 9.38324 9.5248 7.96637 9.5248"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M11.8627 2.36944C10.6584 1.51931 9.31239 1.02344 7.89552 1.02344C5.41601 1.02344 3.07817 2.51111 1.44877 5.06147C0.811183 6.05328 0.811183 7.75353 1.44877 8.74534C3.07817 11.2957 5.41601 12.7834 7.89552 12.7834C10.375 12.7834 12.7129 11.2957 14.3423 8.74534C14.9799 7.75353 14.9799 6.05328 14.3423 5.06147"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Link>
            <div className="group/heart flex items-center justify-center rounded-full bg-white p-2.5 text-main hover:bg-main hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                className="h-4 w-4 group-hover/heart:fill-white group-hover/heart:stroke-white"
              >
                <path
                  d="M1.35756 8.87488C0.312233 5.97443 1.61892 2.28298 4.49356 1.49195C6.06155 0.964597 8.15216 1.49193 9.19749 3.07399C10.2428 1.49193 12.3334 0.964597 13.9014 1.49195C17.0374 2.54666 18.0827 5.97443 17.0374 8.87488C15.7308 13.3574 10.5041 15.9942 9.19749 15.9942C7.89083 15.7305 2.92554 13.6211 1.35756 8.87488Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="flex items-center justify-center rounded-full bg-white p-2.5 text-main hover:bg-main hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                className="h-[15px] w-4"
              >
                <path
                  d="M7.46779 1.5647L4.04358 4.98894"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M13.5554 1.5647L16.9796 4.98894"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M1 7.0818C1 5.36968 1.95119 5.17944 3.0926 5.17944H17.9309C19.0723 5.17944 20.0235 5.36968 20.0235 7.0818C20.0235 9.17438 19.0723 8.98415 17.9309 8.98415H3.0926C1.95119 8.98415 1 9.17438 1 7.0818Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></path>
                <path
                  d="M8.41919 12.9788V16.403"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M12.7946 12.9788V16.403"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M3.75842 17.3542C4.04378 19.1614 4.80468 20.5882 7.46798 20.5882H13.175C16.1237 20.5882 16.5993 19.2566 16.8846 17.5444L18.5017 9.17407"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M2.42676 9.17407L3.09259 13.2641"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="min-h-12 py-1 sm:min-h-14">
            <Link className="line-clamp-2 text-sm font-semibold text-gray-800 hover:text-main sm:text-15px md:text-base">
              Lều cắm trại tự bung cho 4 - 5 người thoáng mát, có mái hiên chống
              nắng mưa (KT 2x2x1.45m) K118
            </Link>
          </div>
          <div className="space-x-2 py-1">
            <span className="text-15px font-bold text-primary sm:text-base">
              {formatCurrency(1200000)}
            </span>
            <span className="hidden text-xs text-gray-500 line-through sr-500:inline sr-600:hidden sm:inline sm:text-13px">
              {formatCurrency(1500000)}
            </span>
          </div>
          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-1.5 text-xs font-medium sm:text-13px">
              4.2{" "}
              <FaStar className="h-3.5 w-3.5 text-yellow-300 sm:h-4 sm:w-4" />
            </div>
            <span className="text-xs sm:text-13px">
              <span className="font-medium">{formatQuantity(1500)}</span>{" "}
              <span className="lowercase">{t("products.sold")}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
