"use client"
import { Button, Input } from '@nextui-org/react'
import {Select, SelectItem} from "@nextui-org/select";
import React from 'react'
// imagecon
export default function ContactUsForm() {
  return (
    <form style={{"backgroundImage":`url('/imagecon.png')`}} className='mb-[60px] bg-auto bg-no-repeat bg-center py-[40px] px-[64px] bg-black rounded-xl text-white'>
      <h4 className='font-inter text-[32px] font-semibold leading-[38.73px]  mb-[24px]'>Связаться с нами</h4>
      <div className='flex flex-wrap justify-end items-center gap-[20px]'>
       <Input size="sm"  variant='bordered'  className='colm1' color="default" type="text" label="Ф.И.О." />
       <Select 
       size="sm"
        label="Противодействие легализации преступных доходов ..." 
        className="colm1"
        variant='bordered' 
      >
          <SelectItem  key={1}>
            item 1
          </SelectItem>
          <SelectItem key={2}>
            item 2
          </SelectItem>
      </Select>
       <Input size="sm" variant='bordered'  className='colm1' type="text" label="Номер телефона*" />
       <Input size="sm" variant='bordered'  className='colm1' type="text" label="Тема" />
       <Input size="sm" variant='bordered'  className='colm1' type="email" label="Почта" />
       <Input size="sm" variant='bordered'  className='colm1' type="text" label="Описание" />
       <Button size="lg" className='colm1'>
       Отправить
       </Button>
      </div>
    </form>
  )
}
