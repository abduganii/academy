'use client'
import Container from '@/components/container'
import Flipbook from '@/components/Flipbook'
import { LeftIcons } from '@/components/icons'
import TextParag from '@/components/text'
import { Button, Modal, ModalBody, ModalContent, Slider, useDisclosure } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'

export default function ReadPdfPage() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const book:any = useRef();
  const router = useRouter()
  const [currentPage,setcurrentPage] = useState(0)
  const t = useTranslations()
  return (
    <div>
        <div className='bg-[#F5F5F5] w-full py-3 fixed top-0 left-0 z-20'> 
          <Container className='flex items-center'>
            <Button onClick={()=>router.push('/books/1')} className='bg-transparent  h-[48px]  p-0  '>
             <span className='-rotate-90 '> <LeftIcons /></span>
              <TextParag >The concise laws of human nature</TextParag>
              </Button>
            
          </Container>
        </div>
            <Flipbook onFlip={(e:any)=>setcurrentPage(e?.data)} ref={book} />    
            <Container className='flex items-center gap-5 py-3'>
                <Slider
                step={1} 
                maxValue={5} 
                minValue={0} 
                size='sm' 
                // value={currentPage}
                defaultValue={1}
                className="w-full"
                color="foreground"
                onChange={(e:any)=>{
                    book.current?.pageFlip()?.flip((e * 2)-1)
                }}
              />
              <p className='text-[14px] leading-[24px] font-semibold text-nowrap'>{( currentPage+2) } / 10</p>
              <Button  onPress={onOpen} className='bg-[#323232] w-full max-w-[220px] text-center text-white rounded-lg dark:bg-white dark:text-black'>{t('buy')}: 320 000 cум</Button>
            </Container>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent className="bg-[#fff] max-w-[640px] text-center py-[25px] px-[32px]">
                    {() => (
                  <ModalBody  className='p-0 '>
                    <h3 className='text-[20px] leading-[28px] font-semibold'>{t('end-fragment')}</h3>
                    <Image
                        alt='img'
                        width={196}
                        height={298}
                        src={'/books.png'}
                        title='title'
                        className='mx-auto mt-[16px] mb-[32px]'
                    />
                    <Button   className='bg-[#323232] m-auto w-full max-w-[220px] text-center text-white rounded-lg dark:bg-white dark:text-black'>{t('buy')}: 320 000 cум</Button>
                  </ModalBody>
                    )}
              </ModalContent>
            </Modal>
    </div>
  )
}
