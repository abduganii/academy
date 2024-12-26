"use server";
import { getQueryClient, queryFn } from '@/utils';
import { SourcesPage } from '@/view/sources';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function Sources({searchParams: {type }}:any) {
  const queryClient = getQueryClient();
      
  await queryClient.prefetchQuery<any>({
    queryKey: ['books'],
    queryFn: (context) => queryFn<any>(context),
  });
  await queryClient.prefetchQuery<any>({
    queryKey: ['articles'],
    queryFn: (context) => queryFn<any>(context),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SourcesPage type={type}/>
    </HydrationBoundary>
  )
}
