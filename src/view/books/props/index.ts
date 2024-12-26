import {useFetchData} from "@/hooks";

export const usePageProps = ({type}:any) => {
  const {data:books} = useFetchData<any>({
    url: 'books',
    params: {relations: 'image',section:type},
  });
 

  return {
    books: books?.data,
  }
}

export const usePageIdProps = ({id}:any) => {

  const {data:oneBooks} = useFetchData<any>({
    url: `books/${id}`,
  });

  return {
    oneBooks:oneBooks?.data
  }
}
