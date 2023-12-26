//This instance of Axios can be used for calling from server side (Next js Server).

import axios, { AxiosRequestConfig } from "axios";
export const BASE_URL = `${process.env.TMDB_URL}`;

const commonParams = {
  api_key: process.env.TMDB_API_KEY,
  include_adult: false,
  language: "en-US",
  // page: 1,
};

const config: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  params: {...commonParams},
};
//instance of axios
export const axiosInstance = axios.create(config);
