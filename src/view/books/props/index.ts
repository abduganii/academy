import { useFetchData } from "@/hooks";

export const usePageProps = ({ type, page,authorId,publisherId,name,translatorId, }: any) => {
  const { data: books } = useFetchData<any>({
    url: "books",
    params: {
      relations: "image",
      section: type||undefined,
      name:name|| undefined,
      authorId:authorId || undefined,
      publisherId:publisherId || undefined,
      translatorId:translatorId || undefined,
      pageSize: 18,
      page: page || 1,
    },
  });
  const { data: authors } = useFetchData<any>({
    url: "authors",
    params: {
      section: type,
      pageSize: 10,
    },
  });
  const { data: publishers } = useFetchData<any>({
    url: "publishers",
    params: {
      section: type,
      pageSize: 10,
    },
  });
  const { data: translators } = useFetchData<any>({
    url: "translators",
    params: {
      section: type,
      pageSize: 10,
    },
  });
  const { data: section } = useFetchData<any>({
    url: "static-data/Sections"});
  return {
    books: books,
    authors:authors,
    publishers:publishers,
    translators:translators,
    section:section
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
  const { data: stats } = useFetchData<any>({
    url: `comments/stats/${id}/book`,
  });

  return {
    oneBooks: oneBooks?.data,
    comments:comments?.data,
    books:books?.data,
    stat:stats?.data
  };
};



export const usePagePdfProps = ({ id }: any) => {
 
  // const { data: pdf } = useFetchData<any>({
  //   url: `books/download/${id}`,
  // });
  return {
    pdf:'',
  };
};
