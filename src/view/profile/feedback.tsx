'use client'
import { DoneIcon } from '@/components/icons';
import { useAppSelector } from '@/lib/hooks';
import { mutationFn } from '@/utils';
import { Button, Input, Modal, ModalBody, ModalContent, Textarea, useDisclosure } from '@nextui-org/react'
import { useTranslations } from 'next-intl';
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

type FormData = {
  text: string;
  email: string;
};
export default function ProfilefeedbackPage() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const t = useTranslations()
     const { userMe } = useAppSelector((store: any) => store.userMe);
    const { register,reset, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
      mutationFn({
          url: '/user-messages',
          method: "POST",
          data: {
            text: data?.text,
            email: userMe?.data?.email
          }
        })
        .then((res: any) => {
          onOpen()
          reset()
          
        })
        .catch((error: any) => {
          toast.error(error?.response?.data?.message);
        })
        // .finally(() => setloading(false) )
    };
  return (
    <form onSubmit={handleSubmit(onSubmit)}  className='bg-[#F5F5F5] rounded-lg gap-4 flex flex-wrap justify-end p-[32px]'>
        <h3 className='text-[28px] leading-[34px] mb-[16px] font-semibold w-full'>Задать вопрос</h3>
        <Textarea
            label={t('description')}
            className="w-full"
            variant='bordered'
             cols={2}
             rows={2}
             errorMessage={(errors?.text?.message as string) || ""}
             isInvalid={Boolean(errors?.text?.message)}
             {...register("text", {
               required: "text is required",
             })}
            />
        <Input
              variant='bordered'
              size={'sm'} 
              type="email" 
              label={t('email')} 
              disabled={true}
              value={userMe?.data?.email}
            
              />
        <Button type='submit' size='lg' className='w-full max-w-[260px]  rounded-lg bg-[#2962FF] text-white'>{t('send')}</Button>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-[#fff] max-w-[466px] py-[25px] px-[32px]">
              {(onClose) => (
                <ModalBody className="text-center p-0">
                     <div  className='text-center'>  
                        <DoneIcon className="m-auto"/>
                        <p className='mb-[9px] mt-[9px] text-[22px] font-semibold leading-[32px]'>
                        {t('message-sent')}
                        </p>
                        <p className=' text-[#525252] mb-[24px] text-[16px] font-medium leading-[20px]'>
                       {t('will-connect')}
                        </p>
                        <Button className='w-full bg-[#2962FF] text-white  rounded-lg' size='md' onPress={onClose}>
                        {t('countinion')}
                        </Button>
                    </div>
                </ModalBody>
              )}
        </ModalContent>
        </Modal>
    </form>
  )
}
