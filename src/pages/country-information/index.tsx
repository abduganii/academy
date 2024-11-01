"use client"
import Container from '@/components/container'
import { SearchIcons } from '@/components/icons'
import { Link } from '@/i18n/routing'
import { Input, Table} from '@nextui-org/react'
import { useLocale } from 'next-intl'
import React from 'react'

export default function CountryInformationPage() {
  const locale = useLocale();
  return (
    <>
    <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-center bg-no-repeat'  style={{"backgroundImage":`url('/r2.png')`}} >
    <Container className='z-20'>
        <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left'>Страновая информация</h4>
    </Container>
    <div className='w-full h-[372px] bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div>
    </div>
  
    <Container className='max-w-[956px] p-[32px] bg-[#F5F5F5] rounded-lg mb-[78px]'>
      <Input
            type="email"
            placeholder="Поиск"
            startContent={
              <SearchIcons color={"black"} />
            }
          />
        <div className='mt-[24px] '>
            <Link href={'/country-information/1'} locale={locale} className='flex items-center justify-between text-[16x] leading-[24px] font-semibold mb-[10px]'>
              <p>Страна</p>
              <p>Рейтинг</p>
            </Link> 
            <Link href={'/country-information/1'} locale={locale} className='flex items-center justify-between text-[16x] leading-[24px] font-normal pb-[10px] border-b-1 '>
            <p>Австралия</p>
            <p className='w-[66px] text-center'>1</p>
            </Link> 
            <Link href={'/country-information/1'} locale={locale} className='flex items-center justify-between text-[16x] leading-[24px] font-normal py-[10px] '>
            <p>Австралия</p>
            <p className='w-[66px] text-center'>1</p>
            </Link> 
        </div>
    </Container>
    </>
  )
}
