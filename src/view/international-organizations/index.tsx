"use client"
import OrganizationsCard from '@/components/card/organizations-card'
import Container from '@/components/container'
import { useLocale, useTranslations } from 'next-intl'
import React, { useState } from 'react'


const dataArr = [
  {
    id:5,
    title:{ru:"ООН ",uz:"OOH",en:"OOH"},
    text:{
      ru:'Организа́ция Объединённых На́ций — международная организация, созданная для поддержания и укрепления международного мира и безопасности, а также развития сотрудничества между государствами.Цели в области устойчивого развития являются своеобразным призывом к действию, исходящим от всех стран — бедных, богатых и среднеразвитых. Он нацелен на улучшение благосостояния и защиту нашей планеты.',
      en:'The United Nations is an international organization created to maintain and strengthen international peace and security, as well as to develop cooperation between states. The Sustainable Development Goals are a kind of call to action from all countries - poor, rich and middle-income. It is aimed at improving well-being and protecting our planet.',
      uz:"Birlashgan Millatlar Tashkiloti xalqaro tinchlik va xavfsizlikni saqlash va mustahkamlash, shuningdek, davlatlar oʻrtasidagi hamkorlikni rivojlantirish maqsadida tashkil etilgan xalqaro tashkilotdir. Barqaror Rivojlanish Maqsadlari barcha mamlakatlar - kambag'al, boy va o'rta rivojlangan mamlakatlar uchun harakatga chaqiruvdir. U farovonlikni yaxshilash va sayyoramizni himoya qilishga qaratilgan."
    },
     link:'www.fatf-gafi.org',
    image:'/logoOHH.png'
  },
  {
    id:1,
    title:{ru:"ФАТФ ",uz:"FATF",en:"FATF"},
    text:{
      ru:'Финансовая группа по борьбе с отмыванием денег (Financial Action Task Force on Money Laundering) – международная организация, устанавливающая стандарты и рекомендации по борьбе с отмыванием денег, финансированием терроризма и распространением оружия массового уничтожения.',
      en:'The Financial Action Task Force on Money Laundering (FATF) is an international organization that sets standards and recommendations for combating money laundering, terrorist financing, and the proliferation of weapons of mass destruction. Main tasks: Developing standards, conducting mutual evaluations of countries, and monitoring their implementation. www.fatf-gafi.org',
      uz:'Pul yuvishga qarshi kurash bo‘yicha moliyaviy harakatlar guruhi (Financial Action Task Force on Money Laundering – FATF) – bu xalqaro tashkilot bo‘lib, pul yuvish, terrorizmni moliyalashtirish va ommaviy qirg‘in qurollarini tarqatishga qarshi kurashish bo‘yicha standartlar va tavsiyalar ishlab chiqadi. Asosiy vazifalar: Standartlar ishlab chiqish, davlatlararo o‘zaro baholashlarni o‘tkazish va ularning bajarilishini nazorat qilish.'
    },
     link:'www.fatf-gafi.org',
    image:'/FATF.png'
  },
  {
    id:2,
    title:{ru:"ГРЕКО ",uz:"GRECO",en:"GRECO"},
    text:{
      ru:'Группа государств против коррупции (Group of States Against Corruption) – орган Совета Европы, занимающийся мониторингом выполнения международных антикоррупционных стандартов.Основные задачи: оценка мер по борьбе с коррупцией, разработка рекомендаций для государств-членов.',
      en:'The Group of States Against Corruption (GRECO) is a Council of Europe body that monitors compliance with international anti-corruption standards. Main tasks: Evaluating anti-corruption measures and developing recommendations for member states.',
      uz:'Korrupsiyaga qarshi davlatlar guruhi (Group of States Against Corruption – GRECO) – Yevropa Kengashi organi bo‘lib, xalqaro korrupsiyaga qarshi standartlarga rioya etilishini nazorat qiladi.Asosiy vazifalar: Korrupsiyaga qarshi choralarni baholash va a’zo davlatlar uchun tavsiyalar ishlab chiqish.'
    },
     link:'www.coe.int/greco',
    image:'/GRECO.png'
  },
  {
    id:3,
    title:{ru:"ОЭСР ",uz:"OECD",en:"OECD"},
    text:{
      ru:'Организация экономического сотрудничества и развития (Organisation for Economic Co-operation and Development) – международная организация, объединяющая страны для стимулирования экономического прогресса и мировой торговли.Основные задачи: проведение исследований, разработка экономических рекомендаций, установление стандартов в различных областях, включая борьбу с налоговыми преступлениями и коррупцией. ',
      en:'The Organisation for Economic Co-operation and Development (OECD) is an international organization uniting countries to stimulate economic progress and global trade. Main tasks: Conducting research, developing economic recommendations, and establishing standards in various fields, including combating tax crimes and corruption.',
      uz:'Iqtisodiy hamkorlik va rivojlanish tashkiloti (Organisation for Economic Co-operation and Development – OECD) – iqtisodiy rivojlanish va xalqaro savdoni rag‘batlantirish uchun davlatlarni birlashtiruvchi xalqaro tashkilot. Asosiy vazifalar: Tadqiqotlar o‘tkazish, iqtisodiy tavsiyalar ishlab chiqish va turli sohalarda, jumladan soliq jinoyatlari va korrupsiyaga qarshi kurashish bo‘yicha standartlar belgilash.'
    },
     link:'www.oecd.org',
    image:'/OECD.png'
  },
  {
    id:4,
    title:{ru:"ОАГ ",uz:"OAS",en:"OAS"},
    text:{
      ru:'Организация американских государств (Organization of American States) – региональная международная организация, объединяющая страны Северной и Южной Америки для укрепления демократии, прав человека, безопасности и экономического сотрудничества. Основные задачи: содействие демократии, защита прав человека, борьба с коррупцией и преступностью.',
      en:'The Organization of American States (OAS) is a regional international organization that brings together countries of North and South America to strengthen democracy, human rights, security, and economic cooperation.Main tasks: Promoting democracy, protecting human rights, and combating corruption and crime.',
      uz:'Amerika davlatlari tashkiloti (Organization of American States – OAS) – Shimoliy va Janubiy Amerikadagi davlatlarni demokratiya, inson huquqlari, xavfsizlik va iqtisodiy hamkorlikni mustahkamlash maqsadida birlashtiruvchi mintaqaviy xalqaro tashkilot. Asosiy vazifalar: Demokratiyani rivojlantirish, inson huquqlarini himoya qilish, korrupsiya va jinoyatchilikka qarshi kurash.'
    },
    link:'www.oas.org',
    image:'/OAS.png'
  }
]
export default function InternationalOrganizationsPage() {
  const [open,setOpen] = useState<boolean | string | number>(false)
  const t = useTranslations()
  const locale = useLocale()
  return (
    <>
    <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-center bg-no-repeat'  style={{"backgroundImage":`url('/r3.png')`}} >
    <Container className='z-20'>
        <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left'>{t('international-organizations')}</h4>
    </Container>
    <div className='w-full h-[372px] bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div>
    </div>

    <Container className='mb-[70px]'>
     { dataArr?.map((e:any)=>( 
      <OrganizationsCard 
        className='mb-4 max-w-[858px]'
        key={e?.id}
        image={e?.image}
        onClick={()=>setOpen(state=> state == e?.id? false : e?.id)}
        communication={"Бизнес"}
        dicr={e?.text?.[locale]} 
        isOpen={open == e?.id} 
        title={e?.title?.[locale]}
        text={"Член ГРЕКО с 2000 г. "}
        link={`https://${e?.link}`}
      />
      ))}
    </Container>
    </>
  )
}
