import React from "react";
function Slide(){
    // const slide = document.querySelector("input[type=range]");
    // const value=document.querySelector(".value");
    // slide.textContent = slide.value;
    // slide.oninput = function(){
    //     value.textContent=this.value;
    // }
    return(
        <div className="slide">
            <div className="range">
                <input type="range" min="0" max="100"/>
            </div>
            <div className="value" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                100
            </div>
        </div>
    )
}
export default Slide;