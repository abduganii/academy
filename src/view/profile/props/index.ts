import { useFetchData } from "@/hooks";

export const usePageProps = () => {
  const { data: MyMaterialTypes } = useFetchData<any>({
    url: "static-data/MyMaterialTypes",
   
  });
  return {
    MyMaterialTypes: MyMaterialTypes?.data,
  };
};

export const useNotificationsProps = () => {
  const { data: notifications } = useFetchData<any>({
    url: "notifications",
   
  });
  return {
    notifications: notifications?.data,
  };
};

export const useNewsProps = ({ page }: any) => {
  const { data: news } = useFetchData<any>({
    url: "news",
    params: {
      relations: "image",
      isActive: true,
      pageSize: 11,
      page: page || 1,
    },
  });

  return {
    news: news,
  };
};

export const useCooperationProps = ({ page }: any) => {
  const { data: mycooperation } = useFetchData<any>({
    url: "cooperations",
    params: {
      pageSize: 4,
      page: page || 1,
    },
  });
  return {
    mycooperation: mycooperation,
  };
};

export const useArticlesProps = ({ page }: any) => {
  const { data: articles } = useFetchData<any>({
    url: "my-materials/articles",
    params: {
      // relations: "image",
      pageSize: 11,
      page: page || 1,
    },
  });

  return {
    articles: articles,
  };
};

