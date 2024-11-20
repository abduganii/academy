'use client'
import SwiperWithScrollIcons from '@/components/swiper'
import Image from 'next/image'
import React from 'react'
import { Button, Modal, ModalBody, ModalContent, useDisclosure } from '@nextui-org/react';
import NewsCard from '@/components/card/news-card';
import { Link } from '@/i18n/routing';

export default function NewsSection({Isgrey}:any) {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
    <SwiperWithScrollIcons title={"news"} slidesPerView={3} className="flex w-full items-center  text-[16px] font-semibold gap-6 mt-8">
       {
        [1,2,3,4,5]?.map(e=>(
            <NewsCard
            link={`/news/${e}`}
            key={e}
            image='/news.png'
            Isgrey={Isgrey}
            category='Общество'
            title='Объявляется прием на обучение на стажера-исследователя'
            date='16.07.2024'
            view={567}
      />
        ))
        }
       
    
    </SwiperWithScrollIcons>
        <div className='text-center mb-[60px] mt-[32px]'>
            <Button  onPress={onOpen} className='bg-black dark:bg-white dark:text-black text-white inline-block'>
                Подробнее
            </Button>
        </div>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className="bg-[#fff] max-w-[1233px] py-[25px] px-[32px]">
                {(onClose) => (
              <ModalBody  className='p-0 '>
                <h3>News</h3>
                <div className='flex gap-[24px]  text-white'>
                    <Link  href={'/news'}    className='group rounded-lg  w-full flex  bg-[#1451fa80] gap-8 p-[24px]'>
                        <div className='w-full flex flex-col justify-between max-w-[328px]'>
                            <h3 className=' mb-auto group-hover:text-[#1451fa80]  w-full font-inter text-[24px] font-bold leading-[29.05px] text-left'>Антикоррупционная деятельность</h3>
                            <Button size='sm' className='bg-[#FFFFFF66] w-full max-w-[101px]'>goo</Button>
                        </div>
                        <Image className='aspect-[1/1] my-[36px]' src={'/Frame2087326695.png'} width={180} height={180} alt='dsd' title='ds'/>
                    </Link>
                    <Link  href={'/news'}   className='group rounded-lg  w-full flex  bg-[#1451fa80] gap-8 p-[24px]'>
                        <div className='w-full flex flex-col justify-between  max-w-[328px]'>
                            <h4 className='mb-auto w-full font-inter text-[24px]  group-hover:text-[#1451fa80] font-bold leading-[29.05px] text-left'>Противодействие легализации преступных доходов и финансированию терроризма</h4>
                            <Button size='sm' className='bg-[#FFFFFF66] w-full max-w-[101px]'>goo</Button>
                        </div>
                        <Image className='aspect-[1/1] my-[36px]' src={'/image1608.png'} width={180} height={180} alt='dsd' title='ds'/>
                    </Link>
                </div>
              </ModalBody>
                )}
          </ModalContent>
        </Modal>
    </>
  )
}
