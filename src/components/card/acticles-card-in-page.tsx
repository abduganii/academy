import { Link } from '@/i18n/routing'
import React from 'react'
import { LeftIcons } from '../icons';
import Image from 'next/image';
import TextParag from '../text';

interface iArticlesCard {
    className?:string;
      title:string,
      name?:string,
      date:string,
      link:string;
      iconsType?:string;
      image?:string
  }
  
  export default function ArticlesCardPage({title,link,name,date,iconsType,className,image}:iArticlesCard) {
  return (
    <Link  href={link}  className={`${className && className} w-full cursor-pointer flex items-center  gap-[14px] bg-[#F5F5F5] dark:bg-[#27272A] dark:text-[#FFFFFF] p-4 rounded-lg`}>
      { image ? <Image   
            src={image}
            width={70} 
            height={104} 
            alt={title} 
            title={title}/>
            :""}
          <div>
            <TextParag type='title' className="text-[16px] font-medium leading-[26px] mb-3" >
            {title}
            </TextParag>
            <div className="flex items-center gap-2">
              <TextParag className="font-medium">
            {name}
              </TextParag>
              <TextParag className="text-sm font-normal leading-6 text-left flex items-center gap-2" ><span className="bg-[#D5DADD] w-[6px] h-[6px] rounded-full"></span> 
              {/* {dayjs(e?.created_at).format('YYYY.MM.DD')} */}
              {date}
              </TextParag>
            </div>
          </div>
          {iconsType == 'left'  ? <span className='ml-auto rotate-90'>  <LeftIcons/></span>:""} 
      </Link>
  )
}
