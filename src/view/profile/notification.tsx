'use client'
import { hoc } from '@/utils'
import { Tooltip } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { useNotificationsProps } from './props'
import dayjs from 'dayjs'

export const NotificationPage:any = hoc(useNotificationsProps, props => {
    const {notifications} = props
    const [select,setSelect] = useState<any>(notifications?.[0] || {})
    useEffect(()=>{
        setSelect(notifications?.[0] )
    },[notifications])
  return (
    <div className='flex gap-5'>
        <div className='w-full'>
          {  notifications?.length && notifications?.map((e:any)=>(
            <Tooltip
                key={e?.id}
                offset={-100}
                placement='top-end'
                content={
                    <div className="p-[24px] w-full max-w-[350px]">
                        <p className='text-[#28A745] text-[14px] leading-[21px] font-semibold'>{e?.title}</p>
                        <h4 className='text-[20px] leading-[26px] font-bold mt-[8px] mb-[4px]'>{e?.title}</h4>
                        <p className='text-[12px] text-[#84919A] font-normal '> {dayjs(e?.created_at).format('YYYY.MM.DD')}</p>
                        <p className='text-[14px] leading-[21px] font-medium mt-4 '>{e?.description}</p>
                    </div> 
                }
                >
                <div  onClick={()=>setSelect(e)} className={`${!e?.read ?"bg-[#F6FAFB] border-l-[8px] border-[#87A6C0]":""} cursor-pointer w-full py-[15px] mb-[18px] pl-[25px] pr-[18px] rounded-lg`}>
                    <div className='flex gap-[5px] justify-between '>
                        <h3 className='text-[14px] leading-[17px] font-semibold'>{e?.title}</h3>
                        {!e?.read? <p className='py-[3px] px-[9px] bg-[#E73B3633] text-[#F20A03] text-[12px] leading-[14px] rounded-lg'>new</p>:""}
                    </div>
                    <div className='flex gap-[5px] items-start justify-between mt-[9px]'>
                        <p className='text-[12px] w-full max-w-[250px] leading-[14px] font-normal  overflow-hidden text-[#84919A]  line-clamp-2'>{e?.description}</p>
                    <div className='text-end'>
                        <p className="text-[12px] text-[#84919A] font-normal  text-left flex items-center " > 
                            {dayjs(e?.created_at).format('YYYY.MM.DD')}
                        </p>
                        <p className="text-[12px] text-[#84919A]  font-normal text-left flex items-center justify-end " >{dayjs(select?.created_at).format('hh.mm')}</p>
                    </div>
                    </div>
                </div>
            </Tooltip>
            ))}  
            
        </div>
        <div className='w-full max-w-[315px] pb-[12px]'>
            <h3 className='mb-[12px] text-[18px] leading-[22px] font-normal'>{select?.title}</h3>
            <p className='mb-[11px] text-[13px] leading-[16px] text-[#84919A]'>{dayjs(select?.created_at).format('YYYY.MM.DD')}  {dayjs(select?.created_at).format('hh.mm')}</p>
            <p className='text-[13px] leading-[28px] font-normal'>{select?.description}</p>
        </div>
    </div>
  )
})
