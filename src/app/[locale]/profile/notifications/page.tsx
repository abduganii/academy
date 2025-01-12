import {NotificationPage} from '@/view/profile/notification'
import React from 'react'
import { getQueryClient, queryFn } from "@/utils";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Notifications({searchParams: { page}}:any) {
   const queryClient = getQueryClient();
      await queryClient.prefetchQuery<any>({
        queryKey: ['notification'],
        queryFn: (context) => queryFn<any>(context),
      });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <><NotificationPage page={page}/></>
    </HydrationBoundary>
  )
}