"use server";
import { getQueryClient, queryFn } from '@/utils';
import { AnticorrosivePage } from '@/view/anticorrosive';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function Anticorrosive() {
   const queryClient = getQueryClient();
    
    await queryClient.prefetchQuery<any>({
      queryKey: ['news'],
      queryFn: (context) => queryFn<any>(context),
    });
    await queryClient.prefetchQuery<any>({
      queryKey: ['courses'],
      queryFn: (context) => queryFn<any>(context),
    });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
    <AnticorrosivePage type={'anti_terrorism'} title={'Противодействие легализации преступных доходов и финансированию терроризма'} text='Объявляется прием на обучение на стажера-исследователя, в базовую докторантуру.' />
    </HydrationBoundary>
  )
}