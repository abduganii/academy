import Container from '@/components/container'
import { PlayIcons } from '@/components/icons'
import ContactUsForm from '@/section/contact-us'
import NewsSection from '@/section/news-section'
import ResourcesSection from '@/section/resources-section'
import React from 'react'

interface iProps {
  title: string,
  text: string,
}

export default function AnticorrosivePage({title,text}:iProps) {
  return (
    <>
      <div className='relative bg-gray-400 text-white   pt-[76px] mb-[60px]' style={{"backgroundImage":`url('/r5.png')`}}>
        <Container className='flex items-center justify-between py-[76px] z-20'>
        <div className='w-full max-w-[498px] z-20'>
            <h3 className='font-inter  text-[40px] font-bold leading-[48.41px] text-left'>{title}</h3>
            <p className='w-full font-inter text-[14px] font-normal leading-[24px] text-left"'>{text}</p>
        </div>
          <div className='w-full max-w-[380px] flex items-center justify-center border aspect-[1.6/1] border-white rounded-lg z-20'>
          <PlayIcons/>
          </div>
        </Container>
        <div className='w-full h-full bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div>
    </div>

    <Container >
      <NewsSection Isgrey={true}/>
      <ResourcesSection/>
      <ContactUsForm/>
    </Container>
    </>
  )
}
