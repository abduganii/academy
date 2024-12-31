'use client'
import React from 'react'
import { usePathname } from '@/i18n/routing'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Pagination({ pagination }: any) {
    const { replace } = useRouter();
    const pathname = usePathname();
      const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
  
    const handlePage  = (p:any) => {
      if(p <= pagination?.pageCount){
        params.set('page', p  );
        replace(`${pathname}?${params.toString()}`);
      }
    };
  
  return (
      <>
       { pagination?.pageCount > 1 ?  <div className="w-full flex justify-center space-x-2 mt-6">
            {Array.from({ length: pagination?.pageCount }, (_, index) => index + 1).map((p) => (
              <button
                key={p}
                onClick={() => handlePage(Number(p))}
                className={`px-4 py-2 rounded-lg border ${
                  p === pagination?.page
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-blue-500 border-gray-300"
                } hover:bg-blue-100`}
              >
                {p}
              </button>
            ))}
      </div>:""}
      </>
  )
}
