// components/LottieAnimation.tsx
'use client'
import { FC } from "react";
import Lottie from "react-lottie-player";
import  { useEffect, useState } from "react";
import animationData from "../../../public/hiii.json";
import animationSalData from "../../../public/salom.json";
import animationidData from "../../../public/idle.json";
import { Button, Modal, ModalBody, ModalContent, useDisclosure } from '@nextui-org/react';
import { AIIcons } from "../icons";
import { useTranslations } from "next-intl";

interface LottieAnimationProps {
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  isPOpen?:boolean
}

const LottieAnimation: FC<LottieAnimationProps> = ({
  loop = true,
  autoplay = true,
  className, 
  isPOpen
  
}) => {
  const [file,setFile] = useState<any>(animationData)
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const t = useTranslations()
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFile(animationidData)
    }, 2000);
    
    return () => {
      clearTimeout(timeout)
    }; 
  }, [isPOpen]);

  
  return (
    <>
      <Lottie
      loop={loop}
      play={autoplay}
      animationData={isPOpen?animationSalData: file}
      className={className}
      onClick={()=>{
        onOpen()
      }}
      onMouseLeave={()=>{
        setFile(animationidData)

      }}
    />

<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className="bg-[#fff] max-w-[480px] py-[25px] px-[32px]">
                {() => (
              <ModalBody  className='p-0 '>
                  <h3 className="text-center  text-[24px] leading-[32px]  font-semibold">  {t('AI-title')}<AIIcons/>
                  </h3>
                  <p className="pt-[25px] pb-[29px]">{t('AI-text')}</p>
                    <a target="_blank" className="text-center" href={`https://chromewebstore.google.com/detail/copilot-sidebar-for-chrom/ncjedehfkpnliaafimjhdjjeggmfmlgf?hl=ru&utm_source=ext_sidebar`}>
                  <Button  className="bg-[#2962FF] text-white">
                  {t('download-copilot')}
                  </Button>
                    </a>
              </ModalBody>
                )}
          </ModalContent>
        </Modal>
    </>
    
  );
};

export default LottieAnimation;
