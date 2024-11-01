"use client"
import Image from 'next/image'
import React from 'react'
import { EyeIcons } from '../icons'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/routing'

interface iNewsCard {
    Isgrey: boolean,
    image: string,
    category:string,
    title:string,
    date:string,
    link:string,
    text?:string |boolean,
    view:string | number,
    className?:string
}
export default function NewsCard({
    Isgrey,
        image,
        category,
        title,
        text,
        date,
        link,
        className,
        view,
        }:iNewsCard) {
        const locale = useLocale()
  return (
    <Link href={link} locale={locale}  className={`${className && className} ${Isgrey ? "bg-[#F5F5F5] rounded-lg":""} group`}>
                <div className='relative w-full aspect-[1.6/1]'>
                        <p className='absolute top-2 left-2 px-4 py-[7px] rounded-3xl bg-[#FFFFFFCC]' >{category}</p>
                    <Image className=' w-full aspect-[1.6/1] mx-h-[220px] rounded-lg' src={image} width={368} height={220} alt='img' title={title}/>
                </div>
                <div className='px-3 py-4'>
                    <h3 className='font-inter text-[18px] font-semibold leading-[26px]  line-clamp-2 mb-2 group-hover:text-[#13399A]'>{title}</h3>
                    {text && <p className='text-sm font-normal leading-6 line-clamp-2 '>{text}</p>}
                    <div className='flex items-center gap-4  mt-2'>
                    <p className="text-sm font-normal leading-6 text-left flex items-center " > 
                        {/* {dayjs(date).format('YYYY.MM.DD')} */}
                        {date}
                    </p>
                    <p className="text-sm font-normal leading-6 text-left flex items-center gap-[2px]" > 
                        <EyeIcons/>  {view}
                    </p>
                    </div>
                </div>
    </Link>
  )
}
