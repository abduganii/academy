import PdfViewer from '@/components/read-books'
import React from 'react'

export default function page() {
  return (
    <><PdfViewer  fileUrl={'/public/sample.pdf'} /></>
  )
}
