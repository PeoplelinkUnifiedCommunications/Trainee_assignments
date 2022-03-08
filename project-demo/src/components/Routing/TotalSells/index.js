import React from 'react';
import HookApiCalls from '../../HookApiCalls';

const TotalSells = () => {
  const {ApiData,loader,error}=HookApiCalls('http://localhost:8000/eet@gmail.com')
  console.log(error)
  console.log(ApiData)
  if (error!==null) return (
    <div className='dashboardCntnr'>
       <center>
       <h1>{error}</h1>
       </center>
    </div>
  )
  return (
    <div className='dashboardCntnr'>
      <h1>Total Sells</h1>
    </div>

  )
};

export default TotalSells;


