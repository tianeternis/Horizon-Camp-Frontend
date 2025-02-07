import { formatDateToDDMMYYYY } from "@/utils/format/date";
import { useTranslation } from "react-i18next";
import { CiUser, CiClock1 } from "react-icons/ci";
import { Link } from "react-router-dom";

const BlogCard = ({ blog = {} }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="w-full rounded-md bg-white">
        <div className="w-full overflow-hidden">
          <Link>
            <img
              src={blog?.image}
              alt=""
              loading="lazy"
              className="min-h-48 w-full rounded-t-md object-cover object-center duration-300 hover:scale-110"
            />
          </Link>
        </div>
        <div className="space-y-4 p-3">
          <Link className="line-clamp-2 text-center text-15px font-bold text-gray-600 hover:text-main md:text-base">
            {blog?.title}
          </Link>
          <div className="flex items-center divide-x divide-solid divide-gray-300">
            <div className="flex items-center gap-1 pr-3 text-gray-600">
              <span>
                <CiUser className="h-3 w-3" />
              </span>
              <span className="text-xs md:text-13px">{blog?.author}</span>
            </div>
            <div className="flex items-center gap-1 pl-3 text-gray-600">
              <span>
                <CiClock1 className="h-3 w-3" />
              </span>
              <span className="text-xs md:text-13px">
                {formatDateToDDMMYYYY(blog?.date)}
              </span>
            </div>
          </div>
          <div className="line-clamp-3 text-sm text-gray-600 md:text-15px">
            {blog?.summary}
          </div>
          <div className="w-full">
            <Link className="flex w-fit items-center gap-2 text-gray-800 hover:text-main">
              <span className="text-11px font-semibold md:text-xs">
                {t("navigation.view_more")}
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
  );
};

export default BlogCard;
