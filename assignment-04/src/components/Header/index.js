
import {AiOutlineSearch, AiOutlineMail} from 'react-icons/ai'
import {HiOutlineBell} from "react-icons/hi"
import {FiSettings} from 'react-icons/fi'
import {BiArrowToRight} from "react-icons/bi"

import './index.css'

function Header(){
    return(
        <div className='header-bg-container'>
            <div className='search-icon-container'>
                <BiArrowToRight/>
                <div className='header-input-container'>
                    <AiOutlineSearch/>
                    <input className='header-search-bar' type="text" placeholder='Find Project'/>
                </div>
            </div>
            <div className='header-right-part-bg-container'>
                <span className='span-elemet-header'><HiOutlineBell/></span>
                <span className='span-elemet-header'><AiOutlineMail/></span>
                <span className='span-elemet-header'><FiSettings/></span>    
            </div>
        </div>
    )
}
export default Header