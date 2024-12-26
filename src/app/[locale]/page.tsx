"use server"

import {getQueryClient, queryFn} from "@/utils";
import { HomePage } from "@/view/home";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
export default async function Home() {
  const queryClient = getQueryClient();
  
  await queryClient.prefetchQuery<any>({
    queryKey: ['news'],
    queryFn: (context) => queryFn<any>(context),
  });

  return (
    <>
    <HydrationBoundary state={dehydrate(queryClient)}>
     <HomePage/>
     </HydrationBoundary>
    </>
  );
}
