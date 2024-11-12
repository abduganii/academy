'use client'
import SwiperWithScrollIcons from '@/components/swiper'
import Image from 'next/image'
import React from 'react'
import dayjs from "dayjs";
import { EyeIcons } from '@/components/icons';
import { Button } from '@nextui-org/react';
import NewsCard from '@/components/card/news-card';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function NewsSection({Isgrey}:any) {
  const router = useRouter()
  const locale = useLocale()
  return (
    <>
    <SwiperWithScrollIcons title={"news"} slidesPerView={3} className="flex w-full items-center  text-[16px] font-semibold gap-6 mt-8">
       {
        [1,2,3,4,5]?.map(e=>(
            <NewsCard
            link={`/news/${e}`}
            key={e}
            image='/news.png'
            Isgrey={Isgrey}
            category='Общество'
            title='Объявляется прием на обучение на стажера-исследователя'
            date='16.07.2024'
            view={567}
      />
        ))
        }
       
    
    </SwiperWithScrollIcons>
        <div className='text-center mb-[60px] mt-[32px]'>
            <Button onClick={()=>router.push(`/${locale}/news`)} className='bg-black text-white inline-block'>
                Подробнее
            </Button>
        </div>
    </>
  )
}
