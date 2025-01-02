import { EyeFilledIcon, EyeSlashFilledIcon, SwiperRightIcons } from '@/components/icons';
import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { mutationFn } from '@/utils';
import toast from 'react-hot-toast';

interface iPops {
  steComp: any;
  setEmail:any
}
type FormData = {
  email: string;
  password: string;
};
export default function RegisterForm({ steComp,setEmail }: iPops) {
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
  const [loading, setloading] = useState(false)
  console.log(loading)
    const { register,reset, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
      setloading(true)
      mutationFn({
          url: '/auth/register',
          method: "POST",
          data: data
        })
        .then((res:any) => {
          toast.success(res?.data?.message);
          setEmail(data?.email)
          steComp(3)
          reset()
        })
        .catch((error: any) => {
          toast.error(error?.response?.data?.message);
        })
        .finally(() => setloading(false) )
      };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex items-center mb-[54px]'>
        <div onClick={()=>steComp(1)} className='cursor-pointer'>
        <SwiperRightIcons/>
        </div>
        <p className='pb-1 text-[24px] font-semibold leading-[32px] mx-auto'>Регистрация</p>
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
        errorMessage={(errors?.password?.message as string) ||""}
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
      <Button  className='w-full bg-[#2962FF] text-white  rounded-lg' size='md' type={"submit"}>
      Зарегистрироваться
      </Button>
      <p className='text-[16px] font-normal mt-[25px] leading-[26px] text-[#6E6E6E]'>У вас уже есть аккаунт? <span onClick={()=>steComp(6)} className='text-[#2962FF] cursor-pointer'>Авторизоваться</span></p>
    </form>
  )
}
