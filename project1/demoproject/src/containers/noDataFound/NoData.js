import React from 'react'
import { Button } from '@mui/material'
import {useNavigate} from 'react-router-dom'

const NoData = () => {

    const navigation = useNavigate();
    const NavigateTo = ()=>{
        navigation("/")
    }
  return (
    <div className='dashBoardCntnr'>
        <div  style={{position:'absolute', top:'50%', left:'50%', color:'inherit'}}>
        <h1>No Data Found</h1>
       <Button variant='contained' onClick={NavigateTo}>Back</Button>
        </div>
    </div>
  )
}

export default NoData