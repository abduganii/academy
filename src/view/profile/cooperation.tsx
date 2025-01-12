"use client"
import { EmailIcons, TelIcons } from '@/components/icons'
import FileUpload from '@/components/upload/file'
import { hoc } from '@/utils'
import { useAppSelector } from '@/lib/hooks';
import { mutationFn } from '@/utils';
import { Button, Input, Select, SelectItem, Textarea } from '@nextui-org/react'
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { usePageProps } from './props'
import { useTranslations } from 'next-intl';

type FormData = {
  type:string;
  message: string;
  email: string;
  file:number
};


export const CooperationPage:any = hoc(usePageProps, props => {
    const {MyMaterialTypes} = props
    const t = useTranslations()
    const { register,reset,setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
      mutationFn({
          url: '/cooperations',
          method: "POST",
          data: data
        })
        .then((res: any) => {
          reset()
          toast.success('seccefully sent');
          
        })
        .catch((error: any) => {
          toast.error(error?.response?.data?.message);
        })
        // .finally(() => setloading(false) )
    };
  return (
    <div className='w-full flex gap-5'>  
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[616px] bg-[#F5F5F5] rounded-lg gap-4 flex flex-wrap justify-end p-[32px]'>
      <h3 className='text-[28px] leading-[34px] mb-[16px] font-semibold w-full'>{t('fill-application')}</h3>
      <Select
        label={t('type-content')}
        size={'sm'}
        variant='bordered'
        errorMessage={(errors?.type?.message as string) || ""}
        isInvalid={Boolean(errors?.type?.message)}
        {...register("type", {
          required: "type is required",
        })}
      >
      {
        MyMaterialTypes?.length && MyMaterialTypes?.map((e:any)=>(
        <SelectItem key={e?.id} value={e?.id}>
            {e?.name}
          </SelectItem>
        ))
      }
      </Select>
      <Textarea
        label={t('message-moderator')}
        className="w-full"
        variant='bordered'
          cols={2}
          rows={2}
          errorMessage={(errors?.message?.message as string) || ""}
          isInvalid={Boolean(errors?.message?.message)}
          {...register("message", {
            required: "text is required",
          })}
        />
      <Input 
        className='w-full' 
        variant='bordered' 
        size={'sm'} 
        type="email" 
        label={t('email')} 
        errorMessage={(errors?.email?.message as string) || ""}
        isInvalid={Boolean(errors?.email?.message)}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        })}
        />
      <FileUpload
      errors={errors?.file?.message}
      onUpload={(e:any)=>setValue("file",e?.data?.id)}
      
      />
      <Button size='lg' className='colm1 rounded-lg bg-[#DDE2E4]'>{t('cancel')}</Button>
      <Button type='submit' size='lg' className='colm1 rounded-lg bg-[#2962FF] text-white'>{t('reflesh')}</Button>
    </form>
    <div className='w-full max-w-[244px]'>
        <Button size='lg' className='w-full rounded-lg bg-[#1C43AE] text-white mb-[10px]'>{t('price-list')}</Button>
        <Button size='lg' className='w-full rounded-lg bg-[#1C43AE] text-white mb-[10px]'>{t('download-contract')}</Button>
        <Button size='lg' className='w-full rounded-lg bg-[#1C43AE] text-white mb-[18px]'>{t('contact-accounting')}</Button>
        <a href='tel:+998711234545' className='flex mb-[5px] ml-[10px] text-[#1C43AE] items-center gap-[6px] text-[17px] leading-[26px] font-semibold'>
         <TelIcons/> +998(71) 123-45-45
        </a>
        <a href='mail:pochtamail@mail.com'  className='flex text-[#1C43AE] ml-[10px] items-center gap-[6px] text-[17px] leading-[26px] font-semibold'>
         <EmailIcons/> pochtamail@mail.com
        </a>
    </div>
    </div>
  )
})