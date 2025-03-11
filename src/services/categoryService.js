import axios from "@/configs/axios";

export const getCategories = () => {
  return axios.get(`/category/get`);
};

export const getCategoryBySlug = (slug) => {
  return axios.get(`/category/get/slug/${slug}`);
};

export const getFuturedCategories = () => {
  return axios.get(`/category/get/futured-category`);
};
