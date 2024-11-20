'use client'
import Container from '@/components/container'
import Flipbook from '@/components/Flipbook'
import { LeftIcons } from '@/components/icons'
import TextParag from '@/components/text'
import { Button, Modal, ModalBody, ModalContent, Slider, useDisclosure } from '@nextui-org/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'

export default function ReadPdfPage() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [currentPage,SetCurrentPage] = useState(1)
  const book:any = useRef();
  const router = useRouter()
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
            <Flipbook ref={book} onFlip={(e:any)=>{
              SetCurrentPage(e?.data +2)
              }}/>    
            <Container className='flex items-center gap-5 py-3'>
                <Slider
                label="ds"
                step={1} 
                maxValue={10} 
                minValue={0} 
                size='sm' 
                value={currentPage}
                defaultValue={currentPage}
                className="w-full"
                color="foreground"
                onChange={(e:any)=>{
                  if(e % 2 == 0){
                    book.current?.pageFlip()?.flip(e-2)
                  }else{
                    book.current?.pageFlip()?.flip(e-1)
                  }
                }}
              />
              <p className='text-[14px] leading-[24px] font-semibold text-nowrap'>{currentPage } / 10</p>
              <Button  onPress={onOpen} className='bg-[#323232] w-full max-w-[220px] text-center text-white rounded-lg dark:bg-white dark:text-black'>Купить: 320 000 cум</Button>
            </Container>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent className="bg-[#fff] max-w-[640px] text-center py-[25px] px-[32px]">
                    {() => (
                  <ModalBody  className='p-0 '>
                    <h3 className='text-[20px] leading-[28px] font-semibold'>Конец фрагмента</h3>
                    <Image
                        alt='img'
                        width={196}
                        height={298}
                        src={'/books.png'}
                        title='title'
                        className='mx-auto mt-[16px] mb-[32px]'
                    />
                    <Button   className='bg-[#323232] m-auto w-full max-w-[220px] text-center text-white rounded-lg dark:bg-white dark:text-black'>Купить: 320 000 cум</Button>
                  </ModalBody>
                    )}
              </ModalContent>
            </Modal>
    </div>
  )
}
