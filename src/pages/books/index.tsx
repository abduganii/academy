'use client'
import BooksCard from '@/components/card/books-card'
import Container from '@/components/container'
import { Button} from '@nextui-org/react'
import { Select, SelectItem } from '@nextui-org/select'
import Image from 'next/image'
import React from 'react'

export default function BooksPage() {
  return (
    <>
        <div className='relative pt-[76px] mb-[60px] w-full h-[372px] flex items-center bg-center bg-no-repeat'  style={{"backgroundImage":`url('/r1.png')`}} >
            <Container className='z-20'>
                <h4 className='text-white font-inter text-[40px] font-bold leading-[48.41px]  text-left'>Книги</h4>
                <div className='flex justify-end gap-[19px]'>
                <Select
                    size='sm'
                    label="Select an book" 
                    className="w-full max-w-[220px]" 
                    >
                       <SelectItem key={1}>
                           items 1
                        </SelectItem>
                        <SelectItem key={2}>
                           items 2
                        </SelectItem>
                    </Select>
                    <Select
                    size='sm'
                    label="Select an book" 
                    className="w-full max-w-[220px]" 
                    >
                       <SelectItem key={1}>
                           items 1
                        </SelectItem>
                        <SelectItem key={2}>
                           items 2
                        </SelectItem>
                    </Select>
                </div>
            </Container>
            <div className='w-full h-[372px] bg-gradient-to-r from-black/90 to-black/30 absolute z-10  top-0 left-0'></div>
      </div>
      <Container>
        <div className='flex flex-wrap gap-6'>
            {/* <div key={e} className='colm3'> */}
            {
                [1,2,3,4,5,6,7,8]?.map(e=>(
                    <BooksCard
                        key={e}
                        link={`/books/${e}`}
                        className='colm3'
                        image={'/books.png'}
                        title='Think and Grow Rich Every Day'
                        price='350 000 сум'
                />
                ))
            }
        </div>
        <div className='text-center mb-[60px] mt-[32px]'>
            <Button className='bg-black text-white inline-block w-full max-w-[368px]'>
            Просмотреть все
            </Button>
        </div>
      </Container>
    </>
  )
}
