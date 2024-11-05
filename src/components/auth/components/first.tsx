'use client'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState } from 'react'
interface iPops {
    steComp : any
}
export default function FirstAuth({
    steComp}:iPops) {
        const [type,settype] = useState<number>(2)
  return (
    <div>
        <p className='pb-1 text-[24px] font-semibold leading-[32px]'>Регистрация</p>
        <p className='text-[14px] font-bold leading-[24px] text-[#6A6A6A]'>Выберите способ регистрации</p>
            <div className='flex my-[19px] gap-5'>
            <div onClick={()=>settype(4)} className={`${type == 4 ? 'border-[#2962FF]':'' } w-full  h-[140px] border-separate border rounded-lg shadow flex items-center justify-center cursor-pointer`}>
                    <Image
                        src={'/oneId.png'}
                        width={113}
                        height={113}
                        alt='img'
                        title='oneId'
                    />
                </div>
                <div onClick={()=>settype(2)}  className={`${type == 2? 'border-[#2962FF]':'' } w-full  h-[140px] border-separate border rounded-lg shadow flex items-center justify-center cursor-pointer`}>
                    <Image
                        src={'/mail.png'}
                        width={83}
                        height={40}
                        alt='img'
                        title='mail'
                    />
                </div>
            </div>
        <Button className='w-full bg-[#2962FF] text-white  rounded-lg' size='md' onPress={()=>steComp(type)}>
        Зарегистрироваться
        </Button>
        <p className='text-[16px] font-normal mt-[25px] leading-[26px] text-[#6E6E6E]'>У вас уже есть аккаунт? <span onClick={()=>steComp(6)} className='text-[#2962FF] cursor-pointer'>Авторизоваться</span></p>
    </div>
  )
}
