import React from 'react'

interface IAnalytics {
    image:string;
    title:string;
    text:string;
    className?:string;
    onClick?:any;
    Isopen:any
}

export default function AnalyticsCard({
    image,
    title,
    text,
    Isopen,
    className,
    onClick
}:IAnalytics) {
  return (
    <div onClick={onClick} className={`${className && className} relative flex items-end bg-left transition-all duration-500 ease-in-out bg-no-repeat w-full  h-[364px] cursor-pointer overflow-hidden rounded-3xl text-white`} style={{"backgroundImage":`url(${image})`}}>
       <div 
        style={{
          background: 'linear-gradient(184.12deg, rgba(217, 217, 217, 0) 39.4%, rgba(0, 47, 175, 0.54) 77.87%, rgba(0, 47, 175, 0.6) 96.64%)',
        }} 
        className="h-full absolute  w-full top-0 left-0 z-10"
        >
        </div> 
      {  <div className={`${Isopen ? "w-[500px] min-w-[500px]":"w-0"} z-20 overflow-hidden transition-all duration-500 ease-in-out`}>
     <h3 className='font-bold leading-[32px] text-[16px] mt-auto ml-[20px] z-20'>{title}</h3>
     <p className='font-medium leading-[20px] text-[14px]  ml-[20px] mb-[26px] z-20'>{text}</p>
     </div>
     }
    </div>
  )
}
