
import { generateErrorMessage } from "@wallpay/apis/utils";
import { showSnackbar } from "@wallpay/components";
import type { AxiosRequestConfig } from "axios";
import { getSanaapToken } from "@wallpay/hooks/useAppStore";
import axios from "axios";

export const adapter = axios.create({
  baseURL: import.meta.env.VITE_SANAAP_BASE_URL || "https://stage.api.sanaap.co",
  timeout: 35_000,
});

adapter.interceptors.request.use(
  (config) => {
    const accessToken = getSanaapToken();
    if (accessToken && config.headers) {
      config.headers.Authorization = `jwt ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

adapter.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function sanaapMutator<T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> {
  const source = axios.CancelToken.source();

  const promise = adapter({
    ...config,
    ...options,
    cancelToken: source.token,
    headers: {
      ...options?.headers,
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      return typeof data === "object" ? data?.data : data;
    })
    .catch((reason) => {
      const message = generateErrorMessage(reason);
      if (reason?.response?.status >= 400 && reason?.response?.status !== 401) {
        showSnackbar({ message, severity: "error" });
      }
      return Promise.reject({ message, response: reason?.response });
    });

  (promise as any).cancel = () => {
    source.cancel("Query was cancelled");
  };

  return promise;
} 