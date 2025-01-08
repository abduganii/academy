'use client'
import Footer from "@/components/footer";
import Header from "@/components/header";
import { setUserMe } from "@/lib/features/index";
import { useAppDispatch } from "@/lib/hooks";
import { hoc, mutationFn } from "@/utils/index";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { usePageProps } from "./props/index";
import LottieAnimation from "@/components/header/man-animation";
import animationData from "../../../public/hiii.json";

export const BaseLayout:any = hoc(usePageProps, props => {
  const { me, children }:any = props
  const pathName = usePathname()
  const dispatch = useAppDispatch()

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
  return (
    <>
      {!pathName.includes('book-read') && <Header user={ me?.data} />}
      {/* <LottieAnimation
        animationData={animationData}
        autoplay
        loop
        className="w-96 h-96 fixed top-[30px] right-[30px]"
      /> */}
        {children}
      {!pathName.includes('book-read') && <Footer/>}
    </>
  )
})
