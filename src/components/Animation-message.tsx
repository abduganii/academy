"use client"
import { useTranslations } from 'next-intl'
import React from 'react'

export default function MassageAnimation() {
  const t = useTranslations()
  return (
    <div data-aos="zoom-in" className='fixed bottom-[200px] z-50 right-[260px]' >
        <div className='text-[15px]  shadow-md font-normal leading-[18px] p-[20px] rounded-xl w-full max-w-[298px] bg-white z-50 cursor-pointer'>
            
            {t('hello')}
            </div>
        <div className="w-0 h-0 ml-auto bottom-0 left-0  -translate-y-7
            border-t-[23px] border-t-transparent
            border-r-[35px] border-r-white
            border-b-[23px] border-b-transparent
            rounded-2xl
            "
            >
    </div>
    </div>
  )
}

