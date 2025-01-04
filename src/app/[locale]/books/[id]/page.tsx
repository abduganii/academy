"use server";
import { getQueryClient, queryFn } from '@/utils';
import {BookByIdPage} from '@/view/books/single'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function BooksById({params:{id}}:any) {
   const queryClient = getQueryClient();
    await queryClient.prefetchQuery<any>({
      queryKey: ['books'],
      queryFn: (context) => queryFn<any>(context),
    });
    await queryClient.prefetchQuery<any>({
      queryKey: ['comments'],
      queryFn: (context) => queryFn<any>(context),
    });
  return (
    <>
     <HydrationBoundary state={dehydrate(queryClient)}>
        <BookByIdPage id={id}/>
     </HydrationBoundary>
    </>
  )
}
