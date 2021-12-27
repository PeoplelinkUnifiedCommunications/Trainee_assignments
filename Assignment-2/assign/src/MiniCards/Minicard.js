import React from 'react'
import './MiniCard.css'
import SmallCard from './SmallCards/SmallCard'

const Minicard = (props) => {
    return (
        <div className='Mini_Card_Container'>
        <div className='Mini_flex'>
          <SmallCard /> 
          <SmallCard /> 
          <SmallCard /> 
          <SmallCard /> 
          <SmallCard /> 
          </div>
          <div className='article2'>
            <div className='child_article'>
            <h3>Base Price ................ <span>$1,799</span> </h3>
                <span>(Installation not included)</span>
                <h5 style={{padding:"3px 10px"}}>Federal Tax Credit  ..............<span> $ 300 </span></h5>
                <h5 style={{padding:" 3px 10px"}}>Utility Incentives.................<span> $ 1,000 </span></h5>
                <h3>Equipment Cost<span>.......$499</span></h3>
                <h5 style={{padding:'5px',border:"2px solid green",width:"100%" ,margin:'5px 0', borderRadius:'5px', textAlign:'center',fontWeight:'bolder'}}>Your Est Annual Savings is <span>$120</span></h5>
            </div>
          </div>
        </div>
    )
}

export default Minicard
