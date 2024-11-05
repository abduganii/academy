'use client'
import Image from "next/image";
import Container from "../container";
import { BurgerIcons, HendmenIcons, SearchIcons } from "../icons";
import Link from "next/link";
import { Button, Modal, useDisclosure } from "@nextui-org/react";
import Lang from "../lang";
import AuthMadal from "../auth";

export default function Header() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
      <header className="w-full fixed z-30 py-4 bg-[#01263A] text-white">
        <Container className={"flex items-center gap-8"}>
           <span className="cursor-pointer">
            <BurgerIcons/>
           </span>
           <Link className="mr-auto" href={'/'}>
             <Image  src={'/logo.svg'} width={256} height={44} alt={"logo"}/>
           </Link>

            <span className="cursor-pointer">
              <HendmenIcons/>
            </span>
            <span className="cursor-pointer">
              <SearchIcons/>
            </span>
            <Lang/>
            <Button onPress={onOpen} className="font-inter text-[14px] font-semibold leading-[24px] " color="default" radius="sm">
               Регистрация
            </Button>
        </Container>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <AuthMadal />
        </Modal>
      </header>
    )
  }