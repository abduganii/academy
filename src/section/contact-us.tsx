"use client"
import { Button, Input } from '@nextui-org/react'
import {Select, SelectItem} from "@nextui-org/select";
import { useTranslations } from 'next-intl';
import React from 'react'
// imagecon
export default function ContactUsForm() {
  const t = useTranslations()
  return (
    <form style={{"backgroundImage":`url('/imagecon.png')`}} className='mb-[60px] bg-auto bg-no-repeat bg-center py-[40px] px-[64px] bg-black rounded-xl text-white'>
      <h4 className='font-inter text-[32px] font-semibold leading-[38.73px]  mb-[24px]'>{t('contact-us')}</h4>
      <div className='flex flex-wrap justify-end items-center gap-[20px]'>
       <Input 
        size="sm" 
        className='colm1'
        variant='bordered'  
        classNames={{inputWrapper:"group-data-[focus=true]:border-[2px] group-data-[focus=true]:border-white" }} 
        type="text" 
        label="Ф.И.О." 
        />
       <Select 
       size="sm"
       classNames={
        {
          trigger:"bg-transparent border-[2px] border-white",
          value:"group-data-[has-value=true]:text-white",
        }
      }
        label="Противодействие легализации преступных доходов ..." 
        className="colm1"
    
      >
          <SelectItem  key={1}>
            item 1
          </SelectItem>
          <SelectItem key={2}>
            item 2
          </SelectItem>
      </Select>
       <Input 
        size="sm" 
        className='colm1'
        variant='bordered'  
        classNames={{inputWrapper:"group-data-[focus=true]:border-[2px] group-data-[focus=true]:border-white" }} 
        type="text" 
        label="Номер телефона*" 
        />
        <Input 
        size="sm" 
        className='colm1'
        variant='bordered'  
        classNames={{inputWrapper:"group-data-[focus=true]:border-[2px] group-data-[focus=true]:border-white" }} 
        type="text" 
        label="Тема" 
      />
      <Input 
        size="sm" 
        className='colm1'
        variant='bordered'  
        classNames={{inputWrapper:"group-data-[focus=true]:border-[2px] group-data-[focus=true]:border-white" }} 
        type="email" 
        label="Почта" 
      />
      <Input 
        size="sm" 
        className='colm1'
        variant='bordered'  
        classNames={{inputWrapper:"group-data-[focus=true]:border-[2px] group-data-[focus=true]:border-white" }} 
        type="text" 
        label="Описание" 
      />
       <Button  size="lg" className='colm1 dark:text-black'>
        {t('send')}
       </Button>
      </div>
    </form>
  )
}
