import {Link} from 'react-router-dom'

import './index.css'

const FormData = () =>{

    const userData = localStorage.getItem("userData")
    let data = JSON.parse(userData)
    
    if (data === null){
        data = []
    }

    const dataList  = data.length === 0 ? true : false

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
                        {dataList &&  (
                            <li  className="no-data">
                                <h1 className="no-data-msg">
                                    NO DATA FOUND. ADD SOME DATA
                                </h1>
                            </li>
                        )}
                        {!dataList && (data.map(eachData => (
                            <FormData key={eachData.id} eachData={eachData} />)
                        ))}
                    </ul>
                        <p className='create-new-para'>
                            Want to add data? 
                            <Link to='/form'>
                            <span>ADD NEW DATA</span>
                            </Link>
                        </p>
                    
                </div>  
        </div>
                
    )
}

export default FormData