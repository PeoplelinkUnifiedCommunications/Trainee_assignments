import { BsSearch } from "react-icons/bs";
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import logo from '../Navbar/logo.png'
import './index.css'

const Navbar = ()=>{
    const [searchValue,setSearchValue] = useState("")
    const dispatch = useDispatch()
    const onChangeSearchValue=(event)=>{
        setSearchValue(event.target.value)
        dispatch({type:"SEARCH",payload:event.target.value})
    }

    return(
        <nav className="navbar-container">
            <div className="navbar-content">
                <div className="logo-container">
                    <img src={logo} className="logo" alt="logo"/>
                    <h1 className="logo-heading">Online-Parking Lot</h1>
                </div>
                <div className="input-search-container">
                    <input type="search" value={searchValue} className="input-search" placeholder="Search Your Car/Bike" onChange={onChangeSearchValue}/>
                    <BsSearch className="search-icon"/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar