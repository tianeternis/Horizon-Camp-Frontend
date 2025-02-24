import axios from "@/configs/axios";

export const getProductsForOrder = (itemsID) => {
  return axios.get(`/order/get-products/${itemsID}`);
};

export const getPaymentMethods = () => {
  return axios.get(`/order/get-payment-methods`);
};

export const getOrderStatuses = () => {
  return axios.get(`/order/get-order-statuses`);
};

export const createNewOrder = (data) => {
  return axios.post(`/order/create`, data);
};

export const getOrders = (userID, { search, status, page, limit }) => {
  return axios.get(`/order/get-orders/user/${userID}`, {
    params: { search, status, page, limit },
  });
};
