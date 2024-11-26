'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import React, { useState } from 'react';
import { SwiperLeftIcons, SwiperRightIcons } from '@/components/icons';
import { useTranslations } from 'next-intl';

export default function VirtualAcademy() {
    const [swipers, setSwiper] = useState<any>()
    const t = useTranslations()
  return (
    <div className='w-1/2'>
        <h4 className='font-inter mb-[24px] text-[32px] font-semibold leading-[38.73px] text-left'>{t('virtual-academy')}</h4>
        <div className=' w-full h-[374px] relative'>
            <div className='flex items-center absolute top-[25px] right-[25px] z-30 gap-4'>
                <button className='w-12 h-12 rounded-[40px] flex items-center justify-center p-3 bg-[#F5F5F5]' onClick={()=>swipers.slidePrev()}><SwiperRightIcons/></button>   
                <button className='w-12 h-12 rounded-[40px] flex items-center justify-center p-3 bg-[#F5F5F5]' onClick={()=>swipers.slideNext()}><SwiperLeftIcons/></button>   
            </div>
            <Swiper
                slidesPerView={1 }
                className={`flex   h-[374px] w-full`}
                onSwiper={(e:any) => setSwiper(e)}
            >

                {
                    [1,2,3,4,5].map(e=>(
                        <SwiperSlide key={e} className='w-full  items-end  bg-center bg-no-repeat p-[25px] '  style={{"backgroundImage":`url('/verual.jfif')`, "display":"flex"}}>
                            <h3 className='text-[14px] text-white  font-medium leading-[24px]'>Объявляется прием на обучение на стажера-исследователя, в базовую докторантуру.</h3>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}
