import axios from "@/configs/axios";

export const getColors = () => {
  return axios.get(`/variant/get-colors`);
};

export const getSizes = () => {
  return axios.get(`/variant/get-sizes`);
};

export const getVariantsByProductID = (productID) => {
  return axios.get(`/variant/get-variants/product/${productID}`);
};
