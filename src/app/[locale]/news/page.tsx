"use server";
import { getQueryClient, queryFn } from '@/utils';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { NewsPage } from '@/view/news';

export default async function News({searchParams: {type ,page}}:any) {
   const queryClient = getQueryClient();
    await queryClient.prefetchQuery<any>({
      queryKey: ['news'],
      queryFn: (context) => queryFn<any>(context),
    });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewsPage type={type} page={page} />
    </HydrationBoundary>
  )
}