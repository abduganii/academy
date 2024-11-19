import Container from '@/components/container'

import Lkd from '@/section/lkd'
import { Button } from '@nextui-org/react'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NewsPagae() {
  return (
    <Container className='pt-[172px]'>
      <Lkd/>
      <div className='flex gap-[24px] mb-[68px] text-white'>
        <Link  href={'/news/anticor'}    className='group rounded-lg  w-full flex  bg-[#1451fa80] gap-8 p-[24px]'>
            <div className='w-full flex flex-col justify-between max-w-[328px]'>
                <h3 className=' mb-auto group-hover:text-[#1451fa80]  w-full font-inter text-[24px] font-bold leading-[29.05px] text-left'>Антикоррупционная деятельность</h3>
                <Button size='sm' className='bg-[#FFFFFF66] w-full max-w-[101px]'>goo</Button>
            </div>
            <Image className='aspect-[1/1] my-[36px]' src={'/Frame2087326695.png'} width={180} height={180} alt='dsd' title='ds'/>
        </Link>
        <Link  href={'/news/podft'}   className='group rounded-lg  w-full flex  bg-[#1451fa80] gap-8 p-[24px]'>
            <div className='w-full flex flex-col justify-between  max-w-[328px]'>
                <h4 className='mb-auto w-full font-inter text-[24px]  group-hover:text-[#1451fa80] font-bold leading-[29.05px] text-left'>Противодействие легализации преступных доходов и финансированию терроризма</h4>
                <Button size='sm' className='bg-[#FFFFFF66] w-full max-w-[101px]'>goo</Button>
            </div>
            <Image className='aspect-[1/1] my-[36px]' src={'/image1608.png'} width={180} height={180} alt='dsd' title='ds'/>
        </Link>
    </div>
    </Container>
  )
}
