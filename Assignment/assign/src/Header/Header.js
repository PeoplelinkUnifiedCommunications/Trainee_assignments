import React,{useState} from 'react'
import './Header.css'

const Header = (props) => {

    const[slot, setSlot] = useState('');
    const handleClick = (e) =>{
        e.preventDefault();
        props.handle(slot);
        alert(`${slot} slots are Available`)
    }
    return (
        <div className='main'>
        <div className='header'>
            <div className='content'>
            <h1>Online Parking</h1>
            <input className='input' type="text" placeholder="Enter the total no of slots available" onChange ={(e)=>setSlot(e.target.value)} value={slot}></input>
            <br/><br />
            <button className='button' onClick={handleClick}>Submit</button>
        </div>
        </div>
        </div>
    )
}

export default Header
