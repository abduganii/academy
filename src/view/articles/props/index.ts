import { useFetchData } from "@/hooks";

export const usePageProps = ({ type, page }: any) => {
  const { data: articles } = useFetchData<any>({
    url: "articles",
    params: { section: type, pageSize: 10, page: page || 1 },
  });

  return {
    articles: articles,
  };
};
export const usePageIdProps = ({ id }: any) => {
  const { data: oneArticles } = useFetchData<any>({
    url: `articles/${id}`,
  });
  return {
    oneArticles: oneArticles?.data,
  };
};
