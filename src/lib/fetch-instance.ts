//This instance of Axios can be used for calling from server side (Next js Server).

import { TMDB_LANGUAGE, TMDB_INCLUDE_ADULT } from "@/constants/tmdb-contants";
import { removeNullUndefined } from "./utils";
export const BASE_URL = `${process.env.TMDB_URL}`;

const commonParams = {
  api_key: process.env.TMDB_API_KEY || "",
  include_adult: TMDB_INCLUDE_ADULT || "false",
  language: TMDB_LANGUAGE || "",
  // page: 1,
};
// Setting default headers for HTTP requests
const headers: HeadersInit = {
  Accept: "*/*",
  "Content-Type": "application/json", // Specifying content type as JSON
};

type RequestConfig = {
  params?: { [key: string]: any }; // Optional parameters to be appended to the URL
  options?: RequestInit;
};

// Function to perform HTTP requests
export const fetchInstance = async <T>(
  url: string, // Endpoint URL
  config?: RequestConfig
): Promise<Response> => {
  const finalUrl = new URL(url, BASE_URL); // Combine base path with endpoint URL

  // Merge commonParams with any provided params
  const params = { ...commonParams, ...config?.params };
  finalUrl.search = new URLSearchParams(removeNullUndefined(params)).toString();
  // console.log(finalUrl.toString());
  // Perform fetch request with specified options and headers
  return fetch(finalUrl.toString(), {
    ...config?.options,
    headers: {
      ...headers,
      ...config?.options?.headers,
    },
  });
};
