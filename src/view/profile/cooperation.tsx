"use client"
import { EmailIcons, TelIcons } from '@/components/icons'
import FileUpload from '@/components/upload/file'
import { Button, Input, Select, SelectItem, Textarea } from '@nextui-org/react'
import React from 'react'

export default function CooperationPage() {
  return (
    <div className='w-full flex gap-5'>  
    <div className='w-full max-w-[616px] bg-[#F5F5F5] rounded-lg gap-4 flex flex-wrap justify-end p-[32px]'>
    <h3 className='text-[28px] leading-[34px] mb-[16px] font-semibold w-full'>Заполнить заявку</h3>
    <Select
        label="Тип контента" 
        size={'sm'}
         variant='bordered'
      >
        <SelectItem key={1}>
            items
          </SelectItem>
      </Select>
      <Textarea
            label="Сообщение модератору "
            className="w-full"
            variant='bordered'
             cols={2}
             rows={2}
            />
        <Input className='w-full ' variant='bordered' size={'sm'} type="email" label="Email"  />

        <FileUpload/>
        <Button size='lg' className='colm1 rounded-lg bg-[#DDE2E4]'>Отменить</Button>
        <Button size='lg' className='colm1 rounded-lg bg-[#2962FF] text-white'>Обновить</Button>
    </div>
    <div className='w-full max-w-[244px]'>
        <Button size='lg' className='w-full rounded-lg bg-[#1C43AE] text-white mb-[10px]'>Прейскурант</Button>
        <Button size='lg' className='w-full rounded-lg bg-[#1C43AE] text-white mb-[10px]'>Скачать договор</Button>
        <Button size='lg' className='w-full rounded-lg bg-[#1C43AE] text-white mb-[18px]'>Связаться с бухгалтерией</Button>
        <a href='tel:+998711234545' className='flex mb-[5px] ml-[10px] text-[#1C43AE] items-center gap-[6px] text-[17px] leading-[26px] font-semibold'>
         <TelIcons/> +998(71) 123-45-45
        </a>
        <a href='mail:pochtamail@mail.com'  className='flex text-[#1C43AE] ml-[10px] items-center gap-[6px] text-[17px] leading-[26px] font-semibold'>
         <EmailIcons/> pochtamail@mail.com
        </a>
    </div>
    </div>
  )
}
