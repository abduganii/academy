"use client"
import SwiperWithScrollIcons from '@/components/swiper'
import React from 'react'
import { Button } from '@nextui-org/react';
import ArticlesCard from '@/components/card/articles-card';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function ArticlesSection() {
    const router = useRouter()
    const lang = useTranslations()
    console.log(lang)
    // const locale = useLocale(); 
    const locale = 'ru'
  return (
    <>
    <SwiperWithScrollIcons title={"articles"} slidesPerView={3} className="flex w-full items-center  text-[16px] font-semibold gap-6 mt-8">
       {
        [1,2,3,4,5]?.map(e=>(
            <ArticlesCard
            link={`/articles/${e}`}
            key={e}
            title='ПРИОРИТЕТНЫЕ НАПРАВЛЕНИЯ ОБЕСПЕЧЕНИЯ ПРАВОПОРЯДКА И ДАЛЬНЕЙШЕЙ РЕФОРМЫ СУДЕБНОЙ СИСТЕМЫ'
            text=' В Правоохранительной академии Республики 
                В Правоохранительной академии Республики '
                date='  16.07.2024'
        />
        ))
        }
       
    </SwiperWithScrollIcons>
        <div className='text-center mb-[60px] mt-[32px]'>
            {/* <Button onClick={()=>router.push(`/${locale}/articles`)} className='bg-black text-white inline-block'>
                Подробнее
            </Button> */}
        </div>
    </>
  )
}
