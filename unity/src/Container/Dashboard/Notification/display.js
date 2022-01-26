import React from 'react';

function Display({ details }) {

    return (
        <div>
            <div className='containerN'>
                {details.map((textMsg, index) => <div key={index}>
                    <h1 className="message" >{textMsg}</h1>
                </div>)}
            </div>
        </div>
    )



}

export default Display;