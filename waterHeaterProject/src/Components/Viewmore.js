import React from "react";
import './Viewmore.css';
import Popup from "reactjs-popup";
import Page1details from "./Page1details";



function Viewmore() {

    let Page1ArrayObj =[
        {
            
        }
    ];
  return (
    <div>
    <Popup modal trigger={
      <button
        style={{
          textAlign: "center",
          border:'none',
          color: "green",
          padding: "4px 0px",
          backgroundColor: "lightgrey",
          display:"block",
          width:"100%",
          // margin:"auto",
          cursor: "pointer"
        }}
    
      >
        View More Details
      </button>
    }>
        {
            close =>(
                <>
                    <div className='modalContainer'>
                        <div className='pageContainer'>
                            <Page1details/>
                        </div> 
                     <button type='button' className='cancel' onClick ={()=> close()}>close</button>

                    </div>
                </>
            )
        }
    </Popup>

    </div>
  );
}

export default Viewmore;
