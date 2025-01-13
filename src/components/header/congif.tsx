"use client"
import { changeLike } from '@/lib/features';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Button, Slider, Tooltip } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'

const useDarkMode = ():any => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark", "black");
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const ChangeDarkMode = (value:string) => {
    setTheme(value);
  };

  return [theme, ChangeDarkMode];
};


export default function HeaderCongif() {
  const {fontSize} = useAppSelector(store => store.fontSize);
    const dispatch = useAppDispatch();
    const t = useTranslations()
    const [theme, ChangeDarkMode] = useDarkMode();

    const ChangeLikeFunc = (e:number)=>{
      dispatch(changeLike(e));
    } 
    
  return (
   <div className="w-full max-w-[400px] py-[20px]">
    <h3>{t('view')}</h3>
    <div className='flex gap-1 my-[10px]'>
    <Tooltip showArrow={true} content="Simple">
      <Button className='dark:text-black' onClick={()=>ChangeDarkMode('light')} >A</Button>
    </Tooltip>
    <Tooltip showArrow={true} content="Dark">
      <Button onClick={()=>ChangeDarkMode('dark')} className='bg-slate-500  text-white'>A</Button>
    </Tooltip>
    <Tooltip showArrow={true} content="Black">
      <Button onClick={()=>ChangeDarkMode('black')} className='bg-black text-white'>A</Button>
    </Tooltip>
    </div>
    <Slider
      label="Размер текста" 
      step={1} 
      maxValue={100} 
      minValue={0} 
      defaultValue={Number(fontSize) ||0}
      className="max-w-md "
      onChange={(e)=>ChangeLikeFunc(Number(e))}
    />
   </div>
  )
}
