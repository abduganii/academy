"use client"
import BooksCard from '@/components/card/books-card'
import SwiperWithScrollIcons from '@/components/swiper'
import { Button } from '@nextui-org/react'
import {  useTranslations } from 'next-intl'
import { useRouter } from '@/i18n/routing';
import React from 'react'

export default function BooksSection({books,type}:any) {
    const router = useRouter()
     const t = useTranslations();
  return (
    <>
        <SwiperWithScrollIcons title={"books"} slidesPerView={6} className="flex w-full items-center  text-[16px] font-semibold gap-6 mt-8">
            {
                 books?.map((e:any)=>(
                    <BooksCard
                        link={`/books/${e?.id}`}
                        key={e?.id}
                        image={`${process.env.NEXT_PUBLIC_BASE_URL}${e?.image?.path}`}
                        title={e?.name}
                        price={`${e?.price} som`}
                    />
                 )
            )
            }
        </SwiperWithScrollIcons>
        <div className='text-center mb-[60px] mt-[32px]'>
            <Button onClick={()=>router.push(`/books?type=${type}`)} className='bg-black text-white dark:bg-white dark:text-black inline-block'>
                    {t('more-details')}
            </Button>
        </div>
    </>
  )
}

