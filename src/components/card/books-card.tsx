import { Link } from "@/i18n/routing";
import Image from "next/image";
import TextParag from "../text";

interface iBooksCard {
    image:string;
    title:string;
    link:string;
    className?:string;
    price:string | boolean;
}

export default function BooksCard({
    image,
    title,
    price,
    link,
    className
}:iBooksCard) {

  return (
    <Link href={link}  className={`${className && className} group w-full`}>
        <Image
            src={image}
            width={170} 
            height={224} 
            className="w-[170px] h-[224px] object-cover"
            alt='Think and Grow Rich Every Day' 
            title='Think and Grow Rich Every Day'
        />
        <TextParag  type="title" font={14} line={24} className='font-inter  font-semibold  line-clamp-2 group-hover:text-[#13399A]'>{title}</TextParag>
        <div className='h-[1px] w-[88px] bg-[#0000001A] my-[6px]'></div>
        <TextParag className='font-inter  font-medium  text-left text-[#2962FF]'>{price}</TextParag>
    </Link>
  )
}
