import { useEffect, useRef } from 'react';
import  * as pdfjs  from 'pdfjs-dist';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

interface PdfCanvasProps {
  pageNum: number;
  pdfDocument:any
}

const PdfCanvas = ({pdfDocument, pageNum }: PdfCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const renderPdf = async () => {
      const page = await pdfDocument.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1 });
      const canvas = canvasRef.current;
      const context = canvas?.getContext('2d');
      if (canvas && context) {
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        
        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise;
      }
    };
    
    renderPdf();
  }, [pageNum,pdfDocument]);

  return <canvas ref={canvasRef}></canvas>;
};

export default PdfCanvas;
