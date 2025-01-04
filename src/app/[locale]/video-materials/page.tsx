"use server";
import { getQueryClient, queryFn } from "@/utils";
import {VideoMaterialPage} from '@/view/video-material'
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function VideoMaterials({searchParams: {type, page }}:any) {
   const queryClient = getQueryClient();
    await queryClient.prefetchQuery<any>({
      queryKey: ['videos'],
      queryFn: (context) => queryFn<any>(context),
    });
  return (
     <HydrationBoundary state={dehydrate(queryClient)}>
      <VideoMaterialPage type={type} page={page} />
      </HydrationBoundary>
  )
}