import Container from '@/components/container'
import { PlayBtnIcons } from '@/components/icons'
import TextParag from '@/components/text'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export default function AboutUsPage() {
  return (
    <div >
        <div className='w-full pt-[132px] pb-[47px]  bg-gradient-to-l from-[#2244BF] to-[#102059]'>
            <Container className='flex gap-5 justify-between'>
                <div className='w-full max-w-[651px]'>
                    <TextParag type='title' font={40} line={48} className='font-semibold text-white'>Правоохранительная академия
                    Республики Узбекистан </TextParag>
                    <TextParag font={24} line={29} className='font-normal text-white mt-[25px] mb-[31px]' >
                    Lorem ipsum dolor sit amet consectetur. Est dolor nunc convallis lectus. Risus enim accumsan velit felis nunc quis non. Eget quisque augue eu duis suscipit. Imperdiet cras egestas dapibus sociis neque. Felis commodo tellus interdum tellus mauris cras.
                    </TextParag>
                    <Button size="lg"  endContent={<PlayBtnIcons/>} className='bg-white  rounded-lg p-[17px] text-[#343434] text-[24px] leading-[29px] font-semibold'>Посмотреть видео</Button>
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
            <TextParag type='title' line={44} font={36} className='text-[#171717] mb-[30px] font-semibold'>О центре </TextParag>
            <TextParag line={22} font={18} className='font-medium text-[#393939]'>Наш сайт – это современная информационная платформа, посвященная вопросам борьбы с коррупцией и легализацией преступных доходов. Он создан для повышения осведомленности граждан, государственных служащих, исследователей и студентов, предоставляя доступ к обширной базе знаний, аналитическим материалам и образовательным ресурсам.

            Сайт объединяет национальный и международный опыт, предлагая удобные инструменты для изучения передовых практик и современных подходов. Наша цель – предоставить пользователям не только качественные материалы, но и комфортный доступ к информации, необходимой для профессионального развития и укрепления правовой культуры.
            </TextParag>
            <TextParag type='title' line={44} font={36} className='text-[#171717] mt-9 mb-[32px] font-semibold'>Задачи </TextParag>

            <ul className='list-disc gap-2 text-[#2F2CD4] '>
                <li className='text-[#2F2CD4] pb-[46px] border-b border-spacing-1 flex gap-[32px]'>
                    <TextParag line={24} font={20} className='mb-2 font-semibold'>01</TextParag>
                    <div >
                        <TextParag line={24} font={20} className='mb-2 font-semibold'>Повышение уровня осведомленности и компетенций</TextParag>
                        <TextParag line={24} font={18} className='font-semibold text-[#444444]'>Мы создаем образовательные программы и материалы для граждан, государственных служащих, исследователей и студентов. Эти программы направлены на углубление знаний в области противодействия коррупции, изучение национального и международного опыта. </TextParag>
                    </div>
                </li>
            </ul>
        </Container>
        <div className='w-full py-[80px]  bg-gradient-to-l from-[#2244BF] to-[#102059]'>
            <Container >
            <TextParag type='title' line={44} font={36} className='text-white mb-[32px] font-semibold'>Цели </TextParag>
            <ul className='list-disc gap-2 rounded-xl bg-white text-[#2F2CD4] '>
                <li className='text-[#2F2CD4] p-[30px] mb-[32px]  flex gap-[32px]'>
                    <TextParag line={24} font={20} className='mb-2 font-semibold'>01</TextParag>
                    <div >
                        <TextParag line={24} font={20} className='mb-2 font-semibold'>Повышение уровня осведомленности и компетенций</TextParag>
                        <TextParag line={24} font={18} className='font-semibold text-[#444444]'>Мы создаем образовательные программы и материалы для граждан, государственных служащих, исследователей и студентов. Эти программы направлены на углубление знаний в области противодействия коррупции, изучение национального и международного опыта. </TextParag>
                    </div>
                </li>
            </ul>

            <TextParag type='title' line={24} font={24} className='text-white mb-[30px] text-center font-semibold'>Наши партнеры:</TextParag>
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
