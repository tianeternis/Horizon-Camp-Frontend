import axios from "@/configs/axios";

export const register = (data) => {
  return axios.post("/auth/register", data);
};
