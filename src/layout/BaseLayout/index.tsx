'use client'
import Footer from "@/components/footer";
import Header from "@/components/header";
import { setUserMe } from "@/lib/features/index";
import { useAppDispatch } from "@/lib/hooks";
import { hoc } from "@/utils/index";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { usePageProps } from "./props/index";

export const BaseLayout:any = hoc(usePageProps, props => {
  const { me, children }:any = props
  const pathName = usePathname()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setUserMe(me))
  },[me])
  return (
    <>
      {!pathName.includes('book-read') && <Header user={ me?.data} />}
        {children}
      {!pathName.includes('book-read') && <Footer/>}
    </>
  )
})
