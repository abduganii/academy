"use client"
import ArticlesCardPage from '@/components/card/acticles-card-in-page'
import Container from '@/components/container'
import { LeftIcons } from '@/components/icons'
import { Link } from '@/i18n/routing'
import { Select, SelectItem } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function ArticlesPage() {
  const t = useTranslations()
  return (
 
    <>
    <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-[#2C2C2C] bg-center bg-no-repeat bg-cover' 
    //  style={{"backgroundImage":`url('/r6.jfif')`}}
     >
    <Container className='z-20'>
        <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left mb-4'>{t('articles')}</h4>
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

    <Container className='mt-[60px] mb-[80px]'>
     { [1,2,3,4,5].map((e)=>( 
        <ArticlesCardPage
          key={e}
          className="mb-4"
          title='Вниманию кандидатов, рекомендованных к обучению в магистратуру'
          link={`/articles/${e}`}
          name=' Т. Усмонов'
          date=' 22.02.2024'
        />
          
      ))}
    </Container>
    </>
  )
}
