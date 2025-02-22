import axios from "@/configs/axios";

export const getAddressesByUserID = (userID) => {
  return axios.get(`/address/get/user/${userID}`);
};

export const createNewAddress = (data) => {
  return axios.post(`/address/create`, data);
};

export const updateAddress = (id, data) => {
  return axios.put(`/address/update/${id}`, data);
};

export const setDefaultAddress = (id) => {
  return axios.put(`/address/set-default/${id}`);
};

export const deleteAddress = (id) => {
  return axios.delete(`/address/delete/${id}`);
};
