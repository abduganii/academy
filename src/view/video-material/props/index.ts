import { useFetchData } from "@/hooks";

export const usePageProps = ({ type, page }: any) => {
  const { data: videos } = useFetchData<any>({
    url: "videos",
    params: {
      relations: "poster",
      section: type,
      pageSize: 18,
      page: page || 1,
    },
  });
  return {
    videos: videos,
  };
};

export const usePageIdProps = ({ id }: any) => {
  const { data: onevideos } = useFetchData<any>({
    url: `videos/${id}`,
  });

 

  const { data: comments } = useFetchData<any>({
    url: `comments`,
    params:{
      item:id,
      type:'video',
      relations:'user'
    }
  });
  const { data: stats } = useFetchData<any>({
    url: `comments/stats/${id}/video`,
  });
  return {
    onevideos: onevideos?.data,
    comments:comments?.data,
    stat:stats?.data
  };
};





