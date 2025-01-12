'use client'
import { hoc } from '@/utils'
import React from 'react'
import { useCooperationProps } from './props'
import Pagination from '@/components/pagination'
import { useTranslations } from 'next-intl'
import dayjs from 'dayjs'

export const MyCooperationPage:any = hoc(useCooperationProps, props => {
    const {mycooperation} = props
    console.log(mycooperation)
    const t = useTranslations()
  return (
    <div>
          {mycooperation?.data && mycooperation?.data?.map((e:any,index:number)=>( 
                <div className='bg-[#F5F5F5] p-4 mb-4 rounded-[8px]'>
                    <div className='mb-[2px]'>
                    <span className='text-[#5B6871]'>{t('message')}</span> :
                    <p className='bg-white p-3'>{e?.message}</p>
                    </div> 
                    <div className='mb-[2px]'>
                    <span className='text-[#5B6871]'>{t('type-content')}</span> : {t(e?.type)}
                    </div> 
                    <div className='mb-[2px]'>
                    <span className='text-[#5B6871]'>{t('email')}</span> : {e?.email}
                    </div> 
                    <div className='mb-[2px]'>
                    <span className='text-[#5B6871]'>{t('status')}</span> : {t(e?.status)}
                    </div>  
                    <div className='mb-[2px]'>
                    <span className='text-[#5B6871]'>{t('created_at')}</span> : {dayjs(e?.created_at).format('YYYY.MM.DD')}
                    </div>  
                    
                </div>  
            ))}
        <Pagination pagination={ mycooperation?.pagination} />
    </div>
  )
})
