'use client'
import Container from '@/components/container'
import { SearchIcons } from '@/components/icons'
import { Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { AlphabetsArray } from './alphabet'
import TextParag from '@/components/text'


export default function GlossaryPage() {
  const [select,setSelect] = useState('all')
  return (
    <>
   <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-center bg-no-repeat'  style={{"backgroundImage":`url('/in.jfif')`}} >
    <Container className='z-20'>
        <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left'>Глоссарий</h4>
        <Input size='lg'  startContent={
          <SearchIcons color="black" />
        }
         type='search' placeholder='Поиск' className='mt-[16px] w-full max-w-[482px]'/>
    </Container>
    <div className='w-full h-[372px] bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div>
    </div>
    <Container className='mt-[36px] mb-[111px]'>
        <div className='flex gap-3 flex-wrap mb-[34px]'>
            <p  onClick={()=>setSelect('all')} className={` ${select == "all" ?'bg-[#09608E] border-[#09608E] text-white' :"border border-[#BDBDBD]"} border cursor-pointer rounded-full py-[8px] px-[25px]`}>All</p>
           {
            AlphabetsArray?.ru?.map(e=>(
              <p  onClick={()=>setSelect(e)}  className={` ${select == e ?'bg-[#09608E] border-[#09608E] text-white' :"border border-[#BDBDBD]"} border rounded-full w-[40px] h-[40px] cursor-pointer flex items-center justify-center`}>{e}</p>
            ))
           }
        </div>
        <div className='mb-[60px]'>
           <h3 className='text-[32px] leading-[33px] font-semibold border-b border-[#C7C6C6] pb-[3px] mb-[34px]'>А</h3>
           <div className='mb-[24px]'>
            <h3 className='text-[32px] leading-[33px] font-semibold'>Аффорданс</h3>
            <TextParag line={24} font={16} className='mt-[12px] font-normal text-[#313131]'>Кнопки с микрокопиями являются примером аффорданса. Это визуальные ключи, которые отражают функционал интерфейса и возможность взаимодействовать с ним. Кнопка добавления товара в корзину без опознавательных знаков не обладает свойством аффорданса и не помогает пользователю понять, что ему следует сделать, чтобы достичь цели.</TextParag>
           </div>
           <div className='mb-[24px]'>
            <h3 className='text-[32px] leading-[33px] font-semibold'>Аффорданс</h3>
           </div>
           <div className='mb-[24px]'>
            <h3 className='text-[32px] leading-[33px] font-semibold'>Аффорданс</h3>
           </div>
        </div>
    </Container>
    </>
  )
}
