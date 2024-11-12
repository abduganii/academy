import { Avatar } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { UploadIcons } from '../icons'

export default function ProfileUpload() {
  return (
    <div className='w-full'>

        <div className='w-full m-auto max-w-[124px] aspect-[1/1] relative'>
            {
                false ? <Image
                src={'/url'} 
                alt='img'
                title='profile'
                width={124}
                height={124}
                className='aspect-[1/1]'
                />:
                <Avatar
                    className='w-full h-full aspect-[1/1]'
                />
            }
            <label className='w-[40px] aspect-1/1 cursor-pointer active:shadow-sm active:scale-[.98] absolute inline-block bottom-0 right-0 rounded-lg bg-white shadow p-2'>
                <UploadIcons/>
                <input type="file" className='hidden' />
            </label>
        </div>
    </div>
  )
}
