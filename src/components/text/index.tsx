'use client'

import { useAppSelector } from "@/lib/hooks";
interface Iprops {
  children:any,
  className?:string,
  font?:number,
  line?:number,
  type?:string
}

export default function TextParag({children,type,className, font,line}:Iprops) {
    const {fontSize} = useAppSelector(store => store.fontSize);
  return (
    <>
      {
        type == "title"?
        <h3 style={{"fontSize":` ${(font || 16) + ((font||16) * Number(fontSize) / 100) || (font||16)}px`,"lineHeight":` ${(line||26) + ((line||26) * Number(fontSize) / 100) || (line||26)}px`}} className={className && className}>{children}</h3>:
        <p style={{"fontSize":` ${(font||14) + ((font||14) * Number(fontSize) / 100) || (font||14)}px`,"lineHeight":` ${(line||20) + ((line||20) * Number(fontSize) / 100) || line|| 20}px`}} className={className && className}>{children}</p>
      }
    </>
  )
}
