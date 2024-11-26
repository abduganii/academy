"use client"
import { PlayIcons } from '@/components/icons'
import TextParag from '@/components/text'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function Lkd() {
  const t = useTranslations()
  return (
    <div className='relative text-white justify-between rounded-lg border-r-5 h-[372px] flex items-center  mb-[68px] px-[140px]' style={{"backgroundImage":`url('/r5.png')`}}>
        <div className='w-full max-w-[298px]  z-20'>
            <h3 className='font-inter  text-[40px] font-bold leading-[48.41px] text-left'>{t('lkd')} </h3>
            <TextParag  className={`w-full font-inter  font-normal text-left`}>{t('laboratory')} </TextParag>
        </div>

          <div className='w-full max-w-[380px] flex items-center justify-center border aspect-[1.6/1] z-20 border-white rounded-lg'>
          <PlayIcons/>
          </div>
          <div className='w-full h-[372px] bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div>
    </div>
  )
}
