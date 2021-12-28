import React from 'react'
import '../../stylesheets/sidenav.css'
const Sidenav = () => {
    return (
        <>
            <div className="colFlex sidenavbg pdngMD">
               
                <div className='rowFlex'>
                    <h6 className='SNHedding'>
                        Tell US About Your Project
                    </h6>
                </div>
                <label className='rowFlex pdngVSM location'>Location</label>
                <div className='rowFlex'>
                    <input type="text" className='pdngSM INPut' placeholder="1456 spyglass Ct,Enclinias,CAn92024 " />
                    <select className='brdr'>
                        <option >single-family</option>
                        <option >single-family</option>
                        <option >single-family</option>
                        <option >single-family</option>
                    </select>
                    <div className=" searchIMG"> 
                        <img src="images/search-bar.svg" alt="" className=" searchIMGS" />
                    </div>
                </div>
                <div className='rowFlex pdngVSM'>
                    <lable className="range">Size your water heater <img src="images/info-tooltip.svg" alt="" /></lable>
                </div>
                <div className='rowFlex brdr '>
                    <input type="range" className='pdngXS rangedetailsleft' /><hr />
                    <span className="rangedetails "> 50 gallons(3-5 people)</span>
                </div>
                <div className='rowFlex pdngVSM'>
                    <p className='text'>What is your current water heater fuel type?</p>
                </div>
                <div className='rowFlex'>
                <select className="box2" >
                    <option className='option' >natural gas</option>
                    <option className='option' >natural gas</option>
                    <option className='option' >natural gas</option>
                </select>
                </div>
                <div className='rowFlex'>
                    <span className='Emergence'>Is this a water heater emergence ? <img src=" images/info-tooltip.svg" alt=""/></span>
                </div>
                <div className='rowFlex NOYES '>
                    <button className='NO'>No</button>
                    <button className='YEs'>yes</button>
                </div>
            </div>
        </>
    )
}

export default Sidenav;
