import React from 'react';
import MainContent from '../MainContent/MainContent';
import Sidebar from '../Sidebar/Sidebar';

function Home() {
  return <div>
      <div className='flexRow'>
        <Sidebar/>
        <MainContent/>
      </div>
  </div>;
}

export default Home;
