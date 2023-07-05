import useModal from "@/hooks/UseModal";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

export default function DocumentModal(props: {
  documentURL: string;
  isOpen: boolean;
  toggle: () => void;
}) {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });
  interface AllPagesProps {
    pdf: string;
  }
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const pdf = props.documentURL;
  return (
    <>
      <section className={`document-modal ${props.isOpen ? "active" : ""}`}>
        <div className="inner">
          {/* <iframe
            src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${props.documentURL}`}
            title="Document Frame"
          ></iframe> */}
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            {numPages &&
              Array.from(new Array(numPages), (_el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
          </Document>
          <span className="close-btn" onClick={props.toggle}></span>
        </div>
      </section>
    </>
  );
}
