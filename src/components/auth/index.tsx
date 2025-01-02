"use client";
import React, { useState } from 'react';
import { Button, ModalBody, ModalContent } from '@nextui-org/react';
import FirstAuth from './components/first';
import AuthAuth from './components/auth';
import RegisterForm from './components/registerForm';
import RegisterCode from './components/registerCode';
import SeccesAuth from './components/SeccesAuth';
import AuthForm from './components/authForm';
import ForgetFrom from './components/forgetFrom';

interface iProps {
    steComp?: React.Dispatch<React.SetStateAction<number>>;
    onClose?: React.Dispatch<React.SetStateAction<number>>;
}

export default function AuthModal({ close }: any) {
    const [email,setEmail]= useState()
    const compArr: Array<{ id: number; comp: (props: iProps) => JSX.Element }> = [
       {
           id: 1,
           comp: ({ steComp }: iProps) => <FirstAuth steComp={steComp} />
       },
       {
        id: 2,
        comp: ({ steComp }: iProps) => <RegisterForm steComp={steComp} setEmail={setEmail} />
    },
    {
        id: 3,
        comp: ({ steComp }: iProps) => <RegisterCode steComp={steComp} email={email} />
    },
    {
        id: 4,
        comp: ({ onClose }: iProps) => <SeccesAuth text={'Вы успешно зарегистрированы на сайт через систему One-ID'} onClose={onClose} />
    },
    {
        id: 5,
        comp: ({ onClose }: iProps) => <SeccesAuth text={`Вы успешно зарегистрированы на сайт по почте ${email}`} onClose={onClose} />
    },

       {
        id: 6,
        comp: ({ steComp }: iProps) => <AuthAuth steComp={steComp} />
    },
    {
        id: 7,
        comp: ({ steComp }: iProps) => <AuthForm steComp={steComp} setEmail={setEmail}/>
    },
    {
        id: 8,
        comp: ({ onClose }: iProps) => <SeccesAuth text={'Вы успешно  aвторизованы  на сайт через систему One-ID'} onClose={onClose} />
    },
    {
        id: 9,
        comp: ({ onClose }: iProps) => <SeccesAuth text={`Вы успешно aвторизованы  на сайт по почте ${email}`} onClose={onClose} />
    },
    {
        id: 10,
        comp: ({ steComp }: iProps) => <ForgetFrom steComp={steComp} />
    },
    {
        id: 11,
        comp: ({ steComp }: iProps) => <ForgetFrom steComp={steComp}  withCode={true}/>
    }
    ];

    const [comp, steComp] = useState<number>(1);
  
    return (
        <ModalContent className="bg-[#fff] max-w-[433px] py-[25px] px-[32px]">
              {(onClose) => (
            <ModalBody className="text-center p-0">
                {
                    compArr.find((e) => e.id === comp)?.comp({ steComp ,onClose})
                }
            </ModalBody>
              )}
        </ModalContent>
    );
}
