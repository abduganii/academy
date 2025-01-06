import { useFetchData } from "@/hooks";

export const usePageProps = ({ type, page ,title}: any) => {
  const { data: news } = useFetchData<any>({
    url: "news",
    params: {
      relations: "image",
      section: type|| undefined,
      title:title||undefined,
      isActive: true,
      pageSize: 11,
      page: page || 1,
    },
  });
  const { data: section } = useFetchData<any>({
    url: "static-data/Sections"});

  return {
    news: news,
    section:section
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
