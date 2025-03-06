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

export const getRecommendationsForProduct = (productID, limit) => {
  return axios.get(
    `/product/get/recommendations/similar-products/${productID}`,
    {
      params: { limit },
    },
  );
};

export const getRecommendationProducts = (userID, limit) => {
  return axios.get(`/product/get/recommendations/recommendation-products`, {
    params: { userID, limit },
  });
};

export const getBestSellerProducts = (limit) => {
  return axios.get(`/product/get-best-seller`, {
    params: { limit },
  });
};
