'use client'
import Footer from "@/components/footer";
import Header from "@/components/header";
import { setUserMe } from "@/lib/features/index";
import { useAppDispatch } from "@/lib/hooks";
import { hoc, mutationFn } from "@/utils/index";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { usePageProps } from "./props/index";

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
        {children}
      {!pathName.includes('book-read') && <Footer/>}
    </>
  )
})
