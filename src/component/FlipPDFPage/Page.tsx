import React, {  useRef } from 'react'
import { Page as ReactPdfPage,   } from 'react-pdf';

const Page = React.forwardRef(
  (props: { pageNumber: number; width: number|string; height: number|string }, ref) => {
  
    const getCanvas = useRef(null);
  
      return (
        <div>
          <ReactPdfPage
            renderAnnotationLayer={false}
            width={props.width}
            canvasRef={getCanvas}
            pageNumber={props.pageNumber}
          />
        </div>
      );
  });

export default Page