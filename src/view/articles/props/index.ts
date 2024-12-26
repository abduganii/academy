import {useFetchData} from "@/hooks";

export const usePageProps = ({type}:any) => {
  const {data:articles} = useFetchData<any>({
    url: 'articles',
    params: {section:type},
  });

  return {
    articles: articles?.data,
  }
}
export const usePageIdProps = ({id}:any) => {

  const {data:oneArticles} = useFetchData<any>({
    url: `articles/${id}`,
  });
  return {
    oneArticles:oneArticles?.data
  }
}

