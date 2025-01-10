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
export const BaseLayout:any = hoc(usePageProps, props => {
  const { me, children }:any = props
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

 
  // useEffect(() => {
  //   // Ensure Chatra object is initialized
  //   window.Chatra = window.Chatra || function () {
  //     (window.Chatra.q = window.Chatra.q || []).push(arguments);
  //   };

  //   // Open Chatra programmatically based on an external event
  //   const openChat = () => {
  //     console.log('Chatra modal opened');
  //   };

  //   const closeChat = () => {
  //     console.log('Chatra modal closed');
  //   };

  //   // Example: Trigger open/close based on an application event
  //   document.addEventListener('chat-open', openChat);
  //   document.addEventListener('chat-close', closeChat);

  //   // Cleanup
  //   return () => {
  //     document.removeEventListener('chat-open', openChat);
  //     document.removeEventListener('chat-close', closeChat);
  //   };
  // }, []);

  return (
    <>
      {!pathName.includes('book-read') && <Header user={ me?.data} />}
      <MassageAnimation/>
      <LottieAnimation
        autoplay
        loop
        className={`${visble ? "":"hidden"} w-96 h-96 fixed bottom-[1px] z-50 right-[1px] cursor-pointer`}
      />
        {children}
      {!pathName.includes('book-read') && <Footer/>}
    </>
  )
})
