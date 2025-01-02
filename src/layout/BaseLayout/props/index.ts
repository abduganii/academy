"use client";
import { useFetchData } from "@/hooks";
import { useAppSelector } from "@/lib/hooks";
import Cookies from "js-cookie";

export const usePageProps = () => {
  const { token } = useAppSelector((store: any) => store.token);
  const { data: me } = useFetchData<any>({
    url: "auth/me",
    params: {
      relations: "image",
      token: token,
    },
    enabled: Boolean(Cookies.get("tokenAcadamySite")),
  });

  return {
    me: me,
  };
};
