"use client"
import CommitCard from '@/components/card/commit-card'
import Container from '@/components/container'
import { MoreDownIcons, SaveIcons, StartIcons } from '@/components/icons'
import { Button } from '@nextui-org/react'
import { Rate, Progress } from 'antd';
import Image from 'next/image'
import React from 'react'

export default function VideoMaterialIdPage() {
  return (
    <Container className='py-[150px]'>

        <div className='w-full flex gap-10 mb-[56px] p-10 bg-[#F5F5F5] rounded-lg'>
            <Image
            className='w-full max-w-[194px] h-[298px] object-cover'
                alt='img'
                width={196}
                height={298}
                src={'/vidoe.png'}
                title='title'
            />
            <div>
                <h3 className='text-[32px] font-semibold leading-[29px] mb-4'>The concise laws of human nature</h3>
                <div className='flex gap-2 mt-4 mb-6'>
                    <p className='py-[2px] px-[12px] bg-[#0000000D] text-[#5B6871] rounded-lg text-[14px] font-normal leading-[24px]'>Business & investing</p>
                </div>
                <div className='flex items-end gap-2 w-full mb-[12px]'>
                <p className='text-[14px] font-normal text-[#5B6871] leading-[24px]'>Язык</p>
                <hr className='w-full inline-block border-0 border-t-2 border-dotted border-gray-500 '/>
                <p className='text-[14px] font-normal leading-[24px] text-[#2D2D2D]'>Русский</p>
            </div>

            </div>
        </div>
        <div className='w-full max-w-[760px] my-[56px]'>
            <h3 className='text-[24px] font-semibold leading-[29px] mb-4'>Описание</h3>
            <p className='text-[14px] font-normal text-[#5B6871] leading-[24px] mb-[32px]'>Существует 6 основных принципов убеждения, которые могут заставить людей автоматически говорить «да». Понимание этих принципов и связанных с ними методов может помочь вам улучшить свое влияние и одновременно защититься от манипуляций других. В этом бесплатном обзоре Influence вы узнаете о 6 принципах убеждения, о том, как они работают и как их можно превратить в оружие влияния против нас.
            Просто существует слишком много внешних стимулов, чтобы наш мозг мог все обработать. Таким образом, мы используем определенные сигналы в качестве ментальных ярлыков, чтобы помочь нам быстро реагировать без необходимости анализировать всю информацию. Например, вспышка острых зубов или лезвия будет означать «опасность», заставляя нас инстинктивно отступить, не задумываясь. С правильными сигналами мы скажем «да» автоматически, без осознанных мыслей 
                <span className='font-semibold underline decoration-solid text-[#2D2D2D] ml-1 cursor-pointer'>Еще</span>
            </p>

            <h3 className='text-[24px] font-semibold leading-[29px] mt-[56px] mb-4'>Отзывы</h3>
            <div className='w-full flex items-start justify-between'>
                <div className='w-full max-w-[124px]'>
                    <h3 className='text-[40px] font-normal leading-[46px] text-[#000000CC]'>4.7</h3>
                    <p className='my-4 text-[15px] font-normal leading-[20px] text-[#0000008F]'>На основании 56 отзывов</p>
                    <Rate className='text-[18px]'  defaultValue={2.5} />
                </div>
                <div className='w-full max-w-[600px]'>
                    <div className="flex items-center gap-2 mb-1">
                      <p className='text-[14px] mt-[1px] font-normal leading-[24px] text-[#2D2D2D]'>1</p>  <Progress percent={30} />
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
            <Button className='w-full my-[24px] bg-[#2962FF1A] text-[#2962FF] max-w-[192px] rounded-lg' size='md'>Оставить отзыв</Button>
            </div>
            <CommitCard
                className="border-b mb-6"
                name='Александр'
                text='Очень качественно сшито, строчка ровная, стильно. Сыну очень понравилось, спасибо)'
                like={'324'}
                date='20 авг, 2024'
            />
             <CommitCard
                className="mb-6"
                name='Александр'
                text='Очень качественно сшито, строчка ровная, стильно. Сыну очень понравилось, спасибо)'
                like={'324'}
                date='20 авг, 2024'
            />
            <div className='flex justify-center'>
            <Button className='w-full bg-[#69696926] text-[#323232] max-w-[205px] rounded-lg' size='md' endContent={<MoreDownIcons/>}>Показать еще</Button>
            </div>
        </div>
        
    </Container>
  )
}
