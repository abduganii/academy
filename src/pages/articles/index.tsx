"use client"
import Container from '@/components/container'
import { LeftIcons } from '@/components/icons'
import { Link } from '@/i18n/routing'
import { Select, SelectItem } from '@nextui-org/react'
import React from 'react'

export default function ArticlesPage() {
  return (
 
    <>
    <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-[#2C2C2C] bg-center bg-no-repeat bg-cover' 
    //  style={{"backgroundImage":`url('/r6.jfif')`}}
     >
    <Container className='z-20'>
        <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left mb-4'>Articles</h4>
        <div className='flex'>
                <Select
                    size='sm'
                    label="Select an book" 
                    className="w-full max-w-[220px]" 
                    >
                    <SelectItem key={1}>
                        items 1
                    </SelectItem>
                    <SelectItem key={2}>
                        items 2
                    </SelectItem>
                </Select>
                </div>
    </Container>
    {/* <div className='w-full h-[372px] bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div> */}
    </div>

    <Container className='mt-[60px] mb-[80px]'>
     { [1,2,3,4,5].map((e)=>( 
          <Link  href={`/articles/${2}`} key={e} className="w-full cursor-pointer flex items-center  justify-between bg-[#F5F5F5] dark:bg-[#001E45] dark:text-[#FFFFFF] p-4 rounded-lg mb-4">
          <div>
          <h3 className="text-[16px] font-medium leading-[26px] mb-3" >
          Вниманию кандидатов, рекомендованных к обучению в магистратуру
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-[14px] font-medium leading-[24px]">
            Т. Усмонов
            </p>
            <p className="text-sm font-normal leading-6 text-left flex items-center gap-2" ><span className="bg-[#D5DADD] w-[6px] h-[6px] rounded-full"></span> 
            {/* {dayjs(e?.created_at).format('YYYY.MM.DD')} */}
            22.02.2024
            </p>
          </div>
          </div>
          <span className='rotate-90'>  <LeftIcons/></span> 
      </Link>
      ))}
    </Container>
    </>
  )
}
