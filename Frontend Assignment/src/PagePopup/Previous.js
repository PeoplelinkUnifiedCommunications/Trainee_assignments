import React  from "react";
import './Previous.css'
function Previous(props){
    return(
        <div className="popup_header">
        <div className="pop">
            Heat Pump Electric Water Heater {'>'} Reheem Performance Platinum 50
        </div>
        <div className="buttons" style={{display:'flex'}}>
           <button className="previous"  onClick={props.onPrev}>{'<'} Previous</button>
           <button className="next"  onClick={props.onNext}>next {'>'} </button>
        </div>
    </div>
    )
}
export default Previous