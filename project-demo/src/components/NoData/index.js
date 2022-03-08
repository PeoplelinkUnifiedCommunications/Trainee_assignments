import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Button} from "@mui/material"
import { BiErrorCircle } from "react-icons/bi";

const NoData = () => {
    const navigation=useNavigate()
    const BackToHome=()=>{
        navigation("/")
    }
    return (
        <div className='dashboardCntnr'>
        <div style={{position:'absolute', top:'50%', left:'50%', color:'inherit'}}>
        <BiErrorCircle className='errorIcon' />
        <h1>No Page Found</h1>
        <h4>........</h4>
        <Button variant='contained' onClick={BackToHome}>Back</Button>
        </div>
        </div>
    )
}

export default NoData