import "@/assets/css/products.css";
import { ProductProvider } from "@/components/product/context/ProductContext";
import Pagination from "@/components/pagination/Pagination";
import ProductCard from "@/components/product/list/ProductCard";
import Sidebar from "@/components/product/sidebar/Sidebar";
import SortMenu, { sorts } from "@/components/product/sort/SortMenu";
import { FILTER_KEY } from "@/components/product/constants";
import YourSelection from "@/components/product/sidebar/filter/YourSelection";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { Tooltip } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineFilterAlt } from "react-icons/md";
import _ from "lodash";
import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import { getProducts } from "@/services/productService";
import { PAGE_SIZE } from "@/constants";

const DEFAULT_SORT = sorts[0];

const DEFAULT_FILTER = {
  [FILTER_KEY.BRANDS]: {},
  [FILTER_KEY.COLORS]: {},
  [FILTER_KEY.SIZES]: {},
};

const Products = ({}) => {
  const { t } = useTranslation();

  const category = useLoaderData();

  useDynamicTitle(category?.name || t("title.product"));

  const [products, setProducts] = useState([]);

  const [showDrawer, setShowDrawer] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState({ from: "", to: "" });
  const [sortBy, setSortBy] = useState(DEFAULT_SORT);
  const [filter, setFilter] = useState(DEFAULT_FILTER);

  const isEmptyFilter = useMemo(
    () => Object.values(filter).every((filterValue) => _.isEmpty(filterValue)),
    [filter],
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const category = params?.["category-slug"];
      const query = Object.fromEntries([...searchParams]);

      const res = await getProducts({
        category,
        ...query,
        page: query?.page ? query.page : 1,
        limit: PAGE_SIZE,
      });

      console.log(res);
    };

    fetchProducts();
  }, [searchParams, params?.["category-slug"]]);

  useEffect(() => {
    const newParams = new URLSearchParams();

    if (currentPage > 1) {
      newParams.set("page", currentPage);
    }

    if (sortBy?.value !== DEFAULT_SORT?.value) {
      newParams.set("sortBy", sortBy?.value);
    }

    if (priceRange?.from) {
      newParams.set("minPrice", priceRange?.from);
    }

    if (priceRange?.to) {
      newParams.set("maxPrice", priceRange?.to);
    }

    if (!isEmptyFilter) {
      Object.entries(filter).forEach(([filterKey, filterValue]) => {
        if (!_.isEmpty(filterValue)) {
          const values = Object.values(filterValue).map((item) => item?.value);
          newParams.set(filterKey, values.join(","));
        }
      });
    }

    newParams.sort();
    setSearchParams(newParams);
  }, [currentPage, priceRange, sortBy, filter, isEmptyFilter]);

  const handleSelectFilter = (filterKey, value) => {
    // Có value trong mục tương ứng với filterKey
    if (filter?.[filterKey]?.[value?._id]) {
      handleRemoveFilter(filterKey, value);
    } else {
      setFilter((prev) => {
        const valueOfFilterKey = prev?.[filterKey];
        return {
          ...prev,
          [filterKey]: { ...valueOfFilterKey, [value?._id]: value },
        };
      });
    }
  };

  const handleRemoveFilter = (filterKey, value) => {
    setFilter((prev) => {
      const cloneFilter = _.cloneDeep(prev);
      delete cloneFilter?.[filterKey]?.[value?._id];
      return cloneFilter;
    });
  };

  const handleClearAllFilter = () => {
    setFilter(DEFAULT_FILTER);
  };

  const reset = () => {
    setCurrentPage(1);
    setSortBy(DEFAULT_SORT);
    setFilter(DEFAULT_FILTER);
  };

  return (
    <BodyLayout>
      <ProductProvider
        value={{
          showDrawer,
          setShowDrawer,
          sortBy,
          setSortBy,
          filter,
          handleSelectFilter,
          handleRemoveFilter,
          handleClearAllFilter,
          isEmptyFilter,
          reset,
          priceRange,
          setPriceRange,
        }}
      >
        <div className="products flex sr-950:gap-4">
          <div className="shrink-0">
            <Sidebar />
          </div>
          <div className="w-full space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-base font-bold uppercase md:text-lg">
                {t("products.title")}
              </div>
              <div className="flex items-end justify-center gap-2.5 sr-530:gap-6">
                <SortMenu />
                <div className="sr-950:hidden">
                  <Tooltip title={t("products.search-filter.title")} arrow>
                    <button
                      className="flex items-center justify-center rounded border border-solid border-gray-300 p-1 duration-300 hover:border-main hover:bg-main hover:text-white"
                      onClick={() => setShowDrawer(true)}
                    >
                      <MdOutlineFilterAlt className="h-6 w-6" />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            {!isEmptyFilter && <YourSelection />}
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              <div className="grid grid-cols-2 gap-3 sr-600:grid-cols-3 sr-900:grid-cols-4 sr-950:grid-cols-3 sr-1150:grid-cols-4">
                {Array.from({ length: 10 }, (_, i) => (
                  <ProductCard key={`products-product-card-${i}`} />
                ))}
              </div>
              <div className="flex items-center justify-center">
                <Pagination
                  count={6}
                  page={currentPage}
                  onChange={(_, page) => setCurrentPage(page)}
                />
              </div>
            </div>
          </div>
        </div>
      </ProductProvider>
    </BodyLayout>
  );
};

export default Products;
