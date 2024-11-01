import Image from 'next/image'
import React from 'react'

export default function SupportSection() {
  return (
    <>
        <h4 className='font-inter text-[24px] font-normal leading-[24px] text-center mb-[30px]'>Разработан при поддержке:</h4>
        <div className='flex gap-10 mb-[60px]'>
            <div className='w-full flex items-center shadow-lg rounded-lg justify-center max-w-[226px] h-[110px]'>
                <Image className='object-contain' src={'/logo-4.png'} width={162} height={45}  alt='img'/>
            </div>
            <div className='w-full flex items-center shadow-lg rounded-lg justify-center max-w-[226px] h-[110px]'>
                <Image className='object-contain' src={'/logo-4.png'} width={162} height={45}  alt='img'/>
            </div>
            <div className='w-full flex items-center shadow-lg rounded-lg justify-center max-w-[226px] h-[110px]'>
                <Image className='object-contain' src={'/logo-4.png'} width={162} height={45}  alt='img'/>
            </div>
            <div className='w-full flex items-center shadow-lg rounded-lg justify-center max-w-[226px] h-[110px]'>
                <Image className='object-contain' src={'/logo-4.png'} width={162} height={45}  alt='img'/>
            </div>
        </div>
    </>
  )
}
