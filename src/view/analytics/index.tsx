

"use client"
import AnalyticsCard from '@/components/card/analytics-card'
import Container from '@/components/container'
import { hoc } from '@/utils'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { usePageProps } from './props'

  
    export const AnalyticsPage:any = hoc(usePageProps, props => {
      const {analytics}=props
  const [Isopen,setIsopen] = useState<number | boolean>(1)
  const t = useTranslations()
  return (
    <>
    <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-center bg-no-repeat'  style={{"backgroundImage":`url('/r5.png')`}} >
    <Container className='z-20'>
        <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left'> {t('analytics')}</h4>
    </Container>
    <div className='w-full h-[372px] bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div>
    </div>

    <Container className='flex gap-5  justify-center mb-[70px]'>
        {
          analytics?.map((e:any)=>(
            <AnalyticsCard
                key={e?.id}
                Isopen={Isopen== e?.id}
                onClick={()=>setIsopen(state=> state == e?.id ? false: e?.id)}
                className={Isopen == e?.id?  'max-w-[525px]':'max-w-[103px]'}
                image={`${process.env.NEXT_PUBLIC_BASE_URL}${e?.image?.path}`}
                title={e?.title}
                text={e?.description}
            />
          ))
        }
    </Container>
    </>
  )
})
