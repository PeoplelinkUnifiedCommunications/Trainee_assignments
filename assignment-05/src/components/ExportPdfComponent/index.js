import React,{useRef} from 'react';
import { useReactToPrint } from "react-to-print";
import FormComponent from '../FormComponent'
import './index.css'

function ExportPdfComponent() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (<>
  <div className="print__section">
    <br/>
    <br/>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div ref={componentRef} className="card">
            <div className="float__start">
              <h3 className="card-title mb-0 heading">{localStorage.getItem("NAME")} Resume</h3>
            </div>
            <hr />
            <div className="float__infoss">
              <FormComponent/>
            </div>
          </div>
          <button onClick={handlePrint} className="print__button button-print">  Print </button>
        </div>
      </div>
    </div>
  </div>
    </>     
  )
}

export default ExportPdfComponent;
