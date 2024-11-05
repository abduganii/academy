import { EyeFilledIcon, EyeSlashFilledIcon, SwiperRightIcons } from '@/components/icons';
import { Button, Input } from '@nextui-org/react'
import React from 'react'
interface iPops {
    steComp : any
}
export default function AuthForm({
    steComp}:iPops) {
        const [isVisible, setIsVisible] = React.useState(false);
        const toggleVisibility = () => setIsVisible(!isVisible);
      
  return (
    <div >
        <div className='flex items-center mb-[54px]'>
           <div onClick={()=>steComp(6)} className='cursor-pointer'>
            <SwiperRightIcons/>
           </div>
        <p className='pb-1 text-[24px] font-semibold leading-[32px] mx-auto'>Авторизация</p>
        </div>
    <Input className='mb-[46px]'  label='E-mail' placeholder='E-mail' key="outside"   labelPlacement={'outside'}/>
    <Input className='mb-4 text-left' type='password'  label='Пароль' placeholder="password"
     errorMessage="*Не меньше 8 символов" 
    isInvalid={true}
     key="outside
    " endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
  labelPlacement={'outside'}/>
  <p className='text-end text-[13px] font-normol underline leading-[26px]  cursor-pointer' onClick={()=>steComp(10)}>Забыли пароль?</p>
    <Button className='w-full bg-[#2962FF] text-white  rounded-lg' size='md' onPress={()=>steComp(9)}>
    Войти
    </Button>
    <p className='text-[16px] font-normal mt-[25px] leading-[26px] text-[#6E6E6E]'>У вас нет аккаунта? <span onClick={()=>steComp(1)} className='text-[#2962FF] cursor-pointer'>Регистрация</span></p>
</div>
  )
}
