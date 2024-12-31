"use server";
import { getQueryClient, queryFn } from '@/utils';
import {CountryInformationSinglePage} from '@/view/country-information/single'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function CountryInformationSingle({params:{id}}:any) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery<any>({
    queryKey: ['map-items'],
    queryFn: (context) => queryFn<any>(context),
  });
  return (
    <>
     <HydrationBoundary state={dehydrate(queryClient)}>
        <CountryInformationSinglePage id={id}/>
     </HydrationBoundary>
    </>
  )
}