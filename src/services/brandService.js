import axios from "@/configs/axios";

export const getBrands = (search, page, limit) => {
  const params = new URLSearchParams();

  if (search) params.append("search", search);
  if (page) params.append("page", page);
  if (limit) params.append("limit", limit);
  params.append("sort", "name");

  return axios.get(`/brand/get?${params.toString()}`);
};
