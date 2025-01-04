import {CooperationPage} from '@/view/profile/cooperation'
import { getQueryClient, queryFn } from "@/utils";
// import { BooksPage } from "@/view/books";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function page() {
   const queryClient = getQueryClient();
      await queryClient.prefetchQuery<any>({
        queryKey: ['static-MyMaterialTypes'],
        queryFn: (context) => queryFn<any>(context),
      });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CooperationPage/>
    </HydrationBoundary>
  )
}
