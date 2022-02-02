import React from 'react';

import profile from './profile.jpeg'

import './index.css'

function ExpandingHeader() {
  return (
    <div className='expanding-name'>
    <div className='expanding-profile'>
        <img src={profile} alt='deepika profile' className='deepika-profile'/>
      </div>
      <div>
        <p style={{color: "white"}}>Name: Ravella Gnana Deepika</p>
        <p style={{color: "white"}}>Associate Software Developer</p>
      </div>
</div>
  );
}

export default ExpandingHeader;
