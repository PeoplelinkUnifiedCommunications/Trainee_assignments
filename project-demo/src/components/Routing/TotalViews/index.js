import React from 'react';
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import HookApiCalls from "../../HookApiCalls"

const TotalViews = () => {
  const {ApiData,loader}=HookApiCalls("http://localhost:8000/viewsData")
  const navigation=useNavigate()
  const NavigateToSingle=(id)=>{
    navigation(`/views/${id}`)
    }
   if (loader) return (
      <div className='dashboardCntnr'>
         <center>
         <CircularProgress style={{position:'absolute', top:'50%', left:'50%', color:'inherit'}}/>
         </center>
      </div>
    ) 
  return (
    <div className='dashboardCntnr'>
        <div className="flexCol" style={{width:"80%"}}>
            <div className="flexRow jcBetween">
                <h1>ID</h1>
                <h1>ProductName</h1>
                <h1>Views</h1>
            </div>
            <hr/>
            {ApiData && ApiData.map(each=>{
              const onNavigateToPath=()=>{
                NavigateToSingle(each.id)
              }
              return (<div key={each.id} onClick={onNavigateToPath}>
      <div className="flexRow jcBetween brdrBottomSM"   >
                <h1>{each.id}</h1>
                <h1 >{each.product}</h1>
                <h1>{each.views}</h1>
      </div>
  </div>)
            })}
        </div>
    </div>
  
  )
};

export default TotalViews;