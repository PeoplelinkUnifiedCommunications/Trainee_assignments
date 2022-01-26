import React from "react";

function Test({details}) {
    
    return (
        <div>
        <div className="flexCol card" >
            <div className="flexCol sub1t">
                <div className="flexRow bar">
                    <div className="slider">

                </div>
                </div>
               
                


            </div> 
            <div className="flexCol sub2t">
                <div className="flexCol about">
                    <p>{details.about}</p>

                </div>

            </div>
            <div className="flexRow sub3t">
                <div className="flexAuto profilet">
                    <img className="imgt" src={details.image} alt="profile" />

                </div>
                <div className="flexAutoCol infot">
                    <span>{details.name}</span>
                    <span>{details.role}</span>

                </div>

            </div>

        </div>
        </div>


    );
}

export default Test;