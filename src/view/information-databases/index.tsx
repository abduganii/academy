"use client"
import OrganizationsCard from '@/components/card/organizations-card'
import Container from '@/components/container'
import { useTranslations } from 'next-intl'
import React from 'react'
const data = [
  {
    text: 'natlib.uz',
  },
  {
    text: 'diss.natlib.uz',
  },
  {
    text: 'nodir.natlib.uz',
  },
  {
    text: 'qr.natlib.uz',
  }, {
    text: 'press.natlib.uz',
  }
]
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
     { data.map((e,i)=>( 
      <OrganizationsCard 
        className='mb-4'
        key={i}
        image={'/Elibrary.png'}
        dicr={`InformationDatabases${i+1}`} 
        title={e?.text}
        link={`https://${e?.text}`}
      />
      ))}
    </Container>
    </>
  )
}


