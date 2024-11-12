import { Link } from '@/i18n/routing';
import React from 'react'
interface iArticlesCard {
  className?:string;
    title:string,
    text?:string,
    date:string,
    link:string;
}

export default function ArticlesCard({title,link,text,date,className}:iArticlesCard) {
  return (
    <Link href={link}  className={`${className && className} group w-full inline-block bg-[#F1F1F1] dark:bg-[#001E45] rounded p-4`}>
        <h3 className="group-hover:text-[#13399A]  text-base font-semibold leading-6 text-left mb-3  line-clamp-2 overflow-hidden" >
        {title}
        </h3>
        <p className="text-[14px] font-medium leading-[24px]  mb-4  line-clamp-1 overflow-hidden">
       {text}
        </p>
        <p className="text-sm font-normal leading-6 text-left flex items-center gap-2" ><span className="bg-[#D5DADD] w-[6px] h-[6px] rounded-full"></span> 
        {/* {dayjs(date).format('YYYY.MM.DD')} */}
            {date}
        </p>
    </Link>
  )
}
