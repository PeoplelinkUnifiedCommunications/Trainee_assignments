import React,{useContext} from 'react'
import {store} from '../../App'
import tag from "../../Images/Searching applicable rebates and incentives.svg"
import ProductCard from '../ProductCard'
import info from "../../Images/info-tooltip.svg"
import heater from "../../Images/hpwh-process-tab.png"
import "./index.css"

const Header=()=>{
    const [data]=useContext(store)
    const {rangeVal,list}=data
    let value=rangeVal/10-2
    console.log(list)
    let updatedData=list.slice(0,value)
    return(
        <div className='whole-head'>
            <div className='header-container'>
                <img src={tag} alt='logo' />
                <h3>Your project qualifies you for <span>incentives</span></h3>
            </div>
            <div style={{padding:"20px",width:"100%"}}>
            <h3>Your Hybrid Electric Water Heater Recommended Options </h3>
            <hr style={{width:"95%"}}/>
            <div className='wrapping'>
            {updatedData.map((each)=>(<ProductCard key={each.id} dataList={each}/>))}
            </div>
            <div>
                <button>See More Options</button>
            </div>
            <h4>The Heat Pump Hot Water Advantage</h4>
            <div className="bottom-container">
                <div >
                    <h4 style={{color:"green"}}>Clean & Healthy Air&nbsp;<img src={info} alt="Info" /></h4>
                    <p>No in-home air pollution or <br/>
                    greenhouse gas emission</p>
                </div>
                <div className="bottm-content">
                    <h3 style={{color:"green"}}>
                        Reduced Carbon Footprint &nbsp;<img className="Info" src={info} alt="Info" />
                    </h3>
                    <p>No in-home air pollution or <br/>
                    greenhouse gas emission</p>
                </div>
                <div className="bottm-content">
                    <h3 style={{color:"green"}}>
                        Lower Energy Bills &nbsp;<img className="Info" src={info} alt="Info" />
                    </h3>
                    <p>Up to 75% reduction in energy <br/>
                    use</p>
                </div>
            </div>
            <hr style={{ margin: '0px 25px' }} />
            <h2>How Hybird Electric Water Heaters Work</h2>
             
                <p>Process</p>
                <hr style={{ margin: '0px 25px'  }} />
                <p style={{width:"98%"}}>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                <img className="heater-img" src={heater} alt="Heater" />
              
            </div>
        </div>
    )
}
export default Header;