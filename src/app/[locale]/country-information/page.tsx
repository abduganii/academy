

"use server";
import { getQueryClient, queryFn } from '@/utils';
import {CountryInformationPage} from '@/view/country-information'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function CountryInformation({searchParams: {type ,page}}:any) {
   const queryClient = getQueryClient();
        
    await queryClient.prefetchQuery<any>({
      queryKey: ['maps'],
      queryFn: (context) => queryFn<any>(context),
    });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CountryInformationPage />
      </HydrationBoundary>
  )
}