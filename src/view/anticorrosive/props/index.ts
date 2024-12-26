import {useFetchData} from "@/hooks";

export const usePageProps = ({type,text,title}:any) => {
  const {data:news} = useFetchData<any>({
    url: 'news',
    params: {relations: 'image', section:type,isActive:true},
  });

  return {
    news: news?.data,
    type,
    text,
    title
  }
}