"use client"
import {  EyeFilledIcon, EyeSlashFilledIcon, SwiperRightIcons } from '@/components/icons';
import { Button, Input } from '@nextui-org/react'
import React from 'react'
interface iPops {
    steComp : any
    withCode? :boolean
}
export default function ForgetFrom({
    steComp,
    withCode,
}:iPops) {
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div >
        <div className='flex items-start mb-[54px]'>
           <div onClick={()=>steComp(7)} className='cursor-pointer'>
            <SwiperRightIcons/>
           </div>
           <div className='mx-auto'>
                <p className='pb-1 text-[24px] font-semibold leading-[32px] '>Забыли пароль</p>
            </div>
        </div>
        <Input className='mb-[46px]'  label='E-mail' placeholder='E-mail' key="outside" labelPlacement={'outside'}/>
        {withCode && <>
            <Input className='mb-[31px] text-left' type='password'  label='код' placeholder="Введите код"
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
        </>
        }
        <Button className='w-full bg-[#2962FF] text-white  rounded-lg' size='md' onPress={()=>steComp(withCode?  9 : 11)}>
        Войти
        </Button>
</div>
  )
}
