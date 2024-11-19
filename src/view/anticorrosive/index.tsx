"use client"
import Container from '@/components/container'
import { PlayIcons } from '@/components/icons'
import TextParag from '@/components/text'
import ContactUsForm from '@/section/contact-us'
import NewsSection from '@/section/news-section'
import OurCourseSection from '@/section/our-course'
import ResourcesSection from '@/section/resources-section'
import VirtualAcademy from '@/section/virtual-academy'
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
            <TextParag className='w-full font-inter  font-normal  text-left"'>{text}</TextParag>
        </div>
          <div className='w-full max-w-[380px] flex items-center justify-center border aspect-[1.6/1] border-white rounded-lg z-20'>
          <PlayIcons/>
          </div>
        </Container>
        <div className='w-full h-full bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div>
    </div>

    <Container >
      <NewsSection Isgrey={true}/>
      <div className='flex gap-[13px] mb-[68px]'>
      <OurCourseSection/>
      <VirtualAcademy/>
      </div>
      <ResourcesSection/>
      <ContactUsForm/>
    </Container>
    </>
  )
}
