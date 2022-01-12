import React from 'react'
import { Link } from 'react-router-dom';
import './Data.css'

function Data() {
    // const people=[
    //     {name: 'Civil Engineering'},
    //     {name: 'Computer Science and Engineering'},
    //     {name: 'Mechanical Engineering'}
    // ]
    return (
        <div className="data-container">
            <ul>
        {/* <ul>
        {people.map(person => (
        <li>{person.name}</li>
      ))} */}
            <li><Link to="/civilengineering" className="links-civil">Civil Engineering</Link></li>
            <li><Link to="/cscengineering" className="links-civil">Computer Science and Engineering</Link></li>
            <li className="links-civil"> Computer Science and Engineering</li>
            <li className="links-civil">Mechanical Engineering</li>
        </ul>
        </div>
    )
}

export default Data;

