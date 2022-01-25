import React from "react";

function Testimonial({details}) {
    
    return (
        <div>
        <div className="flexCol card" >
            <div className="flexCol sub1">
                <div className="flexRow bar">
                    <div className="slider">

                </div>
                </div>

            </div> 
            <div className="flexCol sub2">
                <div className="flexCol about">
                    <p>{details.about}</p>

                </div>

            </div>
            <div className="flexRow sub3">
                <div className="flexAuto profile">
                    <img className="img1" src={details.image} alt="profile" />
                </div>
                <div className="flexAutoCol info">
                    <span>{details.name}</span>
                    <span>{details.role}</span>
                </div>
            </div>
        </div>
        </div>


    );
}

export default Testimonial;