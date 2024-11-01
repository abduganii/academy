import { PlayIcons } from '@/components/icons'
import React from 'react'

export default function Lkd() {
  return (
    <div className='relative text-white justify-between rounded-lg border-r-5 h-[372px] flex items-center  mb-[68px] px-[140px]' style={{"backgroundImage":`url('/r5.png')`}}>
        <div className='w-full max-w-[298px]  z-20'>
            <h3 className='font-inter  text-[40px] font-bold leading-[48.41px] text-left'>ЛКД</h3>
            <p className='w-full font-inter text-[14px] font-normal leading-[24px] text-left"'>Лаборатория Комплаенса и Добропорядочности</p>
        </div>

          <div className='w-full max-w-[380px] flex items-center justify-center border aspect-[1.6/1] z-20 border-white rounded-lg'>
          <PlayIcons/>

          </div>
          <div className='w-full h-[372px] bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div>
    </div>
  )
}
