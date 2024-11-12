"use client"
import ProfileUpload from '@/components/upload/profile'
import { Button, Input, Select, SelectItem, Switch } from '@nextui-org/react'
import React from 'react'

export default function SettingForm() {
  return (
    <div className='bg-[#F5F5F5] rounded-lg gap-4 flex flex-wrap p-[32px]'>
        <ProfileUpload/>
        <Input variant='bordered' size={'sm'} type="text" label="ФИО"  />
        <Input className='colm1' variant='bordered' size={'sm'} type="text" label="Номер телефона"  />
        <Input className='colm1' variant='bordered' size={'sm'} type="email" label="Email"  />
        <Select
        label="Select" 
        className="colm1" 
        size={'sm'}
         variant='bordered'
      >
        <SelectItem key={1}>
            items
          </SelectItem>
      </Select>
      <Select
       size={'sm'}
        label="Select" 
        className="colm1" 
         variant='bordered'
      >
        <SelectItem key={1}>
            items
          </SelectItem>
      </Select>
      <Select
       size={'sm'}
        label="Select" 
        className="colm1" 
         variant='bordered'
      >
        <SelectItem key={1}>
            items
          </SelectItem>
      </Select>
      <Select
       size={'sm'}
        label="Select" 
        className="colm1" 
         variant='bordered'
      >
        <SelectItem key={1}>
            items
          </SelectItem>
      </Select>
      <div className='flex w-full items-center justify-between mb-[6px]'>
        <p className='font-semibold text-[15px] leading-[20px]'>Настройки уведомлений</p>
        <Switch color="primary" />
      </div>
      <Button size='lg' className='colm1 rounded-lg bg-[#DDE2E4]'>Отменить</Button>
      <Button size='lg' className='colm1 rounded-lg bg-[#2962FF] text-white'>Обновить</Button>
    </div>
  )
}
