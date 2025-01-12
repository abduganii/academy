// components/LottieAnimation.tsx
'use client'
import { FC } from "react";
import Lottie from "react-lottie-player";
import  { useEffect, useState } from "react";
import animationData from "../../../public/hiii.json";
import animationSalData from "../../../public/salom.json";
import animationidData from "../../../public/idle.json";
import animationcloudData from "../../../public/text_cloud.json";
import { Button, Modal, ModalBody, ModalContent, useDisclosure } from '@nextui-org/react';
import { AIIcons } from "../icons";

interface LottieAnimationProps {
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  onClick?:any
}

const LottieAnimation: FC<LottieAnimationProps> = ({
  loop = true,
  autoplay = true,
  className, 
  onClick,
}) => {
  const [file,setFile] = useState<any>(animationData)
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
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
      onClick={()=>{
        setFile(animationSalData)
        onOpen()
        onClick()
      }}
      onMouseLeave={()=>{
        setFile(animationidData)
       
      }}
    />

<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className="bg-[#fff] max-w-[480px] py-[25px] px-[32px]">
                {() => (
              <ModalBody  className='p-0 '>
                  <h3 className="text-center  text-[24px] leading-[32px]  font-semibold">Для лёгкой работы
                  используйте Сopilot Ai  <AIIcons/>
                  </h3>
                  <p className="pt-[25px] pb-[29px]">Сopilot AI — вашим умный помощник. Он ускорит вашу работу: анализируйте данные, обрабатывайте информацию в два клика. Copilot AI работает с внешними ресурсами и локальными файлами, делая сложное простым.</p>
                    <a target="_blank" className="text-center" href={`https://chromewebstore.google.com/detail/copilot-sidebar-for-chrom/ncjedehfkpnliaafimjhdjjeggmfmlgf?hl=ru&utm_source=ext_sidebar`}>
                  <Button  className="bg-[#2962FF] text-white">
                  Установить Copilot
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
