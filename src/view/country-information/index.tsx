"use client"
import Container from '@/components/container'
import { SearchIcons } from '@/components/icons'
import MultiSeriesMap from '@/components/MultiSeriesMap'
import { Link } from '@/i18n/routing'
import { hoc } from '@/utils'
import { Input} from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import React from 'react'
import { usePageProps } from './props'
  

export const CountryInformationPage:any = hoc(usePageProps, props => {
  const { maps } = props
  const t = useTranslations()
  return (
    <>
    <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-center bg-no-repeat'  style={{"backgroundImage":`url('/r2.png')`}} >
    <Container className='z-20'>
        <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left'>{t('country-information')}</h4>
    </Container>
    </div>
      {/* <MultiSeriesMap data={maps?.data} /> */}
    <Container className='max-w-[956px] mt-[60px] p-[32px] bg-[#F5F5F5] dark:bg-[#27272A] dark:text-[#FFFFFF] rounded-lg mb-[78px]'>
      <Input
            type="email"
            placeholder="Поиск"
            startContent={
              <SearchIcons color={"black"} />
            }
          />
        <div className='mt-[24px] '>
            <Link href={'/country-information/1'} className='flex items-center justify-between text-[16x] leading-[24px] font-semibold mb-[10px]'>
              <p>{t('country')}</p>
              <p>{t('rate')}</p>
            </Link> 
            
          {maps?.data && maps?.data?.map((e: any) => (
                <Link key={e?.id} href={`/country-information/${e?.id}`} className='flex items-center justify-between text-[16x] leading-[24px] font-normal py-[10px] '>
                  <p>{e?.name}</p>
                <p className='w-[66px] text-center'>{e?.rating}</p>
                </Link> 
              ))
            }
           
        </div>
    </Container>
    </>
  )
})
