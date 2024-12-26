'use client';
import Container from '@/components/container'
import ContactUsForm from '@/section/contact-us'
import HomeCard from '@/section/home-card'
import Lkd from '@/section/lkd'
import NewsSection from '@/section/news-section'
import SupportSection from '@/section/support-section'
import {hoc} from '@/utils';
import { useHomePageProps } from './props'

export const HomePage = hoc(useHomePageProps, props => {
  const {news} = props;
  return (
    <Container className='pt-[172px]'>
      <Lkd/>
      <HomeCard/>
      <NewsSection news={news}/>
      <ContactUsForm/>
      <SupportSection/>
    </Container>
  )
});