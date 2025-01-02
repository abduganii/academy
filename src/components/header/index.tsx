'use client'
import { Avatar } from '@nextui-org/react'
import Image from "next/image";
import Container from "../container";
import { BurgerIcons, HendmenIcons, SearchIcons, XIcons } from "../icons";
import Link from "next/link";
import { Button, Input, Modal, Popover, PopoverContent, PopoverTrigger, Select, SelectItem, useDisclosure } from "@nextui-org/react";
import Lang from "../lang";
import AuthMadal from "../auth";
import { useState } from "react";
import { HeaderSiteBarrArr } from "../../../musk/data";
import HeaderCongif from "./congif";
import { useRouter } from 'next/navigation';

export default function Header({ user }: any) {
  const router = useRouter()
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [openSiteBar,setOpenSiteBar] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)

    return (
      <header className="w-full fixed  border-black border-b z-40 py-4 bg-[#01263A] text-white">
        <Container className={"flex items-center gap-8"}>
           <span className="cursor-pointer" onClick={()=>{
            setOpenSiteBar(!openSiteBar)
            setOpenSearch(false)
            }}>
           {openSiteBar ?   <XIcons color='white'/>:<BurgerIcons/>}
           </span>
           <Link className="mr-auto" href={'/'}>
             <Image  src={'/logo.svg'} width={256} height={44} alt={"logo"}/>
           </Link>
          
          <Popover className="w-full max-w-[400px]" placement="bottom" showArrow={true}>
            <PopoverTrigger>
              <span className="cursor-pointer"> <HendmenIcons/></span>
            </PopoverTrigger>
            <PopoverContent >
               <HeaderCongif/>
               </PopoverContent>
          </Popover>
            <span className="cursor-pointer" onClick={()=>{
              setOpenSearch(!openSearch)
              setOpenSiteBar(false)
              }}>
              <SearchIcons/>
            </span>
          <Lang />
          {
            user ?
              <>
                <Avatar onClick={()=>router.push('/profile/information')}  className="cursor-pointer" size='md'  name={user?.firstName }/> 
              </>
              :
            <Button onPress={onOpen} className="font-inter dark:text-black text-[14px] font-semibold leading-[24px] " color="default" radius="sm">
               Регистрация
            </Button>
          }
        </Container>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <AuthMadal />
        </Modal>
        

        <div className={`${openSiteBar ? 'h-[307px]':'h-0'} overflow-hidden transition-all duration-500 ease-in-out w-full absolute top-[77px] left-0 bg-[#01283DCC]`}>
          <Container className="py-[25px] flex gap-4">
              {
                HeaderSiteBarrArr?.map(e=>(
                  <div className="w-full text-white" key={e?.id}>
                    <h4 className="text-[20px] w-full leading-[24px] font-semibold mb-[8px]"> {e?.title}</h4>
                    {e?.child?.map(ch=>(
                      <Link href={ch?.link} onClick={()=>setOpenSearch(false)} key={ch.id} className="text-[16px]  w-full inline-block mb-2 leading-[24px] font-medium">{ch.text}</Link>
                    ))}
                  </div>
                ))
              }
          </Container>
        </div>
        <div className={`${openSearch ? 'h-[80px] ':'h-0'}  overflow-hidden   transition-all duration-500 top-[77px] ease-in-out w-full absolute left-0 bg-[#01263A]`}>
          <Container className="py-[16px] max-w-[900px] flex gap-4">
          <Input size='lg' radius="sm" startContent={<SearchIcons color="black" />} type='search' placeholder='Поиск' className='w-full  text-black rounded-lg'/>
            <Select
              size='sm'
              label="Select an book" 
               selectionMode="multiple"
              className="w-full max-w-[160px] rounded-lg text-black" 
              >
              <SelectItem key={1}>
                  items 1
              </SelectItem>
              <SelectItem key={2}>
                  items 2
              </SelectItem>
          </Select>
              <Button size="lg"  className="w-full rounded-lg bg-[#5E5E5E] text-white max-w-[160px] ">
              Поиск
              </Button>
          </Container>
        </div>
      </header>
    )
  }