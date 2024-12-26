import {useFetchData} from "@/hooks";

export const useHomePageProps = () => {
  const {data:news} = useFetchData<any>({
    url: 'news',
    params: {relations: 'image',isActive:true},
  });

  return {
    news: news?.data,
  }
}