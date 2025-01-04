import { useFetchData } from "@/hooks";

export const usePageProps = ({ type, page }: any) => {
  const { data: books } = useFetchData<any>({
    url: "books",
    params: {
      relations: "image",
      section: type,
      pageSize: 18,
      page: page || 1,
    },
  });

  return {
    books: books,
  };
};

export const usePageIdProps = ({ id }: any) => {
  const { data: oneBooks } = useFetchData<any>({
    url: `books/${id}`,
  });
  const { data: books } = useFetchData<any>({
    url: "books",
    params: {
      relations: "image",
      pageSize: 18,
      page:  1,
    },
  });


  const { data: comments } = useFetchData<any>({
    url: `comments`,
    params:{
      item:id,
      type:'book',
      relations:'user',
      sortBy:'DESC'
      
    }
  });
  return {
    oneBooks: oneBooks?.data,
    comments:comments?.data,
    books:books?.data
  };
};





