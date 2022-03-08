import React from 'react';
import {useParams} from 'react-router-dom';
import HookApiCalls from '../../HookApiCalls';
import CircularProgress from '@mui/material/CircularProgress';

const ViewsItem=()=> {
  const {id}=useParams()
  const {ApiData,loader}=HookApiCalls(`http://localhost:8000/viewsData/${id}`)
  const {product,imgUrl,views,sells,users}=ApiData

  if (loader) return (
    <div className='dashboardCntnr'>
       <center>
       <CircularProgress style={{position:'absolute', top:'50%', left:'50%', color:'inherit'}}/>
       </center>
    </div>
  )
  return (
    <div className='dashboardCntnr'>
        <center>
            <h1>{product}</h1>
            <p>Views: {views}</p>
            <p>Sells: {sells}</p>
            <p>Users:{users}</p>
            <img src={imgUrl} alt={product} style={{height:"20rem",width:"20rem"}} />
        </center>
      </div>
  );
}

export default ViewsItem;