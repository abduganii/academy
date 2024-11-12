import React from 'react'
import { UploadFileIcons } from '../icons'

export default function FileUpload() {
  return (
    <label className='w-full inline-block text-center cursor-pointer h-[96px] p-[21px] shadow-sm  border-medium border-default-200 hover:border-default-400  rounded-lg'>
        <div className='flex items-center justify-center'><UploadFileIcons/></div>
        <p className='text-[#252C32] text-[13px] leading-[18px] font-normal mt-1'>Загрузить (формат PDF, Docx) </p>
        <input type="file" className='hidden' />
    </label>
  )
}
