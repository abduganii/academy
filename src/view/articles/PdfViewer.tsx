import { useEffect, useState } from "react";

export default function PdfViewer({id}:any) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the PDF file from the backend
    const fetchPdf = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}articles/download/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/pdf',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch PDF');
        }

        // Create a blob URL for the PDF
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
      console.log(url, 'url ==>>')
        setPdfUrl(url);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPdf();

    // Cleanup blob URL on component unmount
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, []);

  return (
    <div className="pdf-viewer">
      {pdfUrl ? (
        <iframe
          src={pdfUrl}
          width="100%"
          height="600px"
          title="PDF Viewer"
        />
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
}
