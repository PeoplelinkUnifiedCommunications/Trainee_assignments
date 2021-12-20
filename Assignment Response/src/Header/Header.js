import React,{useState}from 'react';
import './Header.css';
function Header(props) {
    const [slot, setSlot] = useState("");
    const handleClick = (e) => {
        e.preventDefault();
      props.handleSlots(slot);
      alert(`${slot} slots are available `)
    };
    return (
      <div className="Header">
        <div className="header-cotent">
          <h1>Online Parking </h1>
          <br></br>
          <form onSubmit={handleClick}> 
          <input
            type="text"
            placeholder="Enter the total number of Slots Available"
            onChange={(e) =>
            setSlot(e.target.value)}
            value={slot}
          />
          <br />
          <br />
          <button type="submit"> Submit </button>
          </form>
        </div>
      </div>
    );
  }
export default Header
