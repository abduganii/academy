import {RecommendationsPage} from "@/view/profile/recommendations";
import { getQueryClient, queryFn } from "@/utils";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function page({searchParams: { page}}:any) {
   const queryClient = getQueryClient();
      await queryClient.prefetchQuery<any>({
        queryKey: ['news'],
        queryFn: (context) => queryFn<any>(context),
      });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RecommendationsPage  page={page}/>
    </HydrationBoundary>
  )
}
