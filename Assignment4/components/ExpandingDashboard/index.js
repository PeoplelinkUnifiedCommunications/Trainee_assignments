import React from 'react';

import ExpandingHeader from '../ExpandingHeader';
import {Link} from 'react-router-dom'

import './index.css'

       
function ExpandingDashboard() {
  return (
  <div className='expanding-app'>
      <ExpandingHeader />
      <div className='dasboard-container'>
          <div className='dashboard-name'>
            <div className='expanding-list'>
                <Link to='/home' className='expanding-link'>
                  <div className='exapnding-order-list'>
                      Home
                  </div>
                </Link>

                <Link to='/expandingCards' className='expanding-link'>
                  <div className='exapnding-order-list1'>
                      Expanding Cards
                  </div>  
                  </Link>

                  <Link to='/github' className='expanding-link'>
                    <div className='exapnding-order-list2'>
                        GitHub
                    </div>
                  </Link>

                  <Link to='/notifications' className='expanding-link'>
                    <div className='exapnding-order-list3'>
                          Notifications
                    </div>
                  </Link>

                  <Link to='/testimonials' className='expanding-link' >
                    <div className='exapnding-order-list4'>
                      <span style={{color: "black"}}>Testimonial</span>
                    </div>
                  </Link>
            </div>
          </div>
      </div>
  </div>
  );
}

export default ExpandingDashboard;
