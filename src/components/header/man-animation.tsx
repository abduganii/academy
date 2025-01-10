// components/LottieAnimation.tsx
'use client'
import { FC } from "react";
import Lottie from "react-lottie-player";
import  { useEffect, useState } from "react";
import animationData from "../../../public/hiii.json";
import animationSalData from "../../../public/salom.json";
import animationidData from "../../../public/idle.json";
import animationcloudData from "../../../public/text_cloud.json";


interface LottieAnimationProps {
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

const LottieAnimation: FC<LottieAnimationProps> = ({
  loop = true,
  autoplay = true,
  className, 
}) => {
  const [file,setFile] = useState<any>(animationData)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFile(animationidData)
    }, 2000);
    return () => {
      clearTimeout(timeout)
    }; 
  }, []);

  
  
  return (
    <>
  
      <Lottie
      loop={loop}
      play={autoplay}
      animationData={file}
      className={className}
      onClick={()=>setFile(animationSalData)}
      onMouseLeave={()=>{
        setFile(animationidData)
      }}
    />
    </>
    
  );
};

export default LottieAnimation;
