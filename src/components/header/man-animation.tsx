// components/LottieAnimation.tsx
'use client'
import { FC } from "react";
import Lottie from "react-lottie-player";

interface LottieAnimationProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

const LottieAnimation: FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  className,
}) => {
  return (
    <Lottie
      loop={loop}
      play={autoplay}
      animationData={animationData}
      className={className}
    />
    
  );
};

export default LottieAnimation;
