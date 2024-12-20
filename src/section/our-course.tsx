'use client'
import { StarIcons } from '@/components/icons'
import TextParag from '@/components/text'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

export default function OurCourseSection() {
    const [open,setOpen] = useState<boolean| number | string>(1)
    const t = useTranslations()
  return ( 
    <div className='w-1/2 '>
          <h4 className='font-inter mb-[24px] text-[32px] font-semibold leading-[38.73px] text-left'>{t('our-courses')}</h4>
          <div className='w-full rounded-lg bg-[#242424] p-[24px] h-[374px] '>
            <div className='overflow-y-scroll h-full rounded-lg pr-[10px] myScroll'>
               {
                [1,2,3,4,5,6,7,8].map((e)=>(
                    <div onClick={()=>setOpen(state => state == e ? false : e)} className='py-[23px] cursor-pointer px-[12px] bg-[#FFFFFF] rounded-lg mb-[13px]' key={e}>
                             <div className='flex items-center gap-[12px]'>
                             <StarIcons/>
                        <h3 className='text-[16px] font-semibold leading-[26px]'>Think and Grow Rich Every Day</h3>
                        </div>
                        <TextParag line={26} font={16} className={`${open == e ?' py-[23px] h-auto':'h-0'} overflow-hidden transition-all duration-500 ease-in-out font-normal `}>Небольшое описание при нажатии появляется</TextParag>
                    </div>
                ))
               }
            </div>
          </div>
    </div>
  )
}
