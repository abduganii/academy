"use server";
import { getQueryClient, queryFn } from '@/utils';
import {AnalyticsPage} from '@/view/analytics'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function Analytics({searchParams: {type }}:any) {
   const queryClient = getQueryClient();
    await queryClient.prefetchQuery<any>({
      queryKey: ['analytics'],
      queryFn: (context) => queryFn<any>(context),
    });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnalyticsPage type={type}/>
      </HydrationBoundary>
  )
}
