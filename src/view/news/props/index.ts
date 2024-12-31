import { useFetchData } from "@/hooks";

export const usePageProps = ({ type, page }: any) => {
  const { data: news } = useFetchData<any>({
    url: "news",
    params: {
      relations: "image",
      section: type,
      isActive: true,
      pageSize: 11,
      page: page || 1,
    },
  });

  return {
    news: news,
  };
};
export const usePageIdProps = ({ id }: any) => {
  const { data: oneNews } = useFetchData<any>({
    url: `news/${id}`,
  });

  return {
    oneNews: oneNews?.data,
  };
};
