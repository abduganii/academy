import Image from 'next/image';
import React from 'react'
import { DownIcons, LeftIcons } from '../icons';

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
  return (
    <div className={`${className && className}  w-full px-4 py-3 rounded-lg bg-[#F5F5F5]`}>
        <div className='flex items-center gap-3'>
            <Image 
                src={image}
                alt='img'
                width={40}
                height={40}
                title='logo'
            />
            <div>   
                <h4 className='font-inter text-[16px] font-semibold leading-[26px] text-left'>{title}</h4>
                {text &&<p className='font-inter text-[16px] font-normal leading-[26px] text-left'>{text}</p>}
            </div>
           
        { onClick &&<span  onClick={onClick}  className={`${isOpen ? '':"rotate-90"} cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ml-auto`}>
        <LeftIcons/>
        </span>}
        </div>
       <div
       className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-screen  mt-[25px]' : onClick ?'max-h-0': ""
      }`}>
           {communication && <p className='mb-[12px] flex items-center gap-[9px] font-inter text-[14px] font-normal leading-[24px] text-left'>Коммуникация 
                <span className="bg-[#000000] inline-block min-w-[6px] min-h-[6px] max-h-[6px] rounded-full"></span>
                {communication}
            </p>}
            <p className='mb-[12px]  font-inter text-[14px] font-normal leading-[24px] text-left'>
                {dicr}
            </p>
           {link && <a className='font-inter text-[14px] font-normal leading-[24px] text-left decoration-1 underline' target="_blank" href={link}>{link}</a>}
        </div>
    </div>
  )
}
