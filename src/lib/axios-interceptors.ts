import axios, {
  AxiosError,
  AxiosInstance,
  //   AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// Creating a Map to store API Url and AbortController (as k,v)
const abortControllersMap = new Map<string, AbortController>();

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const { url } = config;
  //Getting URL from config and passing it to Abort Controller Map as Key
  const existingController = abortControllersMap.get(url || "");
  if (existingController) {
    //If Found Abort the Controller
    existingController.abort();
    //Delete the (k,v) from Map
    abortControllersMap.delete(url || "");
    // console.log("Url found in Map,Aborted and Deleted from Map")
  }
  //Creating and Instantiating an Abort Controller
  const controller = new AbortController();
  //Setting 'signal' to config
  config.signal = controller.signal;
  //Setting url as Key and controller as value to Map
  abortControllersMap.set(url || "", controller);
  // console.log("Url set in Map")
  return config;
};

// const onRequestError = (error: AxiosError): Promise<AxiosError> => {
//   console.error(`[request error] [${JSON.stringify(error)}]`);
//   return Promise.reject(error);
// };

const onResponse = (response: AxiosResponse): AxiosResponse => {
  const { config } = response;
  const { url } = config;
  //Deleting Url from Map on response Success
  abortControllersMap.delete(url || "");
  // console.log("Response Status Success, deleted URL from Map")
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  if (!axios.isCancel(error)) {
    const { config } =  error;;
    const url = config?.url;
    //Deleting Url from Map on response error
    if (url) abortControllersMap.delete(url);
    // console.log("Response Status Error, deleted URL from Map")
  }
  return Promise.reject(error);
};

export function AxiosInterceptor(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
