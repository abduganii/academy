import {useFetchData} from "@/hooks";

export const usePageProps = ({type,text,title}:any) => {
  const {data:news} = useFetchData<any>({
    url: 'news',
    params: {relations: 'image', section:type,isActive:true},
  });

  const {data:CoursesLocal} = useFetchData<any>({
    url: 'courses',
    params: {type:'local'},
    enabled: type == 'anti_corruption'
  });
  const {data:CoursesVirtual} = useFetchData<any>({
    url: 'courses',
    params: {relations: 'image', type:'virtual'},
    enabled: type == 'anti_corruption'
  });

  const {data:CoursesInternational} = useFetchData<any>({
    url: 'courses',
    params: {type:'international'},
    enabled: type == 'anti_terrorism'
  });

  return {
    news: news?.data,
    coursesLocal:CoursesLocal?.data,
    coursesVirtual:CoursesVirtual?.data,
    coursesInternational:CoursesInternational?.data,

    type,
    text,
    title
  }
}