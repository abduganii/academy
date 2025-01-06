import { useFetchData } from "@/hooks";

export const usePageProps = ({ type, page,authorId,title, }: any) => {
  const { data: articles } = useFetchData<any>({
    url: "articles",
    params: { 
      title:title|| undefined,
      authorId:authorId || undefined,
      section: type ||undefined, 
      pageSize: 10, 
      page: page || 1 
    },
  });
  const { data: authors } = useFetchData<any>({
    url: "authors",
    params: {
      section: type,
      pageSize: 10,
    },
  });
  const { data: section } = useFetchData<any>({
    url: "static-data/Sections"});
  return {
    articles: articles,
    authors:authors,
    section:section
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
