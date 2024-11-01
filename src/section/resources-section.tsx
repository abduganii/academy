"use client"
import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl';
import Image from 'next/image'
import React from 'react'
import { ResourcesArr } from '../../musk/data'

export default function ResourcesSection() {
    const locale = useLocale();
  return (
    <>
        <h4 className='font-inter text-[32px] font-semibold leading-[38.73px] mb-6 text-left'>Ресурсы</h4>
        <div className='flex flex-wrap gap-6 mb-[68px]'>
            {
               ResourcesArr?.map((e)=>(
                    <Link href={e?.link} locale={locale} key={e?.id} className='w-full inline-block cursor-pointer relative rounded-lg colm2 aspect-[1.9/1] overflow-hidden'>
                        <Image src={e?.image} alt='img' width={368} height={191} className='w-full aspect-[1.9/1] rounded-lg'/>
                        <div className='w-full aspect-[1.9/1] bg-gradient-to-r from-black/90 to-black/20 absolute top-0 left-0'></div>
                        <h4 className='font-inter text-[20px] font-bold  text-white leading-[24.2px] text-center top-[24px] left-[24px] absolute'>{e?.text}</h4>
                    </Link>
                ))
            }
        </div>
    </>
  )
}
