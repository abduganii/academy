"use client"
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import React from 'react'

export default function HomeCard() {
  return (
    <div className='flex gap-[24px] mb-[68px] text-white'>
        <Link  href={'/anticorrosive'}   className='group rounded-lg  w-full flex items-start bg-[#1451fa80] gap-8 p-[24px]'>
            <div className='w-full  max-w-[328px]'>
                <h3 className='mb-2 group-hover:text-[#1451fa80]  w-full font-inter text-[24px] font-bold leading-[29.05px] text-left'>Антикоррупционная деятельность</h3>
                <p className='w-full font-inter text-[14px] font-normal leading-[24px] text-left"'>Объявляется прием на обучение на стажера-исследователя, в базовую докторантуру.</p>
            </div>
            <Image className='aspect-[1/1] my-[46px]' src={'/Frame2087326695.png'} width={180} height={180} alt='dsd' title='ds'/>
        </Link>
        <Link  href={'/financing'}   className='group rounded-lg  w-full flex items-start bg-[#1451fa80] gap-8 p-[24px]'>
            <div className='w-full  max-w-[328px]'>
                <h4 className='mb-2 w-full font-inter text-[24px]  group-hover:text-[#1451fa80] font-bold leading-[29.05px] text-left'>Противодействие легализации преступных доходов и финансированию терроризма</h4>
                <p className='w-full font-inter text-[14px] font-normal leading-[24px] text-left"'>Объявляется прием на обучение на стажера-исследователя, в базовую докторантуру.</p>
            </div>
            <Image className='aspect-[1/1] my-[46px]' src={'/image1608.png'} width={180} height={180} alt='dsd' title='ds'/>
        </Link>
    </div>
  )
}
