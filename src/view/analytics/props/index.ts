import {useFetchData} from "@/hooks";

export const usePageProps = ({type}:any) => {
  const {data:analytics} = useFetchData<any>({
    url: 'analytics',
    params: {section:type,relations:'image'},
  });

  return {
    analytics: analytics?.data,
  }
}
