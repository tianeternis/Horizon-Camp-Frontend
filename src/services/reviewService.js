import axios from "@/configs/axios";

export const addNewReview = (userID, data) => {
  return axios.post(`/review/add/user/${userID}`, data);
};

export const getReviewsByOrderID = (orderID) => {
  return axios.get(`/review/get-by-order/${orderID}`);
};
