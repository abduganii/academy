"use client"
import OrganizationsCard from '@/components/card/organizations-card'
import Container from '@/components/container'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

export default function InternationalOrganizationsPage() {
  const [open,setOpen] = useState<boolean | string | number>(false)
  const t = useTranslations()
  return (
    <>
    <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-center bg-no-repeat'  style={{"backgroundImage":`url('/r3.png')`}} >
    <Container className='z-20'>
        <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left'>{t('international-organizations')}</h4>
    </Container>
    <div className='w-full h-[372px] bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div>
    </div>

    <Container className='mb-[70px]'>
     { [1,2,3,4,5,].map((e)=>( 
      <OrganizationsCard 
        className='mb-4 max-w-[858px]'
        key={e}
        image={'/logoOHH.png'}
        onClick={()=>setOpen(state=> state == e ? false : e)}
        communication={"Бизнес"}
        dicr={`Организа́ция Объединённых На́ций — международная организация, созданная для поддержания и укрепления международного мира и безопасности, а также развития сотрудничества между государствами.
        Цели в области устойчивого развития являются своеобразным призывом к действию, исходящим от всех стран — бедных, богатых и среднеразвитых. Он нацелен на улучшение благосостояния и защиту нашей планеты.`} 
        isOpen={open == e} 
        title={"OOH"}
        text={"Член ГРЕКО с 2000 г. "}
        link={'https://www.un.org/ru/'}
      />
      ))}
    </Container>
    </>
  )
}
