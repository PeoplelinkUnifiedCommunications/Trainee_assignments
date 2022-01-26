import React from "react";

function Testimonial({details}) {
    
    return (
        <div>
        <div className="flex_column card" >
            <div className="flex_column sub1">
                <div className="flex_row bar">
                    <div className="slider">

                </div>
                </div>

            </div> 
            <div className="flex_column sub2">
                <div className="flex_column about">
                    <p>{details.about}</p>

                </div>

            </div>
            <div className="flex_row sub3">
                <div className="flexAuto profile">
                    <img className="img1" src={details.image} alt="profile" />

                </div>
                <div className="flex_column info">
                    <span><b>{details.name}</b></span>
                    <span>{details.role}</span>
                </div>

            </div>

        </div>
        </div>


    );
}

export default Testimonial;