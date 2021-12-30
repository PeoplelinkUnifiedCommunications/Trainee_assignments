import "./index.css"
import logo from "../../Parking_Lot/logo.png"
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

function Header(){
    const searchInput=useSelector(state=>state.searchInput)
    const dispatch=useDispatch();
    return (
        <div className="header-container">
            <div className="img-container">
                <img className="car-img" src={logo} alt="Logo"/>
                <h1 className="header">OnLine-Parking Lot</h1>
            </div>
            <div className="search-container">
                <input className="search" type="search" value={searchInput} onChange={e=>dispatch({type:"SEARCH",payload:e.target.value})} placeholder="Search Your Car/Bike"/>
                <BsSearch className="search-img"/>
            </div>
        </div>
    )
}
export default Header;
