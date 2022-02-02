import React from "react";

import './index.css'

function TestCard({details}) {
    
    return (
        <div className="ts-flexCol test-card" >
            <div className="ts-flexCol ts-sub1">
                <div className="ts-flexRow ts-bar">
                    <div className="ts-slider">

                </div>
                </div>
               
            </div> 
            <div className="ts-flexCol ts-sub2">
                <div className="ts-flexCol ts-about">
                    <p>{details.about}</p>

                </div>

            </div>
            <div className="ts-flexRow ts-sub3">
                <div className="ts-flexAuto ts-profile">
                    <img className="ts-img1" src={details.image} alt="profile" />

                </div>
                <div className="ts-flexAutoCol ts-info">
                    <span>{details.name}</span>
                    <span>{details.role}</span>

                </div>

            </div>

        </div>

    );
}

export default TestCard;