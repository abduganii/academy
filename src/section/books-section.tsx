"use client"
import BooksCard from '@/components/card/books-card'
import SwiperWithScrollIcons from '@/components/swiper'
import { Button } from '@nextui-org/react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function BooksSection() {
    const router = useRouter()
     const locale = useLocale()
  return (
    <>
        <SwiperWithScrollIcons title={"books"} slidesPerView={6} className="flex w-full items-center  text-[16px] font-semibold gap-6 mt-8">
            {
                 [1,2,3,4,5,6,7,8]?.map(e=>(
                    <BooksCard
                        link={`/books/${e}`}
                        key={e}
                        image={'/books.png'}
                        title='Think and Grow Rich Every Day'
                        price='350 000 сум'
                    />
                 )
            )
            }
        </SwiperWithScrollIcons>
        <div className='text-center mb-[60px] mt-[32px]'>
            <Button onClick={()=>router.push(`/${locale}/books`)} className='bg-black text-white inline-block'>
                Подробнее
            </Button>
        </div>
    </>
  )
}

