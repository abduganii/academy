"use client"
import Container from '@/components/container'
import TextParag from '@/components/text'
import { hoc } from '@/utils'
import { Button } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import React from 'react'
import { usePageIdProps } from './props'
import dayjs from 'dayjs'

export const ArticlesIdPage:any = hoc(usePageIdProps, props => {
      const {oneArticles} = props
  const t = useTranslations()
  return (
    <Container className='py-[120px] md:py-[160px]'>
    <div className="w-full cursor-pointer flex items-end  justify-between bg-[#F5F5F5] dark:bg-[#27272A] dark:text-[#FFFFFF] p-10 rounded-lg mb-12">
     <div>
      <TextParag font={24} line={29} className="font-semibold mb-3">
        {oneArticles?.title}
      </TextParag>
      <div className="flex items-center gap-2">
        <TextParag  className="font-normal text-left flex items-center gap-2" >
            {dayjs(oneArticles?.published_at).format('YYYY.MM.DD')}
            <span className="bg-black w-[6px] h-[6px] rounded-full"></span> 
            </TextParag>
        <TextParag  className="font-medium leading-[24px]">
        {oneArticles?.author?.naame}
        </TextParag>
      </div>
     <Button className='w-full bg-[#323232] text-white max-w-[220px] rounded-lg mt-4' size='md'>{t('read')}</Button>
     </div>
    {/* <SocketIcons/> */}
  </div>
 
  {false? 
        <iframe
        src={'url'}
        style={{ width: '100%', height: '100vh' }}
    />
    :
   <TextParag line={26} font={16} className="text-[#48535B] dark:text-white dark:opacity-70 w-full max-w-[760px] m-auto font-normal ">
    {oneArticles?.text}  
  </TextParag>
  }
</Container>
  )
})
