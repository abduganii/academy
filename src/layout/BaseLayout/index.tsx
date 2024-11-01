import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

export default function BaseLayout({children}: React.PropsWithChildren<{}>) {
  return (
    <>
    <Header/>
        {children}
    <Footer/>
    </>
  )
}
