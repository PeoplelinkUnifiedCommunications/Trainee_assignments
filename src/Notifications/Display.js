import React from 'react';



function Display({ details }) {

    return (
        <div>
            <div className="containers">
                {details.map((textMsg, index) => <div key={index}>
                    <div className={`${textMsg[1]}`}>
                    <h1 className="message" >{textMsg[0]}</h1>
                    </div>
                </div>)}
            </div>
        </div>
    )



}

export default Display;
