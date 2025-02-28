import axios from "@/configs/axios";

export const getProducts = ({
  category,
  brands,
  colors,
  sizes,
  minPrice,
  maxPrice,
  sortBy,
  page,
  limit,
  search,
}) => {
  return axios.get(`/product/get-for-customer`, {
    params: {
      category,
      brands,
      colors,
      sizes,
      minPrice,
      maxPrice,
      sortBy,
      page,
      limit,
      search,
    },
  });
};

export const getProductBySlug = (slug) => {
  return axios.get(`/product/get/slug/${slug}`);
};
