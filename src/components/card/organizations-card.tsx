'use client'
import Image from 'next/image';
import React from 'react'
import { DownIcons, LeftIcons } from '../icons';
import TextParag from '../text';
import { useTranslations } from 'next-intl';

interface card {
    communication?:string;
    dicr:string;
    isOpen?:boolean;
    title:string;
    text?:string;
    link?:string;
    className?:string;
    onClick?:any,
    image: string,
}
export default function OrganizationsCard(
    {
        className,
        communication,
        dicr,
        isOpen,
        title,
        text,
        image,
        link,
        onClick,
    }:card
) {
    const t = useTranslations()
  return (
    <div onClick={onClick ? onClick:()=>{} } className={`${className && className} cursor-pointer    w-full px-4 py-3 rounded-lg bg-[#F5F5F5] dark:bg-[#27272A] dark:text-[#FFFFFF] `}>
        <div className='flex items-center gap-3'>
            <Image 
                src={image}
                alt='img'
                className='rounded-full object-cover'
                width={40}
                height={40}
                title='logo'
            />
            <div>   
                <TextParag type='title' className='font-inter  font-semibold  text-left'>{t(title)}</TextParag>
                {text &&<TextParag font={16} line={26} className='font-inter font-normal  text-left'>{t(text)}</TextParag>}
            </div>
           
        { onClick &&<span    className={`${isOpen ? '':"rotate-90"} overflow-hidden transition-all duration-500 ease-in-out ml-auto`}>
        <LeftIcons/>
        </span>}
        </div>
       <div
       className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-screen  mt-[25px]' : onClick ?'max-h-0': ""
      }`}>
           {communication && <TextParag className='mb-[12px] flex items-center gap-[9px] font-inter font-normal  text-left'>{t('communication')} 
                <span className="bg-[#000000] inline-block min-w-[6px] min-h-[6px] max-h-[6px] rounded-full"></span>
                {t(communication)}
            </TextParag>}
            <TextParag className='mb-[12px]  font-inter font-normal  text-left'>
                {t(dicr)}
            </TextParag>
           {link && <a className='font-inter text-[14px] font-normal leading-[24px] text-left decoration-1 underline' target="_blank" href={link}>{link}</a>}
        </div>
    </div>
  )
}
