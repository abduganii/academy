"use client"
import ProfileUpload from '@/components/upload/profile'
import { useAppSelector } from '@/lib/hooks';
import { mutationFn } from '@/utils';
import { Button, Input } from '@nextui-org/react'
import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

type FormData = {
  firstName: string;
  lastName: string;
  middleName: string;
  password: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  organization: string;
  avatar: string;
};
export default function SettingForm() {
      const { userMe } = useAppSelector((store: any) => store.userMe);
    const { register,setValue, handleSubmit,watch, formState: { errors } } = useForm<FormData>();
    const watchedFiles = watch();
    const queryClient = useQueryClient();
    useEffect(()=>{
      setValue('firstName',userMe?.data?.firstName)
      setValue('lastName',userMe?.data?.lastName)
      setValue('middleName',userMe?.data?.middleName)
      setValue('phone',userMe?.data?.phone)
      setValue('email',userMe?.data?.email)
      setValue('country',userMe?.data?.country)
      setValue('city',userMe?.data?.city)
      setValue('organization',userMe?.data?.organization)
      setValue('avatar',userMe?.avatar?.id)
    },[userMe])
    const onSubmit = async (data: FormData) => {
      const  returnResult: any = JSON.parse(JSON.stringify(data));
      !returnResult["password"] && delete returnResult["password"];
      mutationFn({
          url: 'auth/meUpdate',
          method: "POST",
          data: returnResult
        })
        .then((res: any) => {
          toast.success('seccefully updated');
          queryClient.invalidateQueries(['user/me'])
          // reset()
          
        })
        .catch((error: any) => {
          toast.error(error?.response?.data?.message);
        })
        // .finally(() => setloading(false) )
    };
    
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-[#F5F5F5] rounded-lg gap-4 flex flex-wrap p-[32px]'>
        <ProfileUpload/>
        <Input 
          className='colm1' 
          variant='bordered' 
          size={'sm'} 
          type="text" 
          label="firstName" 
          value={watchedFiles?.firstName || ""}
          errorMessage={(errors?.firstName?.message as string) || ""}
          isInvalid={Boolean(errors?.firstName?.message)}
          {...register("firstName", {required: "firstName is required",})} 
          />
           <Input 
          className='colm1' 
          variant='bordered' 
          size={'sm'} 
          type="text" 
          label="lastName" 
          value={watchedFiles?.lastName || ""}
          errorMessage={(errors?.lastName?.message as string) || ""}
          isInvalid={Boolean(errors?.lastName?.message)}
          {...register("lastName", {required: "lastName is required",})} 
          />
          <Input 
          className='colm1' 
          variant='bordered' 
          size={'sm'} 
          type="text" 
          label="middleName" 
          value={watchedFiles?.middleName || ""}
          errorMessage={(errors?.middleName?.message as string) || ""}
          isInvalid={Boolean(errors?.middleName?.message)}
          {...register("middleName", {required: "middleName is required",})} 
          />
        <Input 
          className='colm1' 
          variant='bordered' 
          size={'sm'} 
          type="text" 
          label="Номер телефона" 
          value={watchedFiles?.phone || ""}
          errorMessage={(errors?.phone?.message as string) || ""}
          isInvalid={Boolean(errors?.phone?.message)}
          {...register("phone", {
            required: "phone is required",
            // pattern: {
            //   value: /^\+998 \d{9}$/,
            //   message: "Invalid phone number format (+998999999999)",
            // },
          })} 
          />
        <Input
          className='colm1'
          variant='bordered'
          size={'sm'} 
          type="email" 
          label="Email"  
          value={watchedFiles?.email || ""}
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
          <Input 
          className='colm1' 
          variant='bordered' 
          size={'sm'} 
          type="text" 
          label="password" 
          value={watchedFiles?.password || ""}
          errorMessage={(errors?.password?.message as string) || ""}
          isInvalid={Boolean(errors?.password?.message)}
          {...register("password")} 
          />
          <Input 
          className='colm1' 
          variant='bordered' 
          size={'sm'} 
          type="text" 
          label="country" 
          value={watchedFiles?.country || ""}
          errorMessage={(errors?.country?.message as string) || ""}
          isInvalid={Boolean(errors?.country?.message)}
          {...register("country")} 
          />
        <Input 
            className='colm1' 
            variant='bordered' 
            size={'sm'} 
            type="text" 
            label="city" 
            value={watchedFiles?.city || ""}
            errorMessage={(errors?.city?.message as string) || ""}
            isInvalid={Boolean(errors?.city?.message)}
            {...register("city")} 
            />
          <Input 
            variant='bordered' 
            size={'sm'} 
            type="text" 
            label="organization" 
            value={watchedFiles?.organization || ""}
            errorMessage={(errors?.organization?.message as string) || ""}
            isInvalid={Boolean(errors?.organization?.message)}
            {...register("organization")} 
            />
      {/* <div className='flex w-full items-center justify-between mb-[6px]'>
        <p className='font-semibold text-[15px] leading-[20px]'>Настройки уведомлений</p>
        <Switch color="primary" />
      </div> */}
      <Button size='lg' className='colm1 rounded-lg bg-[#DDE2E4]'>Отменить</Button>
      <Button type='submit' size='lg' className='colm1 rounded-lg bg-[#2962FF] text-white'>Обновить</Button>
    </form>
  )
}
