"use client"
import OrganizationsCard from '@/components/card/organizations-card'
import Container from '@/components/container'
import Image from 'next/image'
import React, { useState } from 'react'

export default function CountryInformationSinglePage() {
    const [open,setOpen] = useState<boolean | string | number>(false)
    const [open1,setOpen1] = useState<boolean | string | number>(false)
  return (
    <>
    <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-center bg-no-repeat'  style={{"backgroundImage":`url('/r2.png')`}} >
    <Container className='z-20'>
        <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left'>Страновая информация</h4>
    </Container>
    <div className='w-full h-[372px] bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div>
    </div>
    <Container>
        <h4 className='text-[32px] font-semibold leading-[46px] mb-[16px]'>Основное законодательство</h4>
        <ol className='pl-[20px] list-decimal text-[16px] font-normal leading-[26px] mb-[68px]'>
            <li>О внесении изменений и дополнений в некоторые законодательные акты Республики Узбекистан, направленных на дальнейшее усиление социальной защиты граждан (lex.uz)
            </li>
            <li>Об утверждении Стратегии социальной защиты населения Республики Узбекистан (lex.uz)</li>
        </ol>  
        <h4 className='text-[32px] font-semibold leading-[46px] mb-[16px] '>Антикоррупционные органы</h4>
        { [1,2,3,4,5,].map((e)=>( 
        <OrganizationsCard
            className='mb-4'
            key={e}
            image={'/logoOHH.png'}
            onClick={()=>setOpen(state=> state == e ? false : e)}
            dicr={`Деятельность органов прокуратуры направлена на всемерное утверждение верховенства закона, укрепление правопорядка, обеспечение защиты от неправомерных посягательств на социальные, экономические, политические, личные права и свободу человека и гражданина, а также на государственную независимость, общественно-государственное устройство, политическую и экономическую систему, права национальных групп и территориальных образований, закрепленных Конституцией Республики Узбекистан`} 
            isOpen={open == e} 
            title={"Генеральная прокуратура (Бош прокуратура) "}
      />
      ))}

        <h4 className='text-[32px] font-semibold leading-[46px] mb-[16px] mt-[58px]'>Международное сотрудничество</h4>

        <div className='flex gap-5'>
            <div className='w-full'>
                { [1,2,3,4,5,].map((e)=>( 
                    <div 
                      onClick={()=>setOpen1(state=> state == e ? false : e)}
                     className={`${open1 == e ? 'border border-black':' border-[#F5F5F5]'} flex items-center cursor-pointer gap-3 w-full mb-[16px] px-4 py-3 rounded-lg bg-[#F5F5F5]`}>
                        <Image
                            src={'/logoOHH.png'}
                            alt='img'
                            width={40}
                            height={40}
                            title='logo'
                        />
                        <h4 className='font-inter text-[16px] font-semibold leading-[26px] text-left'>ООН</h4>
                    </div>
                    ))}
            </div>

            <div className='w-full mb-[16px] p-5 rounded-lg bg-[#F5F5F5]'>
            <h4 className='font-inter text-[16px] font-semibold leading-[26px] text-left mb-[16px]'>Группа государств по борьбе с коррупцией (ГРЕКО)</h4>
            <p className='mb-[12px]  font-inter text-[14px] font-normal leading-[24px] text-left'>
            Конвенция Совета Европы об уголовной ответственности за коррупцию не была ратифицирована. 
            </p>
            </div>
        </div>

        <h4 className='text-[32px] font-semibold leading-[46px] mt-[50px] mb-[16px]'>Индексы</h4>
        <div className='flex flex-wrap gap-4 mb-[68px]'>
        { [1,2,3,4].map((e)=>( 
            <div className='colm1 p-5 rounded-lg bg-[#F5F5F5]'>
                <h4 className='font-inter text-[20px] font-semibold leading-[24px] text-left mb-[12px]'>Index</h4>
                <div className='flex'>
                    <div className='w-full'>
                        <p className='font-inter text-[14px] font-normal leading-[24px] text-left'>
                        Итоговая оценка
                        </p>
                        <p className='font-inter text-[16px] font-semibold leading-[26px]'>81/100</p>
                    </div>
                    <div className='w-full'>
                        <p className='font-inter text-[14px] font-normal leading-[24px] text-left'>
                        Итоговая оценка
                        </p>
                        <p className='font-inter text-[16px] font-semibold leading-[26px]'>81/100</p>
                    </div>
                
                </div>
            </div>
              ))}
        </div>

        <h4 className='text-[32px] font-semibold leading-[46px] mb-[16px]'>Сотрудничество с Узбекистаном</h4>
        <ol className='pl-[20px] list-decimal text-[16px] font-normal leading-[26px] mb-[68px]'>
            <li>О внесении изменений и дополнений в некоторые законодательные акты Республики Узбекистан, направленных на дальнейшее усиление социальной защиты граждан (lex.uz)
            </li>
            <li>Об утверждении Стратегии социальной защиты населения Республики Узбекистан (lex.uz)</li>
        </ol> 
    </Container>
    </>
  )
}
