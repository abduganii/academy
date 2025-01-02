'use client'
import { EyeFilledIcon, EyeSlashFilledIcon, SwiperRightIcons } from '@/components/icons';
import { Button, Input } from '@nextui-org/react'
import { useForm } from 'react-hook-form';
import { mutationFn } from '@/utils';
import toast from 'react-hot-toast';
import React, { useState } from 'react'
import { useAppDispatch } from '@/lib/hooks';
import { setToken } from '@/lib/features/index';
import Cookies from 'js-cookie';
interface iPops {
    steComp: any
    email:any
}
export default function RegisterCode({ steComp, email }: iPops) {
  const dispatch = useAppDispatch();
  const [loading, setloading] = useState(false)
  console.log(loading)
    const { register,reset, handleSubmit, formState: { errors } } = useForm<any>();
    const onSubmit = async (data: any) => {
      setloading(true)
      mutationFn({
          url: '/auth/verify',
          method: "POST",
          data: {email:email,code: Number(data?.code)}
        })
        .then((res: any) => {
          toast.success('Registration has been seccefully');
          steComp(5)
          reset()
          dispatch(setToken(res?.data?.token));
          res?.data?.token && Cookies.set('tokenAcadamySite',res?.data?.token) 
        })
        .catch((error: any) => {
          toast.error(error?.response?.data?.message);
        })
        .finally(() => setloading(false) )
      };
      
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex items-start mb-[54px]'>
            <div onClick={()=>steComp(2)} className='cursor-pointer'>
            <SwiperRightIcons/>
            </div>
            <div className='mx-auto'>
                <p className='pb-1 text-[24px] font-semibold leading-[32px] '>Введите код</p>
                <p  className='text-[14px] font-normal leading-[24px] text-[#6A6A6A]'>На вашу почту был выслан код подтверждения, введите его</p>
            </div>
        </div>
        <Input
            className='mb-[31px] text-left'
            type={'number'}
            label='код' 
            placeholder="Введите код"
            key="outside" 
              labelPlacement={'outside'}
              errorMessage={(errors?.password?.message as string)||""}
              isInvalid={Boolean(errors?.password?.message)}
            {...register('code',
            {
            required: 'code is required',
            minLength: {
                value: 6,
                message: "code must be at least 8 characters",
            }
            }
            )}
            />
        <Button type={"submit"}  className='w-full bg-[#2962FF] text-white  rounded-lg' size='md' >
        Зарегистрироваться
        </Button>
    </form>
  )
}
