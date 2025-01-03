import { EyeFilledIcon, EyeSlashFilledIcon, SwiperRightIcons } from '@/components/icons';
import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { mutationFn } from '@/utils';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@/lib/hooks';
import { setToken } from '@/lib/features/index';
import Cookies from 'js-cookie';
interface iPops {
  steComp: any;
  setEmail:any
}
type FormData = {
  email: string;
  password: string;
};
export default function AuthForm({ steComp, setEmail }: iPops) {
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [loading, setloading] = useState(false)
  const { register,reset, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    setloading(true)
    mutationFn({
        url: '/auth/login',
        method: "POST",
        data: data
      })
      .then((res: any) => {
        toast.success('Login has been seccefully');
        setEmail(data?.email)
        steComp(9)
        reset()
        dispatch(setToken(res?.data?.token));
        res?.data?.token &&  Cookies.set('tokenAcadamySite',res?.data?.token) 
        
      })
      .catch((error: any) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => setloading(false) )
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex items-center mb-[54px]'>
           <div onClick={()=>steComp(6)} className='cursor-pointer'>
            <SwiperRightIcons/>
           </div>
        <p className='pb-1 text-[24px] font-semibold leading-[32px] mx-auto'>Авторизация</p>
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
     <Input
        className='mb-4 text-left'
        type={isVisible ? 'text' : 'password'}
        label='Пароль'
        placeholder="password"
        errorMessage={(errors?.password?.message as string)||""}
        isInvalid={Boolean(errors?.password?.message)}
        key="outside"
        endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
        }
        labelPlacement={'outside'}
        {...register('password',
          {
            required: 'password is required',
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            }
          }
        )}
      />
      <div className='flex items-right'>
      <p className='text-end text-[13px] inline-block ml-auto font-normol underline leading-[26px]  cursor-pointer' onClick={()=>steComp(10)}>Забыли пароль?</p>
      </div>
  <Button  className='w-full bg-[#2962FF] text-white  rounded-lg' size='md' type={'submit'}>
    Войти
  </Button>
  <p className='text-[16px] font-normal mt-[25px] leading-[26px] text-[#6E6E6E]'>У вас нет аккаунта? <span onClick={()=>steComp(1)} className='text-[#2962FF] cursor-pointer'>Регистрация</span></p>
</form>
  )
}
