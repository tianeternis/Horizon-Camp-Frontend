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

export const getShippingFee = (districtID, wardCode, weight = 0) => {
  return axios.post(
    `https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee`,
    {
      to_ward_code: wardCode,
      to_district_id: districtID,
      weight,
      service_type_id: 2,
    },
    configHeader,
  );
};
