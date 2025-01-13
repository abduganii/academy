"use client"
import CommitCard from '@/components/card/commit-card'
import Container from '@/components/container'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from '@nextui-org/react'
import { Rate, Progress } from 'antd';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { hoc, mutationFn } from '@/utils'
import { usePageIdProps } from './props'
import dayjs from 'dayjs'
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form'
import { useQueryClient } from '@tanstack/react-query'
import { useAppSelector } from '@/lib/hooks';
import { useSearchParams } from 'next/navigation';
const VideoPlayer: React.FC<{ videoUrl: string ,onPlay:any,onPause:any}> = ({ videoUrl,onPlay,onPause }) => {
    return (
      <div className="video-container">
        <video onPlay={onPlay}  onPause={onPause} className='w-full  aspect-video h-[420px]' controls width="100%">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
export const VideoMaterialIdPage:any = hoc(usePageIdProps, props => {
    const {onevideos,comments,stat, id}:any = props
    const queryClient:any = useQueryClient();
      const { userMe } = useAppSelector((store: any) => store.userMe);
    const {isOpen,onClose, onOpen, onOpenChange} = useDisclosure();
    const t = useTranslations()
    const [ loading,setloading] = useState(false)
     const [ updateId,setUpdateId] = useState(false)
    const { register,reset,setValue,watch, handleSubmit, formState: { errors } } = useForm<any>();
    const watchedFiles = watch();
    const { replace } = useRouter();
    const pathname = usePathname();
      const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const intervalRef = useRef<any>(null);
    const onSubmit = async (data: any) => {
      setloading(true)
      try {
       mutationFn({
        url:updateId? `/comments/${updateId}`: '/comments',
        method: updateId? "PUT":"POST",
        data: updateId ? data : {
        comment:data?.comment,
        star:data?.star,
        type:"video",
        item:onevideos?.id
      }})
      .then(()=>{
        reset()
        queryClient.invalidateQueries(['comments'])
        onClose()

        if(updateId){
          setUpdateId(false)
          toast.success('Form updated successfully!');
        }else{
          toast.success('Form submitted successfully!');
        }
         
       })
       .catch(()=>{
            toast.error('Failed to submit form');
         })
         .finally(()=>{setloading(false)})
    } catch (error:any) {
      setloading(false)
      toast.error('Error sending date:', error)
    }
  };

  const OnPlay = () => {
    if (userMe) {
      mutationFn({
        url: `/watchers/watching/${id}`,
        method: "PATCH",
      });
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        mutationFn({
          url: `/watchers/watching/${id}`,
          method: "PATCH",
        });
      }, 30000); 
    }
  };

  const OnPause = () => {
    if (userMe) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null; 
      }
      mutationFn({
        url: `/watchers/watching/${id}/kill`,
        method: "PATCH",
      });
    }
  };
  return (
    <Container className='py-[150px]'>
        <div className='w-full flex gap-10 mb-[56px] p-10 bg-[#F5F5F5] dark:bg-[#27272A] dark:text-[#FFFFFF] rounded-lg'>
            <Image
            className='w-full max-w-[194px] h-[298px] object-cover'
                alt='img'
                width={196}
                height={298}
                // src={'/vidoe.png'}
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${onevideos?.poster?.path}`}
                title='title'
            />
            <div className='w-full max-w-[760px]'>
                <h3 className='text-[32px] font-semibold leading-[29px] mb-4'>{onevideos?.name}</h3>
                <div className='flex gap-2 mt-4 mb-6'>
{
                    onevideos?.tags?.map((e:any)=>(

                      <p key={e?.id} className='py-[2px] px-[12px] bg-[#0000000D] text-[#5B6871] rounded-lg text-[14px] font-normal leading-[24px]'>{e?.name}</p>
                    ))
                  }
                </div>
                <div className='flex items-end gap-2 w-full mb-[12px]'>
                    <p className='text-[14px] font-normal text-[#5B6871] text-nowrap leading-[24px]'>{t('langs')}</p>
                    <hr className='w-full inline-block border-0 border-t-2 border-dotted border-gray-500 '/>
                    <p className='text-[14px] font-normal leading-[24px] text-[#2D2D2D]'>{onevideos?.language}</p>
                </div>
                <div className='flex items-end gap-2 w-full mb-[12px]'>
                    <p className='text-[14px] font-normal text-[#5B6871] text-nowrap leading-[24px]'>{t('country')}</p>
                    <hr className='w-full inline-block border-0 border-t-2 border-dotted border-gray-500 '/>
                    <p className='text-[14px] font-normal leading-[24px] text-[#2D2D2D]'>{onevideos?.country}</p>
                </div>
                <div className='flex items-end gap-2 w-full mb-[12px]'>
                    <p className='text-[14px] font-normal text-[#5B6871] text-nowrap leading-[24px]'>{t('publeshedYear')}</p>
                    <hr className='w-full inline-block border-0 border-t-2 border-dotted border-gray-500 '/>
                    <p className='text-[14px] font-normal leading-[24px] text-[#2D2D2D]'>{dayjs(onevideos?.created_at).format('YYYY')}</p>
                </div>
            </div>
        </div>
        <div className='w-full max-w-[760px] my-[56px]'>
            <h3 className='text-[24px] font-semibold leading-[29px] mb-4'>{t('description')}</h3>
            <p className='text-[14px] font-normal text-[#5B6871] leading-[24px] mb-[32px] dark:text-white'>{onevideos?.description}
                {/* <span className='font-semibold underline decoration-solid text-[#2D2D2D] dark:text-white ml-1 cursor-pointer'>Еще</span> */}
            </p>
           {onevideos?.file && <VideoPlayer onPlay={OnPlay} onPause={OnPause} videoUrl={`https://api.proacademy.calypso.uz/files/stream/${onevideos?.file?.id}`} />}
             <h3 className='text-[24px] font-semibold leading-[29px] mt-[56px] mb-4'>{t('reviews')}</h3>
            <div className='w-full flex items-start justify-between'>
                <div className='w-full max-w-[124px]'>
                    <h3 className='text-[40px] font-normal leading-[46px] text-[#000000CC] dark:text-white '>{stat?.avg}</h3>
                    <p className='my-4 text-[15px] font-normal leading-[20px] text-[#0000008F] dark:text-white '>На основании {stat?.total} отзывов</p>
                    <Rate value={stat?.avg}/>
                </div>
                <div className='w-full max-w-[600px]'>
                    <div className="flex items-center gap-2 mb-1">
                      <p className='text-[14px] mt-[1px] font-normal leading-[24px] text-[#2D2D2D]'>1</p>  
                      <Progress  percent={(stat?.five /stat?.total ) * 100}/>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className='text-[14px] mt-[1px] font-normal leading-[24px] text-[#2D2D2D]'>1</p>  
                      <Progress  percent={(stat?.four /stat?.total ) * 100}/>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className='text-[14px] mt-[1px] font-normal leading-[24px] text-[#2D2D2D]'>1</p>  
                      <Progress  percent={(stat?.three /stat?.total ) * 100}/>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className='text-[14px] mt-[1px] font-normal leading-[24px] text-[#2D2D2D]'>1</p>  
                      <Progress  percent={(stat?.two /stat?.total ) * 100}/>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className='text-[14px] mt-[1px] font-normal leading-[24px] text-[#2D2D2D]'>1</p>  
                      <Progress  percent={(stat?.one /stat?.total ) * 100}/>
                    </div>
                </div>
            </div>
             <div className='flex justify-end'>
            <Button onClick={()=>reset()} onPress={userMe ? onOpen: ()=>{
                params.set('register', "true"  );
                replace(`${pathname}?${params.toString()}`);
            }} className='w-full my-[24px] bg-[#2962FF1A] text-[#2962FF] dark:bg-white  dark:text-black max-w-[192px] rounded-lg' size='md'>{t('leave-feedback')}</Button>
            </div>
            {
                comments?.map((e:any)=>(
                <CommitCard
                key={e?.id}
                id={e?.id}
                    className="border-b mb-6"
                    name={e?.user?.firstName}
                    text={e?.comment}
                    date={e?.created_at}
                    userId={e?.user?.id}
                    onUpdate={()=>{
                      onOpen()
                      setUpdateId(e?.id)
                      setValue('comment',e?.comment)
                    }}
                />
                ))
            }
            {/* <div className='flex justify-center'>
            <Button className='w-full bg-[#69696926] text-[#323232] max-w-[205px] dark:bg-white  dark:text-black rounded-lg' size='md' endContent={<MoreDownIcons/>}>Показать еще</Button>
            </div> */}
        </div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className='bg-[#F5F5F5] max-w-[662px]'>
          {(onClose) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader className="flex flex-col gap-1">{t('leave-feedback')}</ModalHeader>
              <ModalBody>
             <Rate className='text-[18px]' onChange={(e)=>setValue('star',e)}  value={ watchedFiles.star|| stat?.avg} />
              <Textarea
               classNames={{ inputWrapper:"bg-white border-[2px] border-white  group-data-[focus=true]:border-[2px] group-data-[focus=true]:border-white group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white" }} 
                    label="Description"
                    placeholder="Enter your description"
                    className="w-full"
                    value={watchedFiles.comment || ""}
                    {...register('comment', { required: 'comment is required' })}
                    required={true}
                />
              </ModalBody>
              <ModalFooter>
                <Button className='w-full  max-w-[200px] rounded-lg' isLoading={loading}  color="danger" variant="light" onPress={onClose}>
                  {t('close')}
                </Button>
                <Button className='w-full bg-[#2962FF] text-white max-w-[200px] rounded-lg' size='md' type='submit'>
                  {t('action')}
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
        </Modal>
        
    </Container>
  )
})
