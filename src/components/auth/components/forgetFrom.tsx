"use client"
import {  EyeFilledIcon, EyeSlashFilledIcon, SwiperRightIcons } from '@/components/icons';
import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { mutationFn } from '@/utils';
import toast from 'react-hot-toast';
interface iPops {
    steComp : any
    withCode? :boolean
}

export default function ForgetFrom({
    steComp,
    withCode,
}:iPops) {
   
    const [loading, setloading] = useState(false)
    const { register,reset, handleSubmit, formState: { errors } } = useForm<any>();
    const onSubmit = async (data: any) => {
        setloading(true)
        let costomData = data
        costomData.code = Number(data?.code)
      mutationFn({
          url:withCode ? '/auth/recover/verify': '/auth/recover',
          method: "POST",
          data: costomData
        })
        .then((res:any) => {
            if (withCode) {    
                steComp(7)
                toast.success('Login has been seccefully');
                reset()
            } else {
                steComp(11) 
                toast.success(res?.data?.message);
            }
        
        })
        .catch((error: any) => {
          toast.error(error?.response?.data?.message);
        })
        .finally(() => setloading(false) )
    };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex items-start mb-[54px]'>
           <div onClick={()=>steComp(7)} className='cursor-pointer'>
            <SwiperRightIcons/>
           </div>
           <div className='mx-auto'>
                <p className='pb-1 text-[24px] font-semibold leading-[32px] '>Забыли пароль</p>
            </div>
        </div>
        <Input
            type="email"
            className='mb-[46px] text-left'
            label='E-mail'
            placeholder='E-mail'
            key="outside"
            errorMessage={(errors?.email?.message as string) || ""}
            isInvalid={Boolean(errors?.email?.message)}
            labelPlacement={'outside'}
            {...register("email", {
            required: "Email is required",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
            },
            })}
        />
        {withCode && <>
            <Input
                className='mb-4 text-left'
                type={"number"}
                label='Пароль'
                placeholder="code"
                errorMessage={(errors?.code?.message as string)||""}
                isInvalid={Boolean(errors?.code?.message)}
                key="outside"
                labelPlacement={'outside'}
                {...register('code',
                {
                    required: 'code is required',
                    minLength: {
                    value: 6,
                    message: "code must be at least 6 characters",
                    }
                }
                )}
            />
        </>
        }
          <Button
            
            className='w-full bg-[#2962FF] text-white  rounded-lg'
            size='md'
            type={'submit'}
          >
         Войти
        </Button>
    </form>
  )
}
