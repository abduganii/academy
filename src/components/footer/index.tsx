import Link from "next/link";
import Container from "../container";
import Image from "next/image";
import { SitebarArr } from "../../../musk/data";
import { FacebookIcons, InstagramIcons, TelegramIcons, YouTobeIcons } from "../icons";

export default function Footer() {
  return (
    <footer className="bg-[#01263A] pt-10 pb-3 text-white">
       <Container >
          <Link href={'/'}>
             <Image  className="mb-8" src={'/logo.svg'} width={256} height={44} alt={"logo"}/>
           </Link>  
           <div className="flex items-start gap-10 mb-10">
             {
              SitebarArr?.map((e)=>(
                <div className="w-full" key={e?.id}>
                  <h4 className="font-inter text-[16px] font-semibold leading-[26px] ">{e?.text}</h4>
                  {
                    e?.child?.map((el)=>(
                      <p className="mt-1 font-inter text-[14px] font-normal leading-[24px] text-left" key={el?.id}>{el?.text}</p>
                    ))
                  }
                </div>
              ))
             }
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
