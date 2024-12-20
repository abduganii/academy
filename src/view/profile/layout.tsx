"use client"
import Container from '@/components/container'
import { IChildren } from '@/types'
import React from 'react'
import { ProfileLayoutArr } from '../../../musk/data'
import { usePathname, useRouter } from 'next/navigation'
import { LogoutIcons } from '@/components/icons'
import { Link } from '@/i18n/routing'

export default function ProfileLayout({children}:IChildren) {
   const pathName = usePathname()
    const router = useRouter()
    const value:any = ProfileLayoutArr?.find(e=>pathName.includes(e?.link))
   return (
    <Container className='py-[140px]'>
        <h3 className='mb-[26px] text-[32px] font-semibold leading-[46px]'>
        {value?.text}
        </h3>
        <div className='flex items-start  gap-[24px]'>
            <div className='relative  w-full max-w-[300px] bg-[#F5F5F5] p-[12px] rounded-lg'>
                {
                    ProfileLayoutArr?.map(e=>(

                        <Link className={`relative z-20 mb-[4px] text-[#252C32] w-full flex items-center gap-3 p-[12px] rounded-lg text-[16px] font-normal leading-[26px]`}  href={e?.link} key={e?.id}>
                            <span>
                                {e?.icons()}
                            </span>
                            {e?.text}
                            </Link>
                    ))
                }
                <div onClick={()=>router.push('/')} className={`cursor-pointer mb-[4px] text-[#252C32] w-full flex items-center gap-3 p-[12px] rounded-lg text-[16px] font-normal leading-[26px]`}>
                    <span>
                    <LogoutIcons/>
                    </span> 
                    logout
                </div>
                <div  style={{top: 12 + (54 * (Number(value.id - 1)))}} className={`absolute  profileanimation   transition-all duration-300 ease-in-out left-[12px] h-[48px]   rounded-lg bg-white`}/>
            </div>
            <div className='w-full'>{children}</div>
        </div>
    </Container>
  )
}
