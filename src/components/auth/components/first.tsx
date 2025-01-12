'use client'
import { Button } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useState } from 'react'
interface iPops {
    steComp : any
}
export default function FirstAuth({
    steComp}:iPops) {
        const [type,settype] = useState<number>(2)
        const t = useTranslations()
  return (
    <div>
        <p className='pb-1 text-[24px] font-semibold leading-[32px]'>{t('registration')}</p>
        <p className='text-[14px] font-bold leading-[24px] text-[#6A6A6A]'>{t('chooseRegistration')}</p>
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
        {t('register')}
        </Button>
        <p className='text-[16px] font-normal mt-[25px] leading-[26px] text-[#6E6E6E]'>{t('yesAccount')} <span onClick={()=>steComp(6)} className='text-[#2962FF] cursor-pointer'>{t('authorization')}</span></p>
    </div>
  )
}
