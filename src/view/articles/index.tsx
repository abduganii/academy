"use client"
import ArticlesCardPage from '@/components/card/acticles-card-in-page'
import Container from '@/components/container'
import { LeftIcons } from '@/components/icons'
import { Link } from '@/i18n/routing'
import { hoc } from '@/utils'
import { Select, SelectItem } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import React from 'react'
import { usePageProps } from './props'

export const ArticlesPage:any = hoc(usePageProps, props => {
  const {articles} = props
  const t = useTranslations()
  return (
 
    <>
    <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-[#2C2C2C] bg-center bg-no-repeat bg-cover' 
    //  style={{"backgroundImage":`url('/r6.jfif')`}}
     >
    <Container className='z-20'>
        <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left mb-4'>{t('articles')}</h4>
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

    <Container className='mt-[60px] mb-[80px]'>
 
       {
          articles?.length && articles?.map((e:any)=>(
              <ArticlesCardPage
              className="mb-4"
              link={`/articles/${e?.id}`}
              key={e?.id}
              title={e?.title}
              name={e?.text}
              date={e?.created_at}
          />
          ))
          }
    </Container>
    </>
  )
})
