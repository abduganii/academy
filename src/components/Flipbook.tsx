'use client'
import React, { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from "react-pageflip";
import Container from './container';
import {  SwiperLeftIcons, SwiperRightIcons } from './icons';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import  * as pdfjs  from 'pdfjs-dist';
import PdfCanvas from '@/view/books/pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

interface IPops {
  onFlip:any;
}

// React.forwardRef(({ data }, ref)
const Flipbook = React.forwardRef(({onFlip}:IPops,ref:any) => {
  const [doc,setDoc] = useState<any>()

    useEffect(()=>{
      const renderPdf = async () => {
        const loadingTask = pdfjs.getDocument('https://api.proacademy.calypso.uz/books/download/1');
        const pdfDocument = await loadingTask.promise;
        setDoc(pdfDocument)
      };
      renderPdf()
    },[])
  return (
    <>
      <Container className='max-w-[1282px]  pt-[116px] flex items-center  justify-between py-[40px]'>
        <Button onClick={() =>ref.current.pageFlip().flipPrev()} className='w-12  min-w-12 h-12 mr-2 px-0 rounded-[40px] flex items-center justify-center  bg-[#F5F5F5]'><SwiperRightIcons/></Button>   
          <HTMLFlipBook 
            width={600}
            ref={ref}
            size='stretch'
            maxWidth={1400}
            onFlip={onFlip}
            height={600}
            startZIndex={1}
            useMouseEvents={false}
            swipeDistance={50}
            mobileScrollSupport={true}
            drawShadow={false}
            clickEventForward={true}
            className={'w-full max-w-[1400px] min-w-min'}
            style={{}}
            startPage={1}
            minWidth={600}
            minHeight={600}
            maxHeight={600}
            flippingTime={850}
            usePortrait={false} 
            autoSize={false} 
            maxShadowOpacity={0} 
            showCover={false} 
            showPageCorners={false} 
            disableFlipByClick={false}              
            >
            <div className="demoPage overflow-hidden px-5 bg-white">  
            <PdfCanvas pdfDocument={doc}  pageNum={1}/>
            </div>
            <div className="demoPage overflow-hidden px-5 bg-white">  
            <PdfCanvas pdfDocument={doc}  pageNum={2}/>
            </div>
            <div className="demoPage overflow-hidden px-5 bg-white">  
            <PdfCanvas pdfDocument={doc}  pageNum={3}/>
            </div>
            <div className="demoPage overflow-hidden px-5 bg-white">  
            <PdfCanvas pdfDocument={doc}  pageNum={4}/>
            </div>
            <div className="demoPage overflow-hidden px-5 bg-white">  
            <PdfCanvas pdfDocument={doc}  pageNum={5}/>
            </div>
            <div className="demoPage overflow-hidden px-5 bg-white">  
            <PdfCanvas pdfDocument={doc}  pageNum={6}/>
            </div>
          </HTMLFlipBook>
        <Button className='w-12 ml-2 min-w-12 h-12 rounded-[40px] flex items-center justify-center px-0  bg-[#F5F5F5]'onClick={() =>ref.current.pageFlip().flipNext()} ><SwiperLeftIcons/></Button>   
      </Container>
    </>

  );
})

export default Flipbook;
