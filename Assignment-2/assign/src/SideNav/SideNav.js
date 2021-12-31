import React,{useState} from 'react'
import './SideNav.css'
import tag from './Images/search-bar.svg'
import tag1 from './Images/info.svg'


const SideNav = (props) => {
    
const [values, setValues] = useState(0)
     const setValue = (e) =>{
         setValues(e.target.value)
         props.onChangeValue(e.target.value)
     }


    return (
        <div className='sidenav'>
            <a href='Header.js'>Home</a>{`>`}<span>Hybrid Electric Water</span><br  /><br />
            <p className='text'>Tell Us About Your Project</p><hr />
            <span className='location'>Location</span>
            <div className='inputs'>
            <input className='input1'/>
            <select className='input2' name="cars" id="cars">
            <option>Single Family</option>
            <option>Saab</option>
            <option>Opel</option>
            <option>Audi</option>
            </select>
            {/* <input className='search'/> */}
            <img style={{border:"1px solid", backgroundColor:'orange'}}src={tag} alt='hello'></img>
            </div><br />
            <span className='location'> Size Your Water Heater</span>&nbsp;<img src={tag1} alt='info_image'></img>
            <div className='size'>
            <input className='Range' type='range'min='0' max='6' value= {values} onChange={setValue}/>
            <div className='p'>
                {values}
            </div>
            <input className='range1' />
            </div><br />
            <span className='location'>What Is Your Current Hot Water Fuel Type</span>
            <select className='input2' name="gas" id="gas">
            <option>Natural Gas</option>
            <option>Saab</option>
            <option>Opel</option>
            <option>Audi</option>
            </select>
            <div><br />
            <span className='location'>Is This A Water Heater Emergency</span>&nbsp;<img src={tag1} alt='info_image'></img><br/>
            <button className='button1'>No</button>
            <button className='button1'>Yes</button>
            </div><br />
            <p style={{color:'green'}}>Got it! We submit it our partner your need for immediate help</p>
            <hr />
        </div>
    )
}

export default SideNav
