import axios from "axios";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

httpClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

httpClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default httpClient;
