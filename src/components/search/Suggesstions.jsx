import emptyData from "@/assets/images/empty-data.png";
import { Link, useNavigate } from "react-router-dom";
import { Fragment, useContext } from "react";
import { useTranslation } from "react-i18next";
import { HeaderContext } from "../header/Header";
import { formatCurrency } from "@/utils/format/currency";
import { PATHS } from "@/routes";

const Suggestions = ({ suggestions, setShowSuggestions = () => {} }) => {
  const { t } = useTranslation();

  const { keyword } = useContext(HeaderContext);

  const navigate = useNavigate();

  const handleSearch = (data) => {
    setShowSuggestions(false);
    navigate(PATHS.productDetail({ "product-slug": data?.slug }));
  };

  const handleSearchAll = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    navigate(PATHS.search({ keyword }));
  };

  return (
    <>
      {suggestions && suggestions.length > 0 && (
        <div className="flex flex-col justify-center gap-2 text-black">
          {suggestions.map((suggestion, index) => {
            return (
              <Fragment key={index}>
                <div
                  className="group/suggestion flex cursor-pointer flex-nowrap items-center gap-2.5 hover:bg-gray-100"
                  onClick={() => handleSearch(suggestion)}
                >
                  <img
                    src={suggestion?.image}
                    alt="..."
                    loading="lazy"
                    className="w-16 object-contain"
                  />
                  <div className="space-y-0.5 overflow-hidden font-medium">
                    <p className="truncate text-13px group-hover/suggestion:text-main md:text-sm">
                      {suggestion?.name}
                    </p>
                    <p className="text-xs md:text-13px">
                      {(() => {
                        const first = suggestion?.variants?.[0];
                        const last =
                          suggestion?.variants?.[
                            suggestion?.variants?.length - 1
                          ];

                        return (
                          <>
                            <span className="text-red-500">
                              {`${formatCurrency(first?.discountedPrice)}${first?.price !== last?.price ? ` - ${formatCurrency(last?.discountedPrice)}` : ""}`}
                            </span>
                            <span className="ms-2 text-gray-400 line-through md:hidden sr-900:inline">
                              {`${formatCurrency(first?.price)}${first?.price !== last?.price ? ` - ${formatCurrency(last?.price)}` : ""}`}
                            </span>
                          </>
                        );
                      })()}
                    </p>
                  </div>
                </div>
                <hr />
              </Fragment>
            );
          })}
          <Link
            className="group/all w-full text-center"
            onClick={handleSearchAll}
          >
            <span className="text-xs font-semibold group-hover/all:text-main md:text-13px">
              {t("navigation.view_all")}
            </span>
          </Link>
        </div>
      )}

      {suggestions && suggestions.length <= 0 && (
        <div className="flex flex-col items-center justify-center gap-2 py-6">
          <img src={emptyData} alt="" loading="lazy" className="w-16 md:w-24" />
          <div className="text-xs font-medium text-gray-600 md:text-13px">
            {t("search.no_data")}
          </div>
        </div>
      )}
    </>
  );
};

export default Suggestions;
