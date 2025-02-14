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

export const login = (data) => {
  return axios.post(`/auth/login`, data);
};

export const loginWithGoogle = (data) => {
  return axios.post(`/auth/login-with-google`, data);
};

export const logout = (data) => {
  return axios.post(`/auth/logout`, data);
};
