"use client"
import VideoMaterialsCard from '@/components/card/video-materials-card'
import Container from '@/components/container'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function VideoMaterialPage() {
  const t = useTranslations();
  return (
    <>
    <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-center bg-no-repeat bg-cover'  style={{"backgroundImage":`url('/r6.jfif')`}} >
    <Container className='z-20'>
        <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left'>{t('video-materials')}</h4>
    </Container>
    <div className='w-full h-[372px] bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div>
    </div>

    <Container className='flex flex-wrap gap-3 mb-[70px] py-[48px] bg-[#F9F9F9] dark:bg-black'>
     { [1,2,3,4,5,].map((e)=>( 
       <VideoMaterialsCard
         key={e}
              link={`/video-materials/${e}`}
            className='colm4'
                image='/vidoe.png'
                avatar='/avatar.jfif'
                title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                name='Name profile'
            />
      ))}
    </Container>
    </>
  )
}
