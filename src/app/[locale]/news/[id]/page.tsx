"use server";
import { getQueryClient, queryFn } from '@/utils';
import { NewsIdPage } from '@/view/news/id';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function NewsId({params:{id}}:any) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery<any>({
    queryKey: ['news'],
    queryFn: (context) => queryFn<any>(context),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <><NewsIdPage id={id}/></>
    </HydrationBoundary>
  )
}
