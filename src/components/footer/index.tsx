import Link from "next/link";
import Container from "../container";
import Image from "next/image";
import { HeaderSiteBarrArr } from "../../../musk/data";
import { FacebookIcons, InstagramIcons, TelegramIcons, YouTobeIcons } from "../icons";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations()
  return (
    <footer className="bg-[#01263A] pt-10 pb-3 text-white">
       <Container >
          <Link href={'/'}>
             <Image  className="mb-8" src={'/logo.svg'} width={256} height={44} alt={"logo"}/>
           </Link>  
           <div className="flex items-start gap-10 mb-10">
             {
              HeaderSiteBarrArr?.map(e=>(
              <div className="w-full text-white" key={e?.id}>
                {/* <h4 className="text-[20px] w-full leading-[24px] font-semibold mb-[8px]"> {t(e?.title)}</h4> */}
                {/* {e?.child?.map(ch=>(
                  <Link href={ch?.link}  key={ch.id} className="text-[16px]  w-full inline-block mb-2 leading-[24px] font-medium">{t(ch.text)}</Link>
                ))} */}
              </div>
              ))
            }
             <div className="w-full text-white" >
                  <h4 className="text-[20px] w-full leading-[24px] font-semibold mb-[8px]"> Посещения</h4>
                    <p className="text-[16px]  w-full inline-block mb-2 leading-[24px] font-medium">Общее:  213233332</p>
                    <p className="text-[16px]  w-full inline-block mb-2 leading-[24px] font-medium">Сегодня: 213233332</p>
                    <p className="text-[16px]  w-full inline-block mb-2 leading-[24px] font-medium">Вчера: 213233332</p>
                    <p className="text-[16px]  w-full inline-block mb-2 leading-[24px] font-medium">За неделю: 213233332</p>
                    <p className="text-[16px]  w-full inline-block mb-2 leading-[24px] font-medium">За месяц: 213233332</p>
                </div>
           </div>
           <div className="flex items-center justify-between pt-10 border-t border-slate-600">
              <p className="font-inter text-[14px] font-normal leading-[24px] text-slate-400">© 2024. Все права защищены</p>

              <div className="flex items-center gap-4">
                <TelegramIcons color={"transparent"}/>
                <InstagramIcons color={"transparent"}/>
                <FacebookIcons color={"transparent"}/>
                <YouTobeIcons color={"transparent"}/>
              </div>

              <div className="flex items-center">
                <p className="font-inter text-[14px] font-normal leading-[24px] text-slate-400">Разработано</p>
              <Link href={'/'}>
                <Image src={'/logoCol.svg'} width={153} height={42} alt={"logo"}/>
              </Link> 
              </div>
           </div>

       </Container>
    </footer>
  )
}
