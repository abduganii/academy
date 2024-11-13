'use client'
import Container from '@/components/container'
import { SearchIcons, XIcons } from '@/components/icons'
import { Input } from '@nextui-org/react'
import React, { useState } from 'react'


export default function FAQPage() {
  const [select,setSelect] = useState('all')
  return (
    <>
   <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-center bg-no-repeat'  style={{"backgroundImage":`url('/in.jfif')`}} >
    <Container className='z-20'>
        <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left'>FAQ</h4>
        <Input size='lg'  startContent={
          <SearchIcons color="black" />
        }
         type='search' placeholder='Поиск' className='mt-[16px] w-full max-w-[482px]'/>
    </Container>
    <div className='w-full h-[372px] bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div>
    </div>
    <Container className='mt-[36px] mb-[111px]'>
      
      <div className='w-full'>
           <div className='w-full flex items-center justify-between border-y-2 border-[#CDD6DA40]  py-4'>
            <h3 className='text-[32px] leading-[33px] font-semibold  '>Вопрос</h3>
            <span><XIcons/></span>
           </div>
           <p className='px-[24px] text-[16px] leading-[22px] font-normal text-[#3C3C43D9] py-[16px]'>text</p>
      </div>
          
      <div className='w-full'>
           <div className='w-full flex items-center justify-between border-y-2 border-[#CDD6DA40]  py-4'>
            <h3 className='text-[32px] leading-[33px] font-semibold  '>Вопрос</h3>
            <span className='rotate-45'><XIcons/></span>
           </div>
      </div>
    </Container>
    </>
  )
}
