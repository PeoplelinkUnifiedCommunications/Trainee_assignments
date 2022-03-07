import React from 'react';
import FetchApi from '../../customHook/fetchApi';
import {useParams} from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';

import './index.css'


const ViewsCount = () => {
  
  const {id} = useParams()
  
  const {ApiData, loader} = FetchApi(`http://localhost:5000/viewsData/${id}`)

  const {product, imgUrl, views, sells, users} = ApiData

  if(loader) return(
    <div className='dashBoardCntnr'>
     <CircularProgress  style={{position:'absolute', top:'50%', left:'50%', color:'inherit'}}/>
    </div>)
   
  return (
    
    <div className='dashBoardCntnr'>
    <center>
    <h1>Views and Sales Count</h1>
     <img src={imgUrl} alt='gfhg' className='imgHeight'/>
      <h1>Product Name:-{product}</h1>
      <h1>Views: {views}</h1>
      <h1>Sells: {sells}</h1>
      <h1>Users: {users}</h1>
      </center>
    </div>
  )
};

export default ViewsCount;
