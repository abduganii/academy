import { EyeFilledIcon, EyeSlashFilledIcon, SwiperRightIcons } from '@/components/icons';
import { Button, Input } from '@nextui-org/react'
import React from 'react'
interface iPops {
    steComp : any
}
export default function RegisterCode({
    steComp}:iPops) {
        const [isVisible, setIsVisible] = React.useState(false);

        const toggleVisibility = () => setIsVisible(!isVisible);
      
  return (
    <div >
        <div className='flex items-start mb-[54px]'>
           <div onClick={()=>steComp(2)} className='cursor-pointer'>
            <SwiperRightIcons/>
           </div>
           <div className='mx-auto'>
                <p className='pb-1 text-[24px] font-semibold leading-[32px] '>Введите код</p>
                <p  className='text-[14px] font-normal leading-[24px] text-[#6A6A6A]'>На вашу почту был выслан код подтверждения,
                введите его</p>
            </div>
        </div>
    <Input className='mb-[31px] text-left' type='password'  label='код' placeholder="Введите код"
        key="outside
        " endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
            {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
            </button>
        }
        labelPlacement={'outside'}/>
    <Button className='w-full bg-[#2962FF] text-white  rounded-lg' size='md' onPress={()=>steComp(5)}>
    Зарегистрироваться
    </Button>
</div>
  )
}
