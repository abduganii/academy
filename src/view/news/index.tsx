"use client"
import NewsCard from '@/components/card/news-card'
import Container from '@/components/container'
import { hoc } from '@/utils'
import { Select, SelectItem } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import React from 'react'

import { usePageProps } from './props'
import Pagination from '@/components/pagination'

export const NewsPage:any = hoc(usePageProps, props => {
  const { news } = props
  const t = useTranslations()

  return (
    <>
    <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-[#2C2C2C] bg-center bg-no-repeat bg-cover' 
    //  style={{"backgroundImage":`url('/r6.jfif')`}}
     >
    <Container className='z-20'>
        <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left mb-4'>{t('news')}</h4>
        <div className='flex'>
                <Select
                    size='sm'
                    label="Select an book" 
                    className="w-full max-w-[220px]" 
                    >
                    <SelectItem key={1}>
                        items 1
                    </SelectItem>
                    <SelectItem key={2}>
                        items 2
                    </SelectItem>
                </Select>
                </div>
    </Container>
    {/* <div className='w-full h-[372px] bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div> */}
    </div>

    <Container className='flex flex-wrap gap-5  mt-[60px] mb-[80px]'>
     {news?.data && news?.data?.map((e:any,index:number)=>( 
            <NewsCard
                link={`/news/${e?.id}`}
                className={index == 0 || index == 1 ? 'colm1' :'colm2'}
                key={e?.id}
                image={`${process.env.NEXT_PUBLIC_BASE_URL}${e?.image?.path}`}
                Isgrey={true}
                text={index == 0||index == 1 ?  e?.content: false}
                category={e?.section}
                title={e?.title}
                date={e?.publishStartTime}
                view={e?.views}
            />
      ))}
        <Pagination pagination={ news?.pagination} />
    </Container>
    </>
  )
})
