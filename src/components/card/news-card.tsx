"use client"
import Image from 'next/image'
import React from 'react'
import { EyeIcons } from '../icons'
import { Link } from '@/i18n/routing'
import TextParag from '../text'
import dayjs from 'dayjs'
interface iNewsCard {
    Isgrey: boolean,
    image: string,
    category?:string,
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
  return (
    <Link href={link}   className={`${className && className} ${Isgrey ? "bg-[#F5F5F5] rounded-lg":""} dark:bg-black group`}>
                <div className='relative w-full aspect-[1.6/1]'>
                        {category &&<p className='absolute top-2 left-2 px-4 py-[7px] dark:text-black rounded-3xl bg-[#FFFFFFCC]' >{category}</p>}
                    <Image className=' w-full aspect-[1.6/1] mx-h-[220px] object-cover rounded-lg' src={image} width={368} height={220} alt='img' title={title}/>
                </div>
                <div className='px-3 py-4'>
                    <TextParag type='title' line={26} font={18} className='font-inter font-semibold line-clamp-2 mb-2 group-hover:text-[#13399A]'>{title}</TextParag>
                    {text && <TextParag className='font-normal  line-clamp-2 '>{text}</TextParag>}
                    <div className='flex items-center gap-4  mt-2'>
                        
                    <TextParag line={24} className=" font-normal text-left flex items-center " > 
                        {dayjs(date).format('YYYY.MM.DD')}
                    </TextParag>
                    <TextParag line={24} className=" font-normal text-left flex items-center  gap-[2px]" > 
                    <EyeIcons/>  {view}
                    </TextParag>
                    </div>
                </div>
    </Link>
  )
}
