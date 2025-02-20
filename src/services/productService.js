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
    },
  });
};
