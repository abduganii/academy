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

  return {
    oneBooks: oneBooks?.data,
  };
};
