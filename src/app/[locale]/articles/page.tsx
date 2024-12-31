"use server";
import { getQueryClient, queryFn } from '@/utils';
import {ArticlesPage} from '@/view/articles'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function Articles({searchParams: {type ,page}}:any) {
   const queryClient = getQueryClient();
        
    await queryClient.prefetchQuery<any>({
      queryKey: ['articles'],
      queryFn: (context) => queryFn<any>(context),
    });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ArticlesPage type={type} page={page} />
      </HydrationBoundary>
  )
}
