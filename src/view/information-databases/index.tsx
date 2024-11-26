"use client"
import OrganizationsCard from '@/components/card/organizations-card'
import Container from '@/components/container'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function InformationDatabasesPage() {
  const t = useTranslations()
  return (
    <>
    <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-center bg-no-repeat'  style={{"backgroundImage":`url('/r4.png')`}} >
    <Container className='z-20'>
        <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left'> {t('information-databases')} </h4>
    </Container>
    <div className='w-full h-[372px] bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div>
    </div>

    <Container className='mb-[70px]'>
     { [1,2,3,4,5,].map((e)=>( 
      <OrganizationsCard 
        className='mb-4'
        key={e}
        image={'/Elibrary.png'}
        dicr={`Научная электронная библиотека eLIBRARY.RU - это крупнейший российский информационно-аналитический портал в области науки, технологии, медицины и образования, содержащий рефераты и полные тексты более 38 млн научных публикаций и патентов, в том числе электронные версии более 5600 российских научно-технических журналов, из которых более 4800 журналов в открытом доступе.`} 
        title={"Elibrary"}
        link={'https://www.un.org/ru/'}
      />
      ))}
    </Container>
    </>
  )
}
