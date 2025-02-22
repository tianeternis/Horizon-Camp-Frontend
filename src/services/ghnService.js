import axios from "axios";

const configHeader = {
  headers: {
    "Content-Type": "application/json",
    Token: import.meta.env.VITE_GHN_SERET_TOKEN,
    ShopId: import.meta.env.VITE_GHN_SHOP_ID,
  },
};

export const getProvinces = () => {
  return axios.get(
    `https://online-gateway.ghn.vn/shiip/public-api/master-data/province`,
    configHeader,
  );
};

export const getDistrictByProvinceID = (provinceID) => {
  return axios.get(
    `https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${provinceID}`,
    configHeader,
  );
};

export const getWardsByDistrictID = (districtID) => {
  return axios.get(
    `https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${districtID}`,
    configHeader,
  );
};
