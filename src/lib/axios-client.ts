//This instance of Axios can be used for calling apis from client side (Browser)
//This instance can be used for calling apis from 'api'route or from external api source.

import axios from "axios";
import { AxiosInterceptor } from "./axios-interceptors";

//instance of axios
 const instance = axios.create({
//   baseURL: "/",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  //   params: commonParams,
});

export const axiosInstanceClient = AxiosInterceptor(instance);
