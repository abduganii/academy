"use client"
import NewsCard from '@/components/card/news-card'
import Container from '@/components/container'
import { Select, SelectItem } from '@nextui-org/react'
import React from 'react'

export default function NewsPage() {
  return (
    <>
    <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-[#2C2C2C] bg-center bg-no-repeat bg-cover' 
    //  style={{"backgroundImage":`url('/r6.jfif')`}}
     >
    <Container className='z-20'>
        <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left mb-4'>Новости</h4>
        <div className='flex'>
                <Select
                    size='sm'
                    label="Select an book" 
                    className="w-full max-w-[220px]" 
                    >
                    <SelectItem key={1}>
                        items 1
                    </SelectItem>
                    <SelectItem key={2}>
                        items 2
                    </SelectItem>
                </Select>
                </div>
    </Container>
    {/* <div className='w-full h-[372px] bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div> */}
    </div>

    <Container className='flex flex-wrap gap-5  mt-[60px] mb-[80px]'>
     { [1,2,3,4,5].map((e)=>( 
            <NewsCard
            link={`/news/${e}`}
                className={e == 1||e == 2 ? 'colm1' :'colm2'}
                key={e}
                image='/news.jfif'
                Isgrey={true}
                category='Общество'
                text={e == 1||e == 2 ?  `30 августа т.г. в рамках Научного часа, традиционно проводимого для самостоятельных соискателей, докторантов и исследователей, состоялось…`: false}
                title='Объявляется прием на обучение на стажера-исследователя'
                date='16.07.2024'
                view={567}
            />
      ))}
    </Container>
    </>
  )
}
