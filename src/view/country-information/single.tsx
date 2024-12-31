"use client"
import OrganizationsCard from '@/components/card/organizations-card'
import Container from '@/components/container'
import TextParag from '@/components/text'
import { hoc } from '@/utils'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useState } from 'react'
import { usePageIdProps } from './props/index'

export const CountryInformationSinglePage:any = hoc(usePageIdProps, props => {
    const { legislations, anti_corruptions, international_cooperations, indexes, national_cooperations } = props
    console.log(legislations,anti_corruptions,international_cooperations,indexes,national_cooperations)
    const [open,setOpen] = useState<boolean | string | number>(false)
    const [open1,setOpen1] = useState<any>(international_cooperations?.[0])
    const t = useTranslations()
  return (
    <>
    <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-center bg-no-repeat'  style={{"backgroundImage":`url('/r2.png')`}} >
    <Container className='z-20'>
        <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left'>{t('country-information')}</h4>
    </Container>
    <div className='w-full h-[372px] bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div>
    </div>
    <Container>
        <TextParag type='title' font={32} line={46} className='font-semibold mb-[16px]'>Основное законодательство</TextParag>
              <ol className='pl-[20px] list-decimal  font-normal mb-[68px]'>
                  {
                      legislations?.length && legislations?.map((e: any) => (
                          
                        <li key={e?.id}>
                              <TextParag font={16} line={26}>{e?.content} (<a className='text-solid underline' target="_blank" href={e?.link}>{ e?.link}</a>)</TextParag>
                        </li>
                      ))
                  }
        </ol>  
        <TextParag type='title' font={32} line={46} className='font-semibold mb-[16px]'>Антикоррупционные органы</TextParag>
        { anti_corruptions?.length && anti_corruptions?.map((e:any)=>( 
        <OrganizationsCard
            className='mb-4'
            key={e?.id}
            image={`${process.env.NEXT_PUBLIC_BASE_URL}${e?.logo?.path}`}
            onClick={()=>setOpen(state=> state == e?.id ? false : e?.id)}
            dicr={e?.text} 
            isOpen={open == e?.id} 
            title={e?.title}
      />
      ))}

    <TextParag type='title' font={32} line={46} className='font-semibold mb-[16px]'>Международное сотрудничество</TextParag>
        <div className='flex gap-5'>
            <div className='w-full'>
            { international_cooperations?.length && international_cooperations?.map((e)=>( 
                    <div 
                    key={e?.id}
                      onClick={()=>setOpen1(state=> state?.id == e?.id ? false : e)}
                     className={`${open1?.id == e?.id ? 'border border-black':' border-[#F5F5F5]'} dark:bg-[#27272A] dark:text-[#FFFFFF]  flex items-center cursor-pointer gap-3 w-full mb-[16px] px-4 py-3 rounded-lg bg-[#F5F5F5]`}>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${e?.logo?.path}`}
                            alt='img'
                            width={40}
                            className='rounded-full object-cover'
                            height={40}
                            title='logo'
                        />
                    <h4 className='font-inter text-[16px] font-semibold leading-[26px] text-left'>{ e?.title}</h4>
                    </div>
                    ))}
            </div>

            <div className='w-full mb-[16px] p-5 rounded-lg bg-[#F5F5F5] dark:bg-[#27272A] dark:text-[#FFFFFF] '>
                      <h4 className='font-inter text-[16px] font-semibold leading-[26px] text-left mb-[16px]'>{ open1?.text}</h4>
            <p className='mb-[12px]  font-inter text-[14px] font-normal leading-[24px] text-left'>
            {open1?.content}
            </p>
            </div>
        </div>

        <h4 className='text-[32px] font-semibold leading-[46px] mt-[50px] mb-[16px]'>Индексы</h4>
        <div className='flex flex-wrap gap-4 mb-[68px]'>
        {indexes?.length && indexes?.map((e)=>( 
            <div className='colm1 p-5 rounded-lg bg-[#F5F5F5] dark:bg-[#27272A] dark:text-[#FFFFFF] '>
                <h4 className='font-inter text-[20px] font-semibold leading-[24px] text-left mb-[12px]'>{ e?.title}</h4>
                <div className='flex'>
                    <div className='w-full'>
                        <p className='font-inter text-[14px] font-normal leading-[24px] text-left'>
                        Итоговая оценка
                        </p>
                        <p className='font-inter text-[16px] font-semibold leading-[26px]'>{ e?.grade}/100</p>
                    </div>
                    <div className='w-full'>
                        <p className='font-inter text-[14px] font-normal leading-[24px] text-left'>
                        Рейтинг
                        </p>
                        <p className='font-inter text-[16px] font-semibold leading-[26px]'>{ e?.rate}/100</p>
                    </div>
                
                </div>
            </div>
              ))}
        </div>

        <h4 className='text-[32px] font-semibold leading-[46px] mb-[16px]'>Сотрудничество с Узбекистаном</h4>
        <ol className='pl-[20px] list-decimal text-[16px] font-normal leading-[26px] mb-[68px]'>
            
            {
                      national_cooperations?.length && national_cooperations?.map((e: any) => (
                        <li key={e?.id}>
                              <TextParag font={16} line={26}>{e?.text}</TextParag>
                        </li>
                      ))
                  }
        </ol> 
    </Container>
    </>
  )
})
