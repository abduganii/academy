'use client'
import Container from '@/components/container'
import ArticlesSection from '@/section/articles'
import BooksSection from '@/section/books-section'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function SourcesPage() {
  const t = useTranslations();
  return (
    <>
      <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-no-repeat'  style={{"backgroundImage":`url('/r1.png')`}} >
      <Container className='z-20'>
          <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left'>{t('sources')}</h4>
      </Container>
      <div className='w-full h-[372px] bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div>
      </div>
      <Container>
      <BooksSection/>
      <ArticlesSection/>
      </Container>
    </>
  )
}
