import React,{useState,useContext} from "react"
import {store} from '../../App'
import simg1 from "../../Images/img1.png"
import simg2 from "../../Images/img2.png"
import simg3 from "../../Images/img3.png"
import PopupRight from "../PopupRight"
import PopupBottom from "../PopupBottom"
import "./index.css"

const PopupPage=(props)=>{
    const {value}=props
    const [data]=useContext(store)
    const {list}=data
    const [valueData,setValueData]=useState(value)
    const indexData=valueData.id
    const onClickNext = () => {
		if (indexData < list.length ) {
			setValueData(list[indexData+1])
		}
	};

	const onClickPrev = () => {
		if (indexData > 0) {
			setValueData(list[indexData-1])
		}
	};

    return(
        <div className="popup">
        <div style={{display:'flex',justifyContent:"space-between"}}>
        <p>Heat Pump Electric Water Heater {'>'} Rheem Performance Platinum 50</p>
        <div className='navBtnCon'>
			<button type='button' className='navBtn' onClick={onClickPrev} style={{marginRight:"10px"}}>
				<div className='flexRow1' >
					<span className='span'>{"<"}</span>
						<p className='navText'>Previous</p>
					</div>
			</button>
			<button className='navBtn addon' type='button' onClick={onClickNext}>
				<div className='flexRow1'>
					<p className='navText'>Next</p>
					<span style={{marginLeft:"30px"}} className='span'>{">"}</span>
				</div>
			</button>
				</div>
        </div>
        <hr/>
        <div className="popup-whole">
            <div className="popup-side">
                <img  src={simg1} alt="img1"/>
                <img  src={simg2} alt="img2"/>
                <img  src={simg3} alt="img3"/>
            </div>
            <div>
            <PopupRight value={valueData}/>
            <PopupBottom/>
            </div>
        </div>            
        </div>
    )
}
export default PopupPage;