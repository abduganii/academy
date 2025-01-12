'use client'
import Container from '@/components/container'
import { PlayBtnIcons } from '@/components/icons'
import TextParag from '@/components/text'
import { Button } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function AboutUsPage() {
    const t = useTranslations()
  return (
    <div >
        <div className='w-full pt-[132px] pb-[47px]  bg-gradient-to-l from-[#2244BF] to-[#102059]'>
            <Container className='flex gap-5 justify-between'>
                <div className='w-full max-w-[651px]'>
                    <TextParag type='title' font={40} line={48} className='font-semibold text-white'>{t('enforcement')} </TextParag>
                    <TextParag font={24} line={29} className='font-normal text-white mt-[25px] mb-[31px]' >
                    Lorem ipsum dolor sit amet consectetur. Est dolor nunc convallis lectus. Risus enim accumsan velit felis nunc quis non. Eget quisque augue eu duis suscipit. Imperdiet cras egestas dapibus sociis neque. Felis commodo tellus interdum tellus mauris cras.
                    </TextParag>
                    <Button size="lg"  endContent={<PlayBtnIcons/>} className='bg-white  rounded-lg p-[17px] text-[#343434] text-[24px] leading-[29px] font-semibold'>{t('watch-vidoe')}</Button>
                </div>
                <Image 
                    alt='disj'
                    src={'/logaImage.png'}
                    width={310}
                    height={405}
                />
            </Container>
        </div>
        <Container className='my-9'>
            <TextParag type='title' line={44} font={36} className='text-[#171717] mb-[30px] font-semibold'>{t('about-center')} </TextParag>
            <TextParag line={22} font={18} className='font-medium text-[#393939]'>{t('about-center-text')}
            </TextParag>
            <TextParag type='title' line={44} font={36} className='text-[#171717] mt-9 mb-[32px] font-semibold'>{t('task')}</TextParag>

            <ul className='list-disc gap-2 text-[#2F2CD4] '>
               {
                [1,2,3,4,5]?.map((e:any)=>(
                    <li key={e} className='text-[#2F2CD4] pb-[46px] border-b border-spacing-1 flex gap-[32px]'>
                    <TextParag line={24} font={20} className='mb-2 font-semibold'>0{e}</TextParag>
                    <div >
                        <TextParag line={24} font={20} className='mb-2 font-semibold'>{t(`aboutTest${e}`)}</TextParag>
                        <TextParag line={24} font={18} className='font-semibold text-[#444444]'>{t(`aboutTestText${e}`)} </TextParag>
                    </div>
                </li>
                ))
               }
            </ul>
        </Container>
        <div className='w-full py-[80px]  bg-gradient-to-l from-[#2244BF] to-[#102059]'>
            <Container >
            <TextParag type='title' line={44} font={36} className='text-white mb-[32px] font-semibold'>{t('goals')}</TextParag>
            <ul className='list-disc gap-2 rounded-xl bg-white text-[#2F2CD4] '>
               { [1,2,3,4,5]?.map((e:any)=>( <li className='text-[#2F2CD4] p-[30px] mb-[32px]  flex gap-[32px]'>
                    <TextParag line={24} font={20} className='mb-2 font-semibold'>0{e}</TextParag>
                    <div >
                        <TextParag line={24} font={20} className='mb-2 font-semibold'>{t(`aboutGoal${e}`)}</TextParag>
                        <TextParag line={24} font={18} className='font-semibold text-[#444444]'>{t(`aboutGoalText${e}`)} </TextParag>
                    </div>
                </li>
                ))}
            </ul>

            <TextParag type='title' line={24} font={24} className='text-white mb-[30px] text-center font-semibold'>{t('partnors')}</TextParag>
            <div className='flex justify-center gap-10 mb-[60px]'>
            <div className='w-full flex items-center shadow-lg bg-white rounded-lg justify-center max-w-[226px] h-[110px]'>
                <Image className='object-contain' src={'/logo-4.png'} width={162} height={45}  alt='img'/>
            </div>
            <div className='w-full flex items-center shadow-lg bg-white rounded-lg justify-center max-w-[226px] h-[110px]'>
                <Image className='object-contain' src={'/logo-4.png'} width={162} height={45}  alt='img'/>
            </div>
            <div className='w-full flex items-center shadow-lg bg-white rounded-lg justify-center max-w-[226px] h-[110px]'>
                <Image className='object-contain' src={'/logo-4.png'} width={162} height={45}  alt='img'/>
            </div>
            </div>
            </Container>
        </div>
    </div>
  )
}
