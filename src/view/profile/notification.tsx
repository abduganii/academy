'use client'
import { Tooltip } from '@nextui-org/react'
import React from 'react'

export default function NotificationPage() {
  return (
    <div className='flex gap-5'>
        <div className='w-full'>
            
            <Tooltip
                offset={-100}
                placement='top-end'
                content={
                    <div className="p-[24px] w-full max-w-[350px]">
                        <p className='text-[#28A745] text-[14px] leading-[21px] font-semibold'>Новые уведомления</p>
                        <h4 className='text-[20px] leading-[26px] font-bold mt-[8px] mb-[4px]'>Lorem ipsum dolor sit amet consectetur.</h4>
                        <p className='text-[12px] text-[#84919A] font-normal '>12.12.2024</p>
                        <p className='text-[14px] leading-[21px] font-medium mt-4 '>Lorem ipsum dolor sit amet consectetur. Nec blandit sit mauris nisi massa bibendum sed interdum facilisi. Donec sodales nisl morbi tellus ac quam eleifend augue.</p>
                    </div> 
                }
                >
                <div className={`${true ?"bg-[#F6FAFB] border-l-[8px] border-[#87A6C0]":""} cursor-pointer w-full py-[15px] mb-[18px] pl-[25px] pr-[18px] rounded-lg`}>
                            <div className='flex gap-[5px] justify-between '>
                                <h3 className='text-[14px] leading-[17px] font-semibold'>Название уведомления</h3>
                                {true? <p className='py-[3px] px-[9px] bg-[#E73B3633] text-[#F20A03] text-[12px] leading-[14px] rounded-lg'>new</p>:""}
                            </div>
                            <div className='flex gap-[5px] items-start justify-between mt-[9px]'>
                                <p className='text-[12px] w-full max-w-[250px] leading-[14px] font-normal  overflow-hidden text-[#84919A]  line-clamp-2'>Lorem ipsum dolor sit amet consectetur. Elementum sed imperdiet nisl nulla tem lor sit amet consectetur. Elementum sed imperdiet nisl </p>
                            <div className='text-end'>
                                    <p className="text-[12px] text-[#84919A] font-normal  text-left flex items-center " > 
                                            {/* {dayjs(date).format('YYYY.MM.DD')} */}
                                            12.12.2024
                                        </p>
                                        <p className="text-[12px] text-[#84919A]  font-normal text-left flex items-center justify-end " > 13:44</p>
                            </div>
                            </div>
                        </div>
                </Tooltip>
            <div className={`${false ?"bg-[#F6FAFB] border-l-[8px] border-[#87A6C0]":""} cursor-pointer w-full py-[15px] pl-[25px] pr-[18px] rounded-lg`}>
                <div className='flex gap-[5px] justify-between '>
                    <h3 className='text-[14px] leading-[17px] font-semibold'>Название уведомления</h3>
                    {false? <p className='py-[3px] px-[9px] bg-[#E73B3633] text-[#F20A03] text-[12px] leading-[14px] rounded-lg'>new</p>:""}
                </div>
                <div className='flex gap-[5px] items-start justify-between mt-[9px]'>
                    <p className='text-[12px] text-[#84919A] w-full max-w-[250px] leading-[14px] font-normal  overflow-hidden text- line-clamp-2'>Lorem ipsum dolor sit amet consectetur. Elementum sed imperdiet nisl nulla tem lor sit amet consectetur. Elementum sed imperdiet nisl </p>
                   <div className='text-end'>
                        <p className="text-[12px] text-[#84919A] font-normal  text-left flex items-center " > 
                                {/* {dayjs(date).format('YYYY.MM.DD')} */}
                                12.12.2024
                            </p>
                            <p className="text-[12px]  text-[#84919A] font-normal text-left flex items-center justify-end " > 13:44</p>
                   </div>
                </div>
            </div>
        </div>
        <div className='w-full max-w-[315px] pb-[12px]'>
        <h3 className='mb-[12px] text-[18px] leading-[22px] font-normal'>Название уведомления</h3>
        <p className='mb-[11px] text-[13px] leading-[16px] text-[#84919A]'>12.12.2024, 13:44</p>
        <p className='text-[13px] leading-[28px] font-normal'>Lorem ipsum dolor sit amet consectetur. Pellentesque quis ultricies interdum leo nisl. Nulla hendrerit diam vitae malesuada sed dis. Imperdiet sed suspendisse sit faucibus nisl orci. Maecenas a ac vestibulum id ut velit dictum tellus. Vel feugiat aenean urna morbi nulla est aliquet. Bibendum pretium senectus molestie ipsum. Malesuada in augue non proin.</p>
        </div>
    </div>
  )
}
