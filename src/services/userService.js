import axios from "@/configs/axios";

export const getUser = (id) => {
  return axios.get(`/user/get/${id}`);
};
