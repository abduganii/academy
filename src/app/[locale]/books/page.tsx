"use server";

import { getQueryClient, queryFn } from "@/utils";
import { BooksPage } from "@/view/books";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Books({searchParams: {type,page }}:any) {
   const queryClient = getQueryClient();
    await queryClient.prefetchQuery<any>({
      queryKey: ['books'],
      queryFn: (context) => queryFn<any>(context),
    });
  return (
     <HydrationBoundary state={dehydrate(queryClient)}>
      <BooksPage type={type} page={page} />
      </HydrationBoundary>
  )
}
