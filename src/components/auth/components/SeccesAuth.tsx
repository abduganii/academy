import { DoneIcon } from '@/components/icons'
import { Button } from '@nextui-org/react'
import React from 'react'

export default function SeccesAuth({onClose,text}:any) {
  return (
    <div  className='text-center'>  
        <DoneIcon className="m-auto"/>
      <p className='mb-[25px] mt-[9px] text-[22px] font-semibold leading-[32px]'>{text}</p>
      <Button className='w-full bg-[#2962FF] text-white  rounded-lg' size='md' onPress={onClose}>
      Продолжить
      </Button>
</div>
  )
}
