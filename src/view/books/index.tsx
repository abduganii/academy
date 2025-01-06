'use client'
import BooksCard from '@/components/card/books-card'
import Container from '@/components/container'
import Pagination from '@/components/pagination'
import { hoc } from '@/utils'
import { Button} from '@nextui-org/react'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { usePageProps } from './props'
import FilterPage from './filter'

export const BooksPage:any = hoc(usePageProps, props => {
     const {books,authors,publishers,translators,section} = props
    const t = useTranslations()
  return (
    <>
        <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-center bg-no-repeat'  style={{"backgroundImage":`url('/r1.png')`}} >
            <Container className='z-20'>
                <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left'>{t('books')}</h4>
              <FilterPage authors={authors} publishers={publishers} section={section} translators={translators}/>
            </Container>
            <div className='w-full h-[372px] bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div>
      </div>
      <Container className='mb-[60px]'>
        <div className='flex flex-wrap   gap-6'>
            {
                books?.data?.map((e:any)=>(
                    <BooksCard
                        link={`/books/${e?.id}`}
                        key={e?.id}
                        className='colm3'
                        image={`${process.env.NEXT_PUBLIC_BASE_URL}${e?.image?.path}`}
                        title={e?.name}
                        price={`${e?.price} som`}
                    />
                )
            )
            }
        </div>
        
        <Pagination pagination={ books?.pagination} />
      </Container>
    </>
  )
})