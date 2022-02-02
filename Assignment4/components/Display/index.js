import React from 'react';

import './index.css'

function Display({ details }) {

    return (
        <div>
            <div className='notifications-container'>
                {details.map((textMsg, index) => <div key={index}>
                    <h1 className={`notification-message`} >{textMsg}</h1>
                </div>)}
            </div>
        </div>
    )
}

export default Display;