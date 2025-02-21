import axios from "@/configs/axios";

export const addProductToCart = (userID, variantID, quantity) => {
  return axios.post(`/cart/add`, { userID, variantID, quantity });
};

export const getProductsFromCart = (userID) => {
  return axios.get(`/cart/get/user/${userID}`);
};
