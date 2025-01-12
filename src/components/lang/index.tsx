
'use client'
import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react'
import Image from 'next/image';
import React from 'react'
import { DownIcons } from '../icons'

import ru from "../../../public/lang/ru.png"
import uz from "../../../public/lang/uz.png"
import en from "../../../public/lang/en.png"
import {Link, usePathname} from '@/i18n/routing';
import {  useLocale, useTranslations } from 'next-intl';
import { LangArr } from '../../../musk/data';
import { useQueryClient } from '@tanstack/react-query';


const langFlag:any = {
    ru:ru,
    uz:uz,
    en:en,
}
export default function Lang() {
  const queryClient:any = useQueryClient();
  const t = useTranslations('');
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const locele = useLocale()

  useEffect(()=>{
    queryClient.invalidateQueries()
  },[locele])
  return (
    <>
    <div className="relative"
        >
          <Button 
            onClick={()=>setOpen(!open)} 
            className='bg-[#0000001A] text-white' 
            color="default"
            startContent={<Image src={langFlag?.[locele]} alt='img'
            width={20} 
            height={20}/>
          } 
           endContent={<DownIcons color='white'/>}
           >
             {t('lang')}
          </Button> 
          {
              open ? <ul className='max-w-[108px] absolute top-12  z-40 bg-[#000000] sm:py-3 rounded-xl w-full left-0"'>
                  {
                  LangArr.map((e) => (
                      <Link href={pathname} className='flex font-normal text-base p-2   hover:bg-black' locale={e?.value} key={e.id}>
                          <span className="px-2">
                          <Image src={langFlag?.[e?.value]} alt='img' width={20} height={20}/>
                          </span>
                          {e.label}
                          </Link>
                      ))
                  }
              </ul>:""
          }
      </div>
    </>
  )
}
