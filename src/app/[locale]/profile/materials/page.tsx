import {MaterialsPage} from "@/view/profile/materials";
import { getQueryClient, queryFn } from "@/utils";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function page({searchParams: { page}}:any) {
   const queryClient = getQueryClient();
      await queryClient.prefetchQuery<any>({
        queryKey: ['my-materials/articles'],
        queryFn: (context) => queryFn<any>(context),
      });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MaterialsPage  page={page} />
    </HydrationBoundary>
  )
}