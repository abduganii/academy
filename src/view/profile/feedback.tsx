'use client'
import { DoneIcon } from '@/components/icons';
import { Button, Input, Modal, ModalBody, ModalContent, Textarea, useDisclosure } from '@nextui-org/react'
import React from 'react'

export default function ProfilefeedbackPage() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div className='bg-[#F5F5F5] rounded-lg gap-4 flex flex-wrap justify-end p-[32px]'>
        <h3 className='text-[28px] leading-[34px] mb-[16px] font-semibold w-full'>Задать вопрос</h3>
        <Textarea
            label="Description"
            className="w-full"
            variant='bordered'
             cols={2}
             rows={2}
            />
        <Input className='w-full' variant='bordered' size={'sm'} type="email" label="Email"  />
        <Button size='lg' onPress={onOpen} className='w-full max-w-[260px]  rounded-lg bg-[#2962FF] text-white'>Отправить</Button>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-[#fff] max-w-[466px] py-[25px] px-[32px]">
              {(onClose) => (
                <ModalBody className="text-center p-0">
                     <div  className='text-center'>  
                        <DoneIcon className="m-auto"/>
                        <p className='mb-[9px] mt-[9px] text-[22px] font-semibold leading-[32px]'>
                        Сообщение отправлено!
                        </p>
                        <p className=' text-[#525252] mb-[24px] text-[16px] font-medium leading-[20px]'>
                        В ближайшее время с Вами свяжутся по почте
                        </p>
                        <Button className='w-full bg-[#2962FF] text-white  rounded-lg' size='md' onPress={onClose}>
                        Продолжить
                        </Button>
                    </div>
                </ModalBody>
              )}
        </ModalContent>
        </Modal>
    </div>
  )
}
