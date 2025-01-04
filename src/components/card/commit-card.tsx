import { Avatar } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { DoteIcons } from '../icons'
import dayjs from 'dayjs'

interface ICommitCard {
    avatar?:string,
    className?:string,
    name:string,
    date:string,
    text:string,
}

export default function CommitCard({
    avatar,
    name,
    date,
    text,
    className
}:ICommitCard) {
  return (
    <div className={`${className && className} w-full pb-6`}>
        <div className='flex items-center gap-4'>
            {
                avatar ?  <Image
                src={avatar}
                width={40}
                height={40}
                alt='img'
            />:
             <Avatar size='md'  name={name?.[0]}/> 
               
            }
            <p className='text-[16px] font-semibold leading-[26px]  mb-2'>{name}</p>
            <p className='text-[12px] font-normal leading-[16px] text-[#6E7C87] mr-auto mb-2'>{dayjs(date).format('YY.MM.DD')}</p>
            <div >
            <DoteIcons/>
            </div>
        </div>

        <p className='text-[14px] font-normal leading-[24px] mt-3 mb-2 w-full max-w-[538px]'>
            {text}
        </p>
        {/* <div className='flex items-start mt-2'>
            <GoodLikeIcons/>
            <p className='text-[#84919A] text-[14px] font-normal leading-[24px] '>{like}</p>  
        </div> */}
    </div>
  )
}
