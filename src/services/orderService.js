import axios from "@/configs/axios";

export const getProductsForOrder = (itemsID) => {
  return axios.get(`/order/get-products/${itemsID}`);
};

export const getPaymentMethods = () => {
  return axios.get(`/order/get-payment-methods`);
};
