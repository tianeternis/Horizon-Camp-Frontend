import axios from "@/configs/axios";

export const addProductToCart = (userID, variantID, quantity) => {
  return axios.post(`/cart/add`, { userID, variantID, quantity });
};

export const getProductsFromCart = (userID) => {
  return axios.get(`/cart/get/user/${userID}`);
};

export const removeProductsFromCart = (userID, data) => {
  return axios.delete(`/cart/remove/multiple/${userID}`, { data });
};

export const updateVariantOfCart = (userID, data) => {
  return axios.put(`/cart//update-variant/${userID}`, data);
};

export const updateQuantityOfCart = (detailID, data) => {
  return axios.put(`/cart//update-quantity/${detailID}`, data);
};

export const getCartItemQuantity = (userID) => {
  return axios.get(`/cart/get-quantity/user/${userID}`);
};
