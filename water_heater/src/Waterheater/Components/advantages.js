import React from "react";
const Aside =()=>{
return(
    <>
    <div className="aside">
        <button type="button" className="btnn" >See more options</button>
        <h3 >The Heat pump Hot water Advantage:</h3>
        <div className="resColRow ">
        <ul className="pdngMD">
            <li className="liststyle">
                <b>Clean and Healthy Air</b></li>
            <li  className="liststyle ext pdng">No in-home air pollution or green house emission</li>
           
        </ul>
        <ul className="pdngMD">
            <li className="liststyle"><b>reduced carbon fotrprint</b></li>
            <li  className="liststyle ext pdng">carbon offset equivalent for ur home equals <b className="fntcolor">23 trees planted</b></li>
           
        </ul>
        <ul className="pdngMD">
            <li className="liststyle"><b>Lower energy bills</b></li>
            <li  className="liststyle ext pdng">upto 75% of energy in reduction use</li>
           
        </ul>
        
        </div>
        <hr/>



    </div>
    </>
)
}
export default Aside;