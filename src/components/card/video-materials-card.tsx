import { Link } from '@/i18n/routing';
import Image from 'next/image';
import React from 'react'

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
              <Image
                  className='rounded-full w-full max-w-[30px] h-[30px] aspect-square'
                  src={avatar}
                  width={30}
                  height={30}
                  alt='img'
                  title={'avatar'}
                />
                <div>
                 <h3 className='text-[13px] font-bold leading-[18px] mb-[5px] line-clamp-2 group-hover:text-[#13399A]'> {title}</h3>
                 <p className='flex items-center gap-1 text-[#727272] text-[12px] font-normal leading-[14.06px]'>
                  {name} <span></span>
                 </p>
                </div>
            </div>
    </Link>
  )
}
