import axios from "axios";
import i18next from "i18next";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // Config language
    const lang = i18next.language;

    // Thêm ngôn ngữ hiện tại vào header
    config.headers["Accept-Language"] = lang;

    // Thêm ngôn ngữ hiện tại vào query string
    const url = new URL(config.url, config.baseURL);
    url.searchParams.set("lang", lang);
    config.url = url.pathname + url.search;

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return error && error.response && error.response.data
      ? error.response.data
      : Promise.reject(error);
  },
);

export default instance;
