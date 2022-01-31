import React from 'react';
import Sidebar from '../Sidebar';
import Content from '../Content';
import './index.css'

function MainComponent() {
  return <div className='flexRows mainContainerBase'>
      <div className="sidebarMenu">
          <Sidebar/>
      </div>
      <div className="content">
          <Content/>
      </div>
  </div>;
}

export default MainComponent;
