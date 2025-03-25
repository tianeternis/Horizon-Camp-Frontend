import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiSearch2Line } from "react-icons/ri";
import { GrMicrophone } from "react-icons/gr";
import { HeaderContext } from "../header/Header";
import Suggestions from "./Suggesstions";
import { getProducts } from "@/services/productService";
import StatusCodes from "@/utils/status/StatusCodes";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";
import { PATHS } from "@/routes";
import VoiceSearch from "./VoiceSearch";

const Search = ({}) => {
  const { t } = useTranslation();

  const { keyword, setKeyword } = useContext(HeaderContext);

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [showVoiceSearch, setShowVoiceSearch] = useState(false);

  const inputRef = useRef();
  const suggestionsRef = useRef();

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (
        inputRef.current &&
        suggestionsRef.current &&
        !inputRef.current.contains(e.target) &&
        !suggestionsRef.current.contains(e.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  const handleSearch = useCallback(
    debounce(async (keyword) => {
      const res = await getProducts({ search: keyword, page: 1, limit: 6 });

      if (res && res.EC === StatusCodes.SUCCESS) {
        setSuggestions(res.DT?.data);
        setShowSuggestions(true);
      }

      if (res && res.EC === StatusCodes.ERRROR) {
        toast.error(res.EM);
      }
    }, 300),
    [],
  );

  useEffect(() => {
    if (keyword) {
      handleSearch(keyword);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [keyword]);

  const navigate = useNavigate();
  const handleSearchAll = (e) => {
    e.preventDefault();
    if (keyword) {
      setShowSuggestions(false);
      navigate(PATHS.search({ keyword }));
    }
  };

  return (
    // <div className="relative">
    //   <form onSubmit={handleSearchAll}>
    //     <div className="relative w-full">
    //       <input
    //         ref={inputRef}
    //         className="w-full rounded-2xl border border-solid border-white bg-transparent px-4 py-2.5 text-xs outline-none placeholder:text-white/85 md:rounded-full md:border-secondary/80 md:text-sm md:placeholder:text-black"
    //         placeholder={t("search.placeholder")}
    //         value={keyword}
    //         spellCheck={false}
    //         onChange={(e) => setKeyword(e.target.value)}
    //         onFocus={() => setShowSuggestions(keyword ? true : false)}
    //       />
    //       <button
    //         type="submit"
    //         className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-main"
    //       >
    //         <RiSearch2Line className="h-6 w-6" />
    //       </button>
    //     </div>
    //   </form>
    //   {showSuggestions && (
    //     <div
    //       ref={suggestionsRef}
    //       className="absolute top-[120%] z-50 w-full rounded-md bg-white p-4 shadow-[0_0_8px_2px_rgba(0,0,0,0.08)]"
    //     >
    //       <div className="text-13px font-semibold uppercase text-secondary md:text-sm">
    //         {t("search.results")}
    //       </div>
    //       <hr className="mb-2 mt-2 sm:mb-4" />
    //       <Suggestions
    //         suggestions={suggestions}
    //         setShowSuggestions={setShowSuggestions}
    //       />
    //     </div>
    //   )}
    // </div>
    <div>
      <div className="flex items-center gap-2">
        <div className="relative w-full">
          <form onSubmit={handleSearchAll}>
            <div className="relative w-full">
              <input
                ref={inputRef}
                className="w-full rounded-full border border-solid border-white bg-transparent px-4 py-2.5 text-xs outline-none placeholder:text-white/85 md:border-secondary/80 md:text-sm md:placeholder:text-black"
                placeholder={t("search.placeholder")}
                value={keyword}
                spellCheck={false}
                onChange={(e) => setKeyword(e.target.value)}
                onFocus={() => setShowSuggestions(keyword ? true : false)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-main"
              >
                <RiSearch2Line className="h-6 w-6" />
              </button>
            </div>
          </form>
          {showSuggestions && (
            <div
              ref={suggestionsRef}
              className="absolute top-[120%] z-50 w-full rounded-md bg-white p-4 shadow-[0_0_8px_2px_rgba(0,0,0,0.08)]"
            >
              <div className="text-13px font-semibold uppercase text-secondary md:text-sm">
                {t("search.results")}
              </div>
              <hr className="mb-2 mt-2 sm:mb-4" />
              <Suggestions
                suggestions={suggestions}
                setShowSuggestions={setShowSuggestions}
              />
            </div>
          )}
        </div>
        <button
          className="shrink-0 rounded-full bg-main p-3 text-base text-white hover:bg-primary md:text-lg"
          onClick={() => setShowVoiceSearch(true)}
        >
          <GrMicrophone />
        </button>
      </div>
      {showVoiceSearch && (
        <VoiceSearch
          show={showVoiceSearch}
          handleClose={() => setShowVoiceSearch(false)}
        />
      )}
    </div>
  );
};

export default Search;
