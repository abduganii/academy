'use client'
import React, { useState } from 'react'
import { UploadFileIcons } from '../icons'
import toast from 'react-hot-toast';
import { UploadFile } from '@/hooks/upload';
import { useTranslations } from 'next-intl';

export default function FileUpload({errors, onUpload}:any) {
  const [loadingFile, setLoadingFile] = useState<boolean>(false);
  const [fileName, setfileName] = useState<string>('');
  const t = useTranslations()
  const hendleimg = async (e: any) => {
    setLoadingFile(true)
    if (e.target.files[0] && e.target.files[0]?.size < 5000000) {
      const file = e.target.files[0];
      const formData = new FormData()
        formData.append("file", file)
         await UploadFile(formData)
            .then((data) => {
              setfileName(data?.data?.data?.filename)
              onUpload(data?.data)
            })
            .catch((errr) => toast.error(errr.response.data.message))
            .finally(()=>setLoadingFile(false))
    } else {
      setLoadingFile(false)
      toast.error(t('image-valid'));
    }
  }; 

  return (
    <>
    <label className='w-full inline-block text-center cursor-pointer h-[96px] p-[21px] shadow-sm  border-medium border-default-200 hover:border-default-400  rounded-lg'>
        <div className='flex items-center justify-center'><UploadFileIcons/></div>
        <p className='text-[#252C32] text-[13px] leading-[18px] font-normal mt-1'>{loadingFile? "loading...":<>{fileName? fileName: "Загрузить (формат PDF, Docx)"}</>} </p>
        <input type="file" className='hidden'  accept={".pdf,.doc,.docx"} onChange={(e)=>{
          hendleimg(e)
        }}/>
        
    </label>
    {errors && <p className='text-red-500 text-[13px] leading-[18px] font-normal mt-1'>{errors}</p>}
    </>
  )
}
