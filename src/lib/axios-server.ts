//This instance of Axios can be used for calling from server side (Next js Server).

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ResponseError, ResponseSuccess } from "./api-response";
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
  params: { ...commonParams },
};
//instance of axios
export const axiosInstance = axios.create(config);

// export async function axiosFetch<T>(url: string): Promise<ResponseSuccess<T>> {
//   try {
//     const response: AxiosResponse = (await axiosInstance.get(url))
//     return response.data as ResponseSuccess<T>
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       const axiosError: AxiosError<ResponseError> = error;
//       const err: ResponseError = {
//         status_code: axiosError.response?.data.status_code!,
//         status_message: axiosError.response?.data.status_message!,
//         success: axiosError.response?.data.success!,
//       };
//       throw err;
//     } else {
//       throw new Error("An expected error occured");
//     }
//   }
// }
