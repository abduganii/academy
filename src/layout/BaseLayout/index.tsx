'use client'
import Footer from "@/components/footer";
import Header from "@/components/header";
import { setUserMe } from "@/lib/features/index";
import { useAppDispatch } from "@/lib/hooks";
import { hoc, mutationFn } from "@/utils/index";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { usePageProps } from "./props/index";
import LottieAnimation from "@/components/header/man-animation";
import animationData from "../../../public/hiii.json";
import MassageAnimation from "@/components/Animation-message";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from "@nextui-org/react";
export const BaseLayout:any = hoc(usePageProps, props => {
  const { me, children }:any = props
  const [isOpen ,setIsopen] = useState(false)
  const pathName = usePathname()
  const dispatch = useAppDispatch()

  const [visble,setVisble] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisble(false)
    }, 60000);
    return () => {
      clearTimeout(timeout)
    }; 
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in',
      once: true,
    });
  }, []);
  useEffect(() => {
    dispatch(setUserMe(me))
    if(me){
      mutationFn({
        url: '/watchers/live',
        method: "PATCH",
      })
    }
  },[me])
  useEffect(() => {
    if(me){
        const interval = setInterval(() => {
          mutationFn({
                  url: '/watchers/live',
                  method: "PATCH",
                })
      }, 60000);
      return () => clearInterval(interval);
    }
  },[me])

  const CloseFunc = () => {
    setIsopen(false)
    const chatraDivs = document.getElementsByClassName("chatra--pos-right");
    for (let i = 0; i < chatraDivs.length; i++) {
      const chatraDiv = chatraDivs[i] as HTMLElement;
      chatraDiv.style.display = "none"; 
      (window as any).Chatra?.closeChat()
    }
  };
  const OpenFuct = () => {
    setIsopen(true)
    const chatraDivs = document.getElementsByClassName("chatra--pos-right");
    for (let i = 0; i < chatraDivs.length; i++) {
      const chatraDiv = chatraDivs[i] as HTMLElement;
      chatraDiv.style.display = "inline-block"; // Example style change
    }
    (window as any).Chatra?._openChat()
  };

  useEffect(() => {
    CloseFunc()
    setIsopen(false)
    window.addEventListener("click", CloseFunc);

    return () => {
      window.removeEventListener("click", CloseFunc);
    };

    
  }, []);

  return (
    <>
      {!pathName.includes('book-read') && <Header user={ me?.data} />}
      {isOpen ?<MassageAnimation/>:""}
      <LottieAnimation
        autoplay
        loop
        isPOpen={isOpen}
        className={`${visble ? "":"hidden"} ${isOpen? "right-[300px]":"right-[-40px]"}  transition-all duration-500 ease-in-out w-96 h-96 fixed bottom-[5px] z-50  cursor-pointer`}
      />
      <Button  className="fixed bg-[#0d8bcd] w-[180px] text-white bottom-[20px] z-[9000000] right-[20px]" onClick={OpenFuct}>
        whrite us
      </Button>
        {children}
      {!pathName.includes('book-read') && <Footer/>}
    </>
  )
})
