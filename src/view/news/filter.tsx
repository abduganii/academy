'use client'
import { Select, SelectItem } from '@nextui-org/select'
import React from 'react'
import { usePathname } from '@/i18n/routing'
import { useRouter } from '@/i18n/routing';
import { useSearchParams } from 'next/navigation'
import { Input } from '@nextui-org/react';
import { Debounce } from '@/hooks/debounce';
import { useTranslations } from 'next-intl';
export default function FilterPage({section}:any) {
    const { replace } = useRouter();
    const pathname = usePathname();
      const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
  const t = useTranslations()

    const handlePage  = (p:any,type:any) => {
         params.set(type, p  );
       
        replace(`${pathname}?${params.toString()}`);
    };
  
  return (
    <div className='flex justify-end gap-[19px]'>
   
    <Select
        size='sm'
        label={t('sections')} 
        classNames={{trigger:"bg-[#FFFFFF99]"}}
        className="w-full max-w-[220px]" 
        onChange={(e)=>handlePage(e?.target?.value,'type')}
        >
            {
                section?.data?.map((e:any)=>(
                <SelectItem key={e?.id} value={e?.id}>
                    {e?.name}
                </SelectItem>
                ))
            }
            
    </Select>
    <Input
    size='lg'
    classNames={{inputWrapper:"bg-[#FFFFFF99] rounded-lg" }} 
        className='w-full max-w-[220px] rounded-sm'
        type={'text'}
        placeholder={t('select-title')}
        key="outside" 
        onChange={Debounce((e)=>handlePage(e.target?.value,'name'),500)}
        />
    </div>
  )
}
