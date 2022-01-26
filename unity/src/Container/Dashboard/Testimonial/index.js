import React, { useState, useEffect } from "react";
import "./test.css"

// COMPONENTS
import Test from "./test";
//images
import Shantanu from "./img0.jpeg"


const testData = [
    {
        id: 0,
        about: "The role of a software developer engages in identifying, designing, installing and testing a software system they have built for a company from the ground up. It can range from creating internal programmes that can help businesses be more efficient to producing systems that can be sold on the open market.",
        image: Shantanu,
        name: "Shantanu",
        role: "Software Dev"
    },
    {
        id: 1,
        about: "The team leader monitors the quantitative and qualitative achievements of the team and reports results to a manager. The leader often works within the team, as a member, carrying out the same roles but with the additional 'leader' responsibilities  as opposed to higher-level management which often has a separate job role altogether.",
        image: Shantanu,
        name: "Chinna",
        role: "Team Leader"
    },
    {
        id: 2,
        about: "An HR department is tasked with maximizing employee productivity and protecting the company from any issues that may arise within the workforce. HR responsibilities include compensation and benefits, recruitment, firing, and keeping up to date with any laws that may affect the company and its employees.",
        image: Shantanu,
        name: "Pvavn",
        role: "Human Resource"
    },
    {
        id: 3,
        about: "An HR department is tasked with maximizing employee productivity and protecting the company from any issues that may arise within the workforce. HR responsibilities include compensation and benefits, recruitment, firing, and keeping up to date with any laws that may affect the company and its employees.",
        image: Shantanu,
        name: "Maya",
        role: "Human Resource"
    }

]

function Testimonial(){
    const [data, setData] = useState(testData);
    const [index, setIndex] = useState(0);




    useEffect(() => {
        if (index === data.length - 0) {
            console.log("Success")
            return;
        }
        setTimeout(() => setIndex((index) => (index + 1)% (data.length)), 3000);

    }, [index]);
    return(

        <div className="flexCol main"> 
        <Test
        details={data[index]}

    />
        </div>


    );
}

export default Testimonial;