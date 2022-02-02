import React from 'react';

import './index.css'

function HomeExpanding() {
  return (
    <div className='home-expanding'>
        <div className='home-header'>
             <h2>Assignment-04</h2>
        </div>
        <div>
          <p className='home-description'>Developed using React Hooks concepts.
          Hooks allow us to "hook" into React features such as state and lifecycle methods. 
          The React useState Hook allows us to track state in a function component.
          State generally refers to data or properites that need to be tracking in an application.
          The useEffect Hook allows you to perform side effects in your components.
          Some examples of side effects are: fetching data, directly updating the DOM, and timers.
          useEffect accepts two arguments. The second argument is optional.
      
          </p>
        </div>
    </div>
  );
}

export default HomeExpanding;
