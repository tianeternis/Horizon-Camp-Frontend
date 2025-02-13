import axios from "@/configs/axios";

export const register = (data) => {
  return axios.post("/auth/register", data);
};

export const sendActivationCode = (id) => {
  return axios.get(`/auth/send-activation-code/${id}`);
};

export const verifyActivationCode = (data) => {
  return axios.post(`/auth/verify-activation-code`, data);
};
