import { IChildren } from '@/types'
import ProfileLayout from '@/view/profile/layout'
import React from 'react'

export default function layout({children}:IChildren) {
  return (
    <>
    <ProfileLayout>
        {children}
     </ProfileLayout>
    </>
  )
}
