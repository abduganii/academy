'use client'
import { Avatar, Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { DoteIcons } from '../icons'
import dayjs from 'dayjs'
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";
import { useAppSelector } from '@/lib/hooks'
import { useQueryClient } from '@tanstack/react-query'
import { mutationFn } from '@/utils'
import toast from 'react-hot-toast'
interface ICommitCard {
    avatar?:string,
    className?:string,
    name:string,
    date:string,
    text:string,
    onUpdate:any,
    id:string|number,
    userId:string|number,
}

export default function CommitCard({
    avatar,
    name,
    date,
    userId,
    text,
    className,
    onUpdate,
    id
}:ICommitCard) {
    const [isOpen, setIsOpen] = React.useState(false);
     const { userMe } = useAppSelector((store: any) => store.userMe);
     const queryClient:any = useQueryClient();
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
          {userMe?.data?.id == userId?
            <Popover  isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)} placement="bottom-end">
                <PopoverTrigger>
               <Button className='p-3 max-w-[25px]' size='sm'> <DoteIcons/>  </Button>     
                </PopoverTrigger>
                <PopoverContent>
                    <div className="rounded-lg p-[1px]">
                            <p onClick={()=>{
                                onUpdate()
                                setIsOpen(false)
                            }} className='text-[16px] cursor-pointer leading-6 p-4 w-full  text-[rgb(37,44,50)]'>Редактировать</p>
                            <p 
                            onClick={()=>{
                                mutationFn({
                                    url: `/comments/${id}`,
                                    method: "DELETE",
                                    })
                                    .then(()=>{
                                     queryClient.invalidateQueries(['comments'])
                                     setIsOpen(false)
                                     toast.success('Deleted!');
                                    })
                            }} 
                            className='text-[16px] cursor-pointer leading-6 p-4 w-full  text-[#E73B36] '>Удалить</p>
                    </div>
                </PopoverContent>
            </Popover>:''}
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
