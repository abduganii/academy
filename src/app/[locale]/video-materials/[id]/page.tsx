
"use server";
import { getQueryClient, queryFn } from '@/utils';
import {VideoMaterialIdPage} from '@/view/video-material/single'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function VideoMaterialId({params:{id}}:any) {
   const queryClient = getQueryClient();
    await queryClient.prefetchQuery<any>({
      queryKey: ['videos'],
      queryFn: (context) => queryFn<any>(context),
    });
    await queryClient.prefetchQuery<any>({
      queryKey: ['comments'],
      queryFn: (context) => queryFn<any>(context),
    });
  return (
    <>
     <HydrationBoundary state={dehydrate(queryClient)}>
        <VideoMaterialIdPage id={id}/>
     </HydrationBoundary>
    </>
  )
}
