"use server";
import {ReadPdfPage} from '@/view/books/read-pdf'
import { getQueryClient, queryFn } from '@/utils';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function BookRead({params:{id}}:any) {
   const queryClient = getQueryClient();
    await queryClient.prefetchQuery<any>({
      queryKey: ['booksPdf'],
      queryFn: (context) => queryFn<any>(context),
    });
  
  return (
    <>
     <HydrationBoundary state={dehydrate(queryClient)}>
        <ReadPdfPage id={id}/>
     </HydrationBoundary>
    </>
  )
}