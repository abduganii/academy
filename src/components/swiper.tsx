'use client'
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import React, { useState } from 'react';
import useWindowSize from '@/hooks/useWindowwWidth';
import { SwiperLeftIcons, SwiperRightIcons } from './icons';

export default  function SwiperWithScrollIcons({className, title, children,slidesPerView,slidesPerViewRes}:any) {
    const [swipers, setSwiper] = useState<any>()
    const { width } = useWindowSize();
    return  (
    <>
    <div className='flex items-center justify-between'>
        <h4 className='font-inter text-[32px] font-semibold leading-[38.73px] text-left'>{title}</h4>
        <div className='flex items-center gap-4'>
            <button className='w-12 h-12 rounded-[40px] flex items-center justify-center p-3 bg-[#F5F5F5]' onClick={()=>swipers.slidePrev()}><SwiperRightIcons/></button>   
            <button className='w-12 h-12 rounded-[40px] flex items-center justify-center p-3 bg-[#F5F5F5]' onClick={()=>swipers.slideNext()}><SwiperLeftIcons/></button>   
        </div>
    </div>
        <Swiper
            modules={[ Autoplay]}
            spaceBetween={8}
            slidesPerView={width > 900 ?  slidesPerView : width > 500 ? slidesPerView - 1:slidesPerViewRes|| 1 }
            // breakpoints={{
            //     640: {
            //       width: 640,
            //       slidesPerView: 1,
            //     },
            //     768: {
            //       width: 768,
            //       slidesPerView: slidesPerView - 1,
            //     },
            //     }
            //   }}
            className={`flex relative ${className && className}`}
            onSwiper={(e:any) => setSwiper(e)}
        >
            {React.Children.map(children, (child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
            ))}
        </Swiper>
       
    </>
    );
};