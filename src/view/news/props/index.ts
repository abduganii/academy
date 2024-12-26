import {useFetchData} from "@/hooks";

export const usePageProps = ({type}:any) => {
 
  const {data:news} = useFetchData<any>({
    url: 'news',
    params: {relations: 'image',section:type,isActive:true},
  });

  return {
    news: news?.data,
  }
}
export const usePageIdProps = ({id}:any) => {
 
  const {data:oneNews} = useFetchData<any>({
    url: `news/${id}`,
  });

  return {
    oneNews: oneNews?.data,
  }
}