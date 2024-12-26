'use client'
import Container from '@/components/container'
import TextParag from '@/components/text'
import Image from 'next/image'
import React from 'react'
import {  usePageIdProps } from './props'
import { hoc } from '@/utils'
import dayjs from 'dayjs'

  export const NewsIdPage:any = hoc(usePageIdProps, props => {
    const {oneNews} = props
  return (
    <Container className="max-w-[950px] pt-[120px] md:pt-[160px] pb-[100px]">
      {oneNews?.image &&<Image
        className="w-full object-cover rounded-lg aspect-[1.8/1] mb-12"
        alt="img"
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${oneNews?.image?.path}`}
        title={"title"} 
        width={950}
        height={520}
      />}
    <div className="w-full m-auto md:max-w-[760px]">

      <TextParag className="font-normal text-left flex items-center text-[#5B6871] dark:text-white mb-4">
        {dayjs(oneNews?.publishStartTime).format('YYYY.MM.DD')}
      </TextParag>
      <TextParag type='title' font={24} line={29} className="mb-3 font-semibold" >
        {oneNews?.title}
      </TextParag>
      <TextParag className={` font-normal  text-left flex items-center text-[#5B6871] dark:text-white mb-4`}>
      {oneNews?.content}
      </TextParag>
     
    </div>


  </Container>
  )
}
  )