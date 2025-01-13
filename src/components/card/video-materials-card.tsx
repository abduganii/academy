import { Link } from '@/i18n/routing';
import Image from 'next/image';
import React from 'react'
import TextParag from '../text';

interface iVideoMaterialsCard {
    image: string;
    avatar: string;
    title: string;
    name: string;
    link: string;
    className?: string
}
export default function VideoMaterialsCard({
    image,
    avatar,
    title,
    name,
    link,
    className,
    }:iVideoMaterialsCard) {
  return (
    <Link href={link}  className={`${className && className} group w-full`}>
            <Image
                className='aspect-[1.8/1] w-full mb-[10px]'
                src={image}
                width={290}
                height={162}
                alt='img'
                title={title}
            />
            <div className='flex  items-start gap-3'>
             {avatar ? <Image
                  className='rounded-full w-full max-w-[30px] h-[30px] aspect-[1/1]'
                  src={avatar}
                  width={30}
                  height={30}
                  alt='img'
                  title={'avatar'}
                />:''}
                <div>
                 <TextParag type='title' font={13} line={18} className='font-bold mb-[5px] line-clamp-2 group-hover:text-[#13399A]'> {title}</TextParag>
                 <TextParag font={12} line={14} className='flex items-center gap-1 text-[#727272] font-normal '>
                  {name} <span></span>
                 </TextParag>
                </div>
            </div>
    </Link>
  )
}
