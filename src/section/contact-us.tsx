"use client"
import { useForm } from 'react-hook-form';
import { Button, Input } from '@nextui-org/react'
import {Select, SelectItem} from "@nextui-org/select";
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import { mutationFn } from '@/utils';
import toast from 'react-hot-toast';
// imagecon


type FormData = {
  fullName: string;
  phone: string;
  email: string;
  theme: string;
  message: string;
  section:string;
};

export default function ContactUsForm() {
  const t = useTranslations()
  const [ loading,setloading] = useState(false)
  const { register,reset, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    setloading(true)
    try {
     mutationFn({
     url: '/contact-us-messages',
     method:  "POST",
     data: data}).then(()=>{
      toast.success('Form submitted successfully!');
      reset()
     })
     .catch(()=>{
          toast.error('Failed to submit form');
       })
       .finally(()=>{setloading(false)})
  } catch (error:any) {
    setloading(false)
    toast.error('Error sending date:', error)
  }
};
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{"backgroundImage":`url('/imagecon.png')`}} className='mb-[60px] bg-auto bg-no-repeat bg-center py-[40px] px-[64px] bg-black rounded-xl text-white'>
      <h4 className='font-inter text-[32px] font-semibold leading-[38.73px]  mb-[24px]'>{t('contact-us')}</h4>
      <div className='flex flex-wrap justify-end items-center gap-[20px]'>
       <Input 
        size="sm" 
        className='colm1'
        variant='bordered'  
        classNames={{inputWrapper:"group-data-[focus=true]:border-[2px] group-data-[focus=true]:border-white" }} 
        type="text" 
        label="Ф.И.О." 
        {...register('fullName', { required: 'fullName is required' })}
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
        {...register('section', { required: 'section is required' })}
      >
          <SelectItem  key={'anti_corruption'}>
          anti_corruption
          </SelectItem>
          <SelectItem key={'anti_terrorism'}>
          anti_terrorism
          </SelectItem>
      </Select>
       <Input 
        size="sm" 
        className='colm1'
        variant='bordered'  
        classNames={{ inputWrapper:"group-data-[focus=true]:border-[2px] group-data-[focus=true]:border-white" }} 
        type="text" 
        label="Номер телефона*" 
        {...register('phone', { required: 'phoneNumber is required' })}
        />
        <Input 
        size="sm" 
        className='colm1'
        variant='bordered'  
        classNames={{inputWrapper:"group-data-[focus=true]:border-[2px] group-data-[focus=true]:border-white" }} 
        type="text" 
        label="Тема" 
        {...register('theme', { required: 'theme is required' })}
      />
      <Input 
        size="sm" 
        className='colm1'
        variant='bordered'  
        classNames={{inputWrapper:"group-data-[focus=true]:border-[2px] group-data-[focus=true]:border-white" }} 
        type="email" 
        label="Почта" 
        {...register('email', { required: 'email is required' })}
      />
      <Input 
        size="sm" 
        className='colm1'
        variant='bordered'  
        classNames={{inputWrapper:"group-data-[focus=true]:border-[2px] group-data-[focus=true]:border-white" }} 
        type="text" 
        label="Описание" 
        {...register('message', { required: 'message is required' })}
      />
       <Button type='submit'  size="lg" className='colm1 dark:text-black'>
        {t('send')}
       </Button>
      </div>
    </form>
  )
}
