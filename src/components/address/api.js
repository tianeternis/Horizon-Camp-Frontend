import {
  getDistrictByProvinceID,
  getProvinces,
  getWardsByDistrictID,
} from "@/services/ghnService";

export const fetchProvinces = async (setValue = (value) => {}) => {
  const res = await getProvinces();

  if (res && res.data && res.data?.data) {
    const data = res.data?.data;

    const newData = data?.map((item) => ({
      label: item?.ProvinceName,
      value: item?.ProvinceID,
    }));

    setValue(newData);
  } else {
    setValue([]);
  }
};

export const fetchDistricts = async (provinceID, setValue = (value) => {}) => {
  const res = await getDistrictByProvinceID(provinceID);

  if (res && res.data && res.data?.data) {
    const data = res.data?.data;

    const newData = data?.map((item) => ({
      label: item?.DistrictName,
      value: item?.DistrictID,
    }));

    setValue(newData);
  } else {
    setValue([]);
  }
};

export const fetchWard = async (districtID, setValue = (value) => {}) => {
  const res = await getWardsByDistrictID(districtID);

  if (res && res.data && res.data?.data) {
    const data = res.data?.data;

    const newData = data?.map((item) => ({
      label: item?.WardName,
      value: item?.WardCode,
    }));

    setValue(newData);
  } else {
    setValue([]);
  }
};
