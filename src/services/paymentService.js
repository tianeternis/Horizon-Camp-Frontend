import axios from "@/configs/axios";

export const createUrlPayment = (data) => {
  return axios.post("/payment/create-payment-url", data);
};
