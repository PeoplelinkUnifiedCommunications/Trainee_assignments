import React from 'react';
import './Notification.css'

function Display({ details }) {

    return (
        <div>
            <div className='display_container'>
                {details.map((textMsg, index) => <div key={index}>
                    <h1 className="message" >{textMsg}</h1>
                </div>)}
            </div>
        </div>
    )



}

export default Display;