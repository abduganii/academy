import { TObject } from "@/types";
import { httpClient } from "@/utils";
import { QueryFunctionContext } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const queryStringify = (query: object = {}): string => {
  return Object.entries(query)
    .reduce<string[]>((acc, [key, value]) => {
      if (typeof value !== "undefined") {
        if (typeof value === "string") {
          value = value.trim();
        }
        acc.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      }
      return acc;
    }, [])
    .join("&");
};

export const queryBuilder = (url: string, config: TObject): string => {
  if (Object.keys(config).length === 0) return url;
  const queryString = queryStringify(config);

  return `${url}?${queryString}`;
};

export const queryFn = async <T>(
  context: QueryFunctionContext,
  params: TObject = {}
): Promise<T> => {
  const { queryKey, signal } = context;
  const url = queryBuilder(queryKey[0] as string, params);
  try {
    const { data } = await httpClient<T>({
      url,
      signal,
      method: "GET",
    });
    return data;
  } catch (err: any) {
    if (err?.status == 401) {
      Cookies.remove("tokenAcadamySite");
      toast.error(err?.message);
      window.location.href = "/";
    }
  }
};

export const mutationFn = async <T>(config: AxiosRequestConfig) => {
  const { data } = await httpClient<T>(config);
  return data;
};
