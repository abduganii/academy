import axios, { AxiosHeaders, AxiosInstance } from "axios";
import Cookies from "js-cookie";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const httpClient: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  // withCredentials: true,
});

const setRequestHeaders = async (config: any) => {
  if (!config.headers) {
    config.headers = new AxiosHeaders();
  }
  config.headers.set("Content-Type", "application/json");
  config.headers.set("lang",Cookies.get("NEXT_LOCALE")||"ru");
  if (Cookies.get("tokenAcadamySite")) {
    config.headers["Authorization"] = `Bearer ${Cookies.get(
      "tokenAcadamySite"
    )}`;
  }
  return config;
};


// const handleTokenRefresh = async (): Promise<void> => {
//   const tokenAPI: AxiosInstance = axios.create({
//     baseURL,
//     withCredentials: true,
//   });
//   tokenAPI.interceptors.request.use(setRequestHeaders);
//   await tokenAPI.post("/users/refresh-token");
// };

// const setupResponseInterceptors = () => {
//   return [
//     (response: AxiosResponse) => response,
//     async (error: any) => {
//       const config = error.config as InternalAxiosRequestConfig & {
//         _attempted?: boolean;
//       };
//       const errorCode = error?.response?.data?.error?.code;
//       if (errorCode === "TOKEN_EXPIRED" && !config._attempted) {
//         config._attempted = true;

//         await handleTokenRefresh();

//         return axios(config);
//       }

//       const rejectionError = new Error(
//         error?.response?.data?.message ||
//           error?.response?.data?.data ||
//           "An error occurred"
//       );

//       return Promise.reject(rejectionError);
//     },
//   ];
// };

httpClient.interceptors.request.use(setRequestHeaders);
// httpClient.interceptors.response.use(...setupResponseInterceptors());

export { httpClient };
