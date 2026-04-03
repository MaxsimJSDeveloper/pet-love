import axios from "axios";
import type { store as AppStore } from "../redux/store";

let store: typeof AppStore | undefined;

export const injectStore = (_store: typeof AppStore) => {
  store = _store;
};

const axiosInstance = axios.create({
  baseURL: "https://petlove.b.goit.study/api",
});

axiosInstance.interceptors.request.use((config) => {
  if (store) {
    const token = store.getState().users.token;
    if (token && !config.headers.skipAuth) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (store) {
        store.dispatch({ type: "users/signOut/fulfilled" });
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
