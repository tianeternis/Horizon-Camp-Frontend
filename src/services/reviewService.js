import axios from "@/configs/axios";

export const addNewReview = (userID, data) => {
  return axios.post(`/review/add/user/${userID}`, data);
};

export const getReviewsByOrderID = (orderID) => {
  return axios.get(`/review/get-by-order/${orderID}`);
};

export const getReviewsForProduct = (productID, page, limit) => {
  return axios.get(`/review/get-for-product/${productID}`, {
    params: { page, limit },
  });
};

export const getReviewsForHome = (limit) => {
  return axios.get(`/review/get-for-home`, {
    params: { limit },
  });
};
