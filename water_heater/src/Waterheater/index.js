import React, { useState } from "react";
import Cardlist from "./Components/cardlist";
import Aside from "./Components/advantages";
import Bottom from "./Components/bottom";
import './Stylesheets/Card.css';
import './Stylesheets/Advantages.css';
import './Stylesheets/bottom.css';
import './Stylesheets/button.css';




const Waterheater = () => {
    const [card, setCard] = useState([
        {
            id: 1,
            name: "kavya",
            type: "performance platinum 50",
            image: "assets/img1.png",
            description: {
                des1: "Leak detection with auto water shut-off",
                des2: "control from ur smart phone",
                des3: "multiple operating modes",
                des4: "10 year manfacture warranty",

            },
            resultcontent: {
                res1: "$1,799",
                res3: "$1300",
                res4: "$1000",
                res5: "$559"
            },
            annsaving: "$120"
        },
        {
            id: 2,
            name: "koushik",
            type: "performance platinum 50",
            image: "assets/img2.png",
            description: {
                des1: "Leak detection with auto water shut-off",
                des2: "control from ur smart phone",
                des3: "multiple operating modes",
                des4: "10 year manfacture warranty",

            },
            resultcontent: {
                res1: "$1,799",
                res3: "$1300",
                res4: "$1000",
                res5: "$559"
            },
            annsaving: "$120"
        },
        {
            id: 3,
            name: "karunya",
            type: "performance platinum 50",
            image: "assets/img3.png",
            description: {
                des1: "Leak detection with auto water shut-off",
                des2: "control from ur smart phone",
                des3: "multiple operating modes",
                des4: "10 year manfacture warranty",

            },
            resultcontent: {
                res1: "$1,799",
                res3: "$1300",
                res4: "$1000",
                res5: "$559",
            },
            annsaving: "$120"
        },
        // {
        //     id: 4,
        //     name: "santhoshi",
        //     type: "performance platinum 50",
        //     image: "assets/img1.png",
        //     description: {
        //         des1: "Leak detection with auto water shut-off",
        //         des2: "control from ur smart phone",
        //         des3: "multiple operating modes",
        //         des4: "10 year manfacture warranty",

        //     },
        //     resultcontent: {
        //     res1: "$1,799",
        //     res3: "_$300",
        //     res4: "$1000",
        //     res5: "$559",
        //     },
        //     annsaving: "$120"
        // },

    ])
    return (
        <>
        <div className="waterHeater">
            <Cardlist cards={card} />
            <Aside/>
            <Bottom/>
           
     </div>
        </>
    )

}
export default Waterheater;