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
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineFilterAlt } from "react-icons/md";
import _ from "lodash";
import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import { getProducts } from "@/services/productService";
import { PAGE_SIZE } from "@/constants";
import StatusCodes from "@/utils/status/StatusCodes";
import Spin from "@/components/spin/Spin";
import { getBrands } from "@/services/brandService";
import { getColors, getSizes } from "@/services/variantService";

const DEFAULT_SORT = sorts[0];

const Products = ({}) => {
  const { t } = useTranslation();

  const category = useLoaderData();
  const params = useParams();

  const keyword = params?.keyword;

  useDynamicTitle(
    keyword ? t("title.search_results") : category?.name || t("title.product"),
  );

  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({ total: 0, count: 0 });

  const [filterMenuData, setFilterMenuData] = useState({
    [FILTER_KEY.BRANDS]: {},
    [FILTER_KEY.COLORS]: {},
    [FILTER_KEY.SIZES]: {},
  });

  const [showDrawer, setShowDrawer] = useState(false);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const productListRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const brands = {},
        colors = {},
        sizes = {};

      let res = await getBrands();
      if (res && res.EC === StatusCodes.SUCCESS) {
        const data = res.DT?.data;

        data?.forEach((item) => {
          brands[item?.slug] = {
            _id: item?._id,
            label: item?.name,
            value: item?.slug,
          };
        });
      }

      res = await getColors();
      if (res && res.EC === StatusCodes.SUCCESS) {
        const data = res.DT;

        data?.forEach((item) => {
          colors[item?.name] = {
            _id: item._id,
            hex: item?.hex,
            label: item?.name,
            value: item?.name,
          };
        });
      }

      res = await getSizes();
      if (res && res.EC === StatusCodes.SUCCESS) {
        const data = res.DT;

        data?.forEach((item) => {
          sizes[item?.name] = {
            _id: item?._id,
            label: item?.name,
            value: item?.name,
          };
        });
      }

      setFilterMenuData({
        [FILTER_KEY.BRANDS]: brands,
        [FILTER_KEY.COLORS]: colors,
        [FILTER_KEY.SIZES]: sizes,
      });
    };

    fetchData();
  }, []);

  const priceRange = useMemo(
    () => ({
      from: searchParams.get("minPrice") || "",
      to: searchParams.get("maxPrice") || "",
    }),
    [searchParams],
  );

  const sortBy = useMemo(
    () =>
      searchParams.get("sortBy")
        ? (() => {
            const sortFromURL = searchParams.get("sortBy");
            const selected = sorts.find((s) => s?.value === sortFromURL);

            return selected ? selected : DEFAULT_SORT;
          })()
        : DEFAULT_SORT,
    [searchParams],
  );

  const filter = useMemo(() => {
    const newFilter = {};
    Object.values(FILTER_KEY).forEach((key) => {
      const filterFromURL = searchParams.get(key);
      const filterWithKey = filterFromURL ? filterFromURL?.split(",") : [];

      if (filterWithKey && filterWithKey.length > 0) {
        const newFilterWithKey = {};

        filterWithKey?.forEach((value) => (newFilterWithKey[value] = value));

        newFilter[key] = newFilterWithKey;
      } else {
        newFilter[key] = {};
      }
    });

    return newFilter;
  }, [searchParams]);

  const currentPage = useMemo(
    () => +searchParams.get("page") || 1,
    [searchParams],
  );

  const isEmptyFilter = useMemo(
    () =>
      Object.values(filter).every((filterValue) => _.isEmpty(filterValue)) &&
      !priceRange.from &&
      !priceRange.to,
    [filter, priceRange],
  );

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const category = params?.["category-slug"];
      const query = Object.fromEntries([...searchParams]);

      const res = await getProducts({
        category,
        ...query,
        page: query?.page ? query.page : 1,
        limit: PAGE_SIZE,
        ...(keyword ? { search: keyword } : {}),
      });

      if (res && res.EC === StatusCodes.SUCCESS) {
        setProducts(res.DT?.data);
        setPagination({
          total: res.DT?.pagination?.total,
          count: res.DT?.pagination?.count,
        });
      }

      setLoading(false);
    };

    fetchProducts();
  }, [searchParams, params?.["category-slug"], keyword]);

  useEffect(() => {
    if (productListRef.current) {
      productListRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [products]);

  const handleSelectFilter = (filterKey, value) => {
    const newParams = new URLSearchParams(searchParams);

    const filterFromURL = newParams.get(filterKey);
    const filterWithKey = filterFromURL ? filterFromURL?.split(",") : [];

    const selectedFilterFromURL = filterWithKey.find((f) => f === value);

    newParams.delete(filterKey);

    // Có value trong mục tương ứng với filterKey
    if (selectedFilterFromURL) {
      const newFilter = filterWithKey.filter((f) => f !== value);

      if (newFilter.length > 0) {
        newParams.set(filterKey, newFilter.join(","));
      }
    } else {
      filterWithKey.push(value);
      newParams.set(filterKey, filterWithKey.join(","));
    }

    newParams.delete("page");

    newParams.sort();
    setSearchParams(newParams);
  };

  const handleRemoveFilter = (filterKey, value) => {
    const newParams = new URLSearchParams(searchParams);

    const filterFromURL = newParams.get(filterKey);
    const filterWithKey = filterFromURL ? filterFromURL?.split(",") : [];
    const newFilter = filterWithKey.filter((f) => f !== value);

    newParams.delete(filterKey);

    if (newFilter.length > 0) {
      newParams.set(filterKey, newFilter.join(","));
    }

    newParams.delete("page");

    newParams.sort();
    setSearchParams(newParams);
  };

  const handleClearAllFilter = () => {
    const newParams = new URLSearchParams(searchParams);

    newParams.delete("minPrice");
    newParams.delete("maxPrice");
    Object.values(FILTER_KEY).forEach((key) => newParams.delete(key));
    newParams.delete("page");

    newParams.sort();
    setSearchParams(newParams);
  };

  const setSortBy = (selected) => {
    if (sortBy?.value !== selected?.value) {
      const newParams = new URLSearchParams(searchParams);

      newParams.delete("sortBy");

      if (selected?.value !== DEFAULT_SORT.value) {
        newParams.set("sortBy", selected?.value);
      }

      newParams.delete("page");

      newParams.sort();
      setSearchParams(newParams);
    }
  };

  const setPriceRange = ({ from, to }) => {
    const currentMinPrice = priceRange?.from;
    const currentMaxPrice = priceRange?.to;

    if (from !== currentMinPrice || to !== currentMaxPrice) {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("minPrice");
      newParams.delete("maxPrice");

      if (from) {
        newParams.set("minPrice", from);
      }

      if (to) {
        newParams.set("maxPrice", to);
      }

      newParams.delete("page");

      newParams.sort();
      setSearchParams(newParams);
    }
  };

  const setCurrentPage = (page) => {
    if (currentPage !== page) {
      const newParams = new URLSearchParams(searchParams);

      newParams.delete("page");

      if (page > 1) {
        newParams.set("page", page);
      }

      newParams.sort();
      setSearchParams(newParams);
    }
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
          priceRange,
          setPriceRange,
          filterMenuData,
          brands: Object.values(filterMenuData?.[FILTER_KEY.BRANDS]),
          colors: Object.values(filterMenuData?.[FILTER_KEY.COLORS]),
          sizes: Object.values(filterMenuData?.[FILTER_KEY.SIZES]),
        }}
      >
        <div ref={productListRef} className="products flex py-2 sr-950:gap-4">
          <div className="shrink-0">
            <Sidebar />
          </div>
          <div className="w-full space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-base font-bold uppercase md:text-lg">
                {keyword
                  ? t("title.search_results")
                  : category?.name || t("title.product")}
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

            {keyword && (
              <div className="text-15px font-medium text-gray-600">
                {t("search.sub_title")}{" "}
                <span className="text-main">"{keyword}"</span>
              </div>
            )}

            {!isEmptyFilter && <YourSelection />}

            {loading ? (
              <div className="flex items-center justify-center py-14 text-3xl">
                <Spin />
              </div>
            ) : (
              <>
                {products && products.length > 0 ? (
                  <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                    <div className="grid grid-cols-2 gap-3 sr-600:grid-cols-3 sr-900:grid-cols-4 sr-950:grid-cols-3 sr-1150:grid-cols-4">
                      {products?.map((product, i) => (
                        <ProductCard
                          key={`products-product-card-${i}-${product?._id}`}
                          product={product}
                        />
                      ))}
                    </div>
                    {pagination.count > 1 && (
                      <div className="flex items-center justify-center">
                        <Pagination
                          count={pagination?.count}
                          page={currentPage}
                          onChange={(_, page) => setCurrentPage(page)}
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="my-4 rounded-md border border-solid border-orange-100 bg-orange-50 p-6 text-sm text-secondary">
                    {t("products.no_data")}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </ProductProvider>
    </BodyLayout>
  );
};

export default Products;
