"use server";
import { getQueryClient, queryFn } from '@/utils';
import {ArticlesIdPage} from '@/view/articles/single'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function ArticlesId({params:{id}}:any) {
   const queryClient = getQueryClient();
      await queryClient.prefetchQuery<any>({
        queryKey: ['articles'],
        queryFn: (context) => queryFn<any>(context),
      });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ArticlesIdPage id={id}/>
    </HydrationBoundary>
  )
}
