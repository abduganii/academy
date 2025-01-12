import React from 'react'
import { getQueryClient, queryFn } from "@/utils";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { MyCooperationPage } from '@/view/profile/my-applications';

export default async function Notifications({searchParams: { page}}:any) {
   const queryClient = getQueryClient();
      await queryClient.prefetchQuery<any>({
        queryKey: ['cooperation'],
        queryFn: (context) => queryFn<any>(context),
      });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <><MyCooperationPage page={page}/></>
    </HydrationBoundary>
  )
}