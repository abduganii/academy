import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import Image from "next/image";

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
  const locale = useLocale()

  return (
    <Link href={link} locale={locale} className={`${className && className} group w-full`}>
        <Image
            src={image}
            width={170} 
            height={224} 
            alt='Think and Grow Rich Every Day' 
            title='Think and Grow Rich Every Day'
        />
        <h3 className='font-inter text-[14px] font-semibold leading-[24px] line-clamp-2 group-hover:text-[#13399A]  '>{title}</h3>
        <div className='h-[1px] w-[88px] bg-[#0000001A] my-[6px]'></div>
        <p className='font-inter text-[14px] font-medium leading-[24px] text-left text-[#2962FF]'>{price}</p>
    </Link>
  )
}
