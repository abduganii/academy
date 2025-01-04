'use client'
import { DoneIcon } from '@/components/icons'
import { Button } from '@nextui-org/react'
import { useRouter } from '@/i18n/routing';
import React from 'react'

export default function SeccesAuth({onClose,text}:any) {
  const router = useRouter()
  return (
    <div  className='text-center'>  
        <DoneIcon className="m-auto"/>
      <p className='mb-[25px] mt-[9px] text-[22px] font-semibold leading-[32px]'>{text}</p>
      <Button className='w-full bg-[#2962FF] text-white  rounded-lg' size='md' onPress={()=>{
        onClose()
        router.push('/profile/information')
      }
      }>
      Продолжить
      </Button>
</div>
  )
}
