import axios from "axios";
import { BASE_URL } from "../lib/constants";
import useAuthStore from "../app/authStore";
import { ROUTE_PATHS } from "../lib/constants/routesConstants";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      const deleteToken = useAuthStore.getState().deleteToken();
      deleteToken();
      window.location.href = ROUTE_PATHS.LOGIN;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
