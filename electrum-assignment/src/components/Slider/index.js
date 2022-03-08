
import React,{useContext} from 'react'
import {store} from '../../App'
import searchImage from "../../Images/search-bar.svg"
import impImage from "../../Images/info-tooltip.svg"
import './index.css'

const Slider=()=>{
    const [data,setData]=useContext(store)
    const {rangeVal}=data
    return(
        <div className="slider-container">
          <p style={{color:"#003963"}}>Home {'>'} <span style={{color:"black"}}>Hybrid Electric water Heater</span></p>
          <div style={{borderBottom:"2px solid #a8a7a7"}}>
          <h2>Tell Us About Your Project</h2>
          </div>
          <div>
          <p style={{marginBottom:'7px'}}>Location</p>
          <div className='location-container'>
              <input type="text" style={{width:"50%"}} placeholder='1465 Spyglass Ct, Encinitas CA 92024'/>
              <select style={{width:"35%",fontSize:"20px",marginRight:"5px"}}>
                  <option>Select Family</option>
                  <option>Select Family</option>
                  <option>Select Family</option>
              </select>
              <img style={{width:"10%", backgroundColor:"#00B098"}} src={searchImage} alt="search"/>
          </div>
          </div>
          <div style={{display:"flex"}}>
            <p>Size your water heater </p>
            <img src={impImage} alt="imp" style={{marginLeft:"10px"}}  />
          </div>
    
          <div style={{display:"flex",width:"100%" ,border:'2px solid black'}}>
              <input style={{marginLeft:"10px",width:"50%"}} type="range" value={rangeVal} min="30" max="80" step="10"  onChange={e=>setData({...data,rangeVal:e.target.value})} />
              <hr style={{height:"100%",marginTop:"0px"}}/>
              <p className='range-par'>{rangeVal} Gallons <br/>(2-4 people)</p>
          </div>
          <div style={{marginBottom:"30px"}}>
          <p style={{marginBottom:"5px"}}>What is your current hot water fuel type?</p>
          <select style={{width:"40%",height:"50%",fontSize:"20px"}}>
              <option>Natural Gas</option>
              <option>Artificial Gas</option>
              <option>Natural Gas</option>
          </select>
          </div>
          
          <div style={{display:"flex"}}>
              <p>Is this a water heater emergency?</p>
              <img src={impImage} alt="imp" style={{marginLeft:"10px"}} />
          </div>
          <div className="button-container">
              <button style={{width:"50%"}}>No</button>
              <button style={{backgroundColor:"green",width:"50%"}}>Yes</button>
          </div>
          <div style={{color:"green",borderBottom:'2px solid black'}}>
          <p>Got it! We will submit to our partner your need for <br/>
             immediate help</p>
          </div>
        </div>
    )
}
export default Slider