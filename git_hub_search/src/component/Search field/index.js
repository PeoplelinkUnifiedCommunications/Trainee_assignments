import React, { useState } from 'react';
import DataDisplay from '../DataDisplay';
import './index.css'

function Search() {
    const [userDetails, setUserDetails] = useState("")
    const [data, setData] = useState({})
    const [display, setDisplay] = useState("")


    const onChangeHandler = (e) => {
        setUserDetails(e.target.value)
    }


    const onSubmithandler = (e) => {
        e.preventDefault()
        if (userDetails !== ""){
        fetch(`https://api.github.com/users/${userDetails}`)
        .then((result) => {
            setDisplay(result.status === 200)
            return result.json();

        }).then ((value) => {
            setData(value)
            setUserDetails("");
            
        })}else{
            setDisplay(false)
        }
        
    }


return <div className="form-total-container" >
    <form onSubmit={onSubmithandler} className="total-form-container">
        <div className="total-container">
            <div className="input-container">
                <input type="text" placeholder="Search a GitHub User" value={userDetails} onChange={onChangeHandler}/>
            </div>
        </div>
    </form>
    
    
    {display === true ? 
        <div className="data-container">
            {<DataDisplay 
            key={data.id}
            details={data}
            />}
        </div>
    : null}
    {display === false && <div><h1 className="showing-message">*Please enter valid GitHub username</h1></div>}

</div>
}

export default Search;
