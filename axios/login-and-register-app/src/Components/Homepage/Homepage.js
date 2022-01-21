import React from 'react';
import './Homepage.css'
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className='homepage'>
      <h1>Hello Homepage</h1>
      <div>
        <Link to="/register">
          <button className='button'>Register Page</button>
        </Link>
      </div>
    </div>)
}

export default Homepage;
