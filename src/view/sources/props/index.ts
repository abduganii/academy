import {useFetchData} from "@/hooks";

export const usePageProps = ({type}:any) => {
 
  const {data:books} = useFetchData<any>({
    url: 'books',
    params: {relations: 'image',section:type},
  });

  
  const {data:articles} = useFetchData<any>({
    url: 'articles',
    params: {section:type},
  });
  return {
    books: books?.data,
    articles: articles?.data,
  }
}
