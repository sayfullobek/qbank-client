"use client";

import axios from "axios";
import { baseUrl } from "../lib/apiUrl";
import { getToken } from "./auth";

// api config
const api = axios.create({
  baseURL: baseUrl,
  // baseURL: 'http://localhost:2025/api',
  timeout: 300000,
});

// export const imageApi = baseUrl
// surov junatishdan oldn token junatamz
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// res va error ni qaytaramz
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default api;