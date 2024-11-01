import Container from '@/components/container'
import ContactUsForm from '@/section/contact-us'
import HomeCard from '@/section/home-card'
import Lkd from '@/section/lkd'
import NewsSection from '@/section/news-section'
import SupportSection from '@/section/support-section'
import React from 'react'

export default function HomePagae() {
  return (
    <Container className='pt-[172px]'>
      <Lkd/>
      <HomeCard/>
      <NewsSection/>
      <ContactUsForm/>
      <SupportSection/>
    </Container>
  )
}
