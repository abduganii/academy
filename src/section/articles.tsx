"use client"
import SwiperWithScrollIcons from '@/components/swiper'
import React from 'react'
import { Button } from '@nextui-org/react';
import ArticlesCard from '@/components/card/articles-card';
import { useRouter } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';

export default function ArticlesSection({articles,type}:any) {
    const router = useRouter()
    const locale = useLocale(); 
    const t = useTranslations();
  return (
    <>
    <SwiperWithScrollIcons title={"articles"} slidesPerView={3} className="flex w-full items-center  text-[16px] font-semibold gap-6 mt-8">
       {
       articles?.length && articles?.map((e:any)=>(
            <ArticlesCard
            link={`/articles/${e?.id}`}
            key={e?.id}
            title={e?.title}
            text={e?.text}
                date={e?.created_at}
        />
        ))
        }
       
    </SwiperWithScrollIcons>
        <div className='text-center mb-[60px] mt-[32px]'>
            <Button onClick={()=>router.push(`/${locale}/articles?type=${type}`)} className='bg-black text-white dark:bg-white dark:text-black inline-block'>
               {t('more-details')}
            </Button>
        </div>
    </>
  )
}
