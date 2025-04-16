import axios from "@/configs/axios";

export const getGuides = ({ sort, page, limit }) => {
  return axios.get(`/picnic-guide/get-for-customer`, {
    params: { sort, page, limit },
  });
};

export const getGuideBySlug = (slug) => {
  return axios.get(`/picnic-guide/get-details/${slug}`, {
    params: { status: "published" },
  });
};
