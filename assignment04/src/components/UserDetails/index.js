import {Link} from 'react-router-dom'
import UserData from '../UserData'
import { useContext } from 'react'
import context from '../../context/listContext'
import './index.css'

const UserDetails = () =>{

    const contextValues = useContext(context)
    const { dataList } = contextValues
    

    const isDataList  = dataList.length === 0 ? true : false

    return(
        <div className='data-main-container'>
            <div className="data-container">
                    <h1 className="heading">FORM DETAILS</h1>
                    <ul className="data-table">
                        <li className="data-list-item">
                            <h1 className="data-table-headers">NAME</h1>
                            <h1 className="data-table-headers">EMAIL</h1>
                            <h1 className="data-table-headers">AGE</h1>
                        </li>
                        {isDataList ? (
                            <li  className="no-data">
                                <h1 className="no-data-msg">
                                    NO DATA FOUND. ADD SOME DATA
                                </h1>
                            </li>)
                        :dataList.map((eachData)=>(<UserData eachData={eachData} key={eachData.id}/>))}
                        
                    </ul>
                        <p className='create-new-para'>
                            Want to add data? <Link to='/form' className="data-link">ADD NEW DATA</Link>
                        </p>
                    
                </div>  
        </div>
                
    )
}

export default UserDetails