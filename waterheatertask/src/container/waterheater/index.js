import React, { useState } from 'react'
import Whaterheaterheader from './components/whaterheaterheader';
import CardList from './components/cardlist';
import Waterheateradvantages from './components/waterheateradvantages';
import Electricwaterheater from './components/electricwaterheater';
import SideNav from './components/sidenav';
const Waterheater = () => {
    const [Data, setData] = useState([
        {
            id: 1,
            name: "Rheem",
            Prtype: "Perfomance Platinum 50",
            img: "images/img1.png",
            descrption: {
                des1: "Leak detection with auto water shut-off",
                des2: "Control from your smart phone",
                des3: "Multiple operating modes",
                des4: "10 year manufacture warranty",
            },
            bestPrice: "$1,799",
            fedTax: "$300",
            UtilityInce: "$1000",
            equCost: "$499",
        },
        {
            id: 2,
            name: "A.o.Smith",
            Prtype: "EliteMaster 56",
            img: "images/img2.png",
            descrption: {
                des1: "Leak detection with auto water shut-off",
                des2: "Control from your smart phone",
                des3: "Multiple operating modes",
                des4: "10 year manufacture warranty"
            },
            bestPrice: "$1,899",
            fedTax: "$300",
            UtilityInce: "$1000",
            equCost: "$599",
        },
        {
            id: 3,
            name: "Santhoshi",
            Prtype: "Hybrid Electric 50",
            img: "images/img3.png",
            descrption: {
                des1: "Leak detection with auto water shut-off",
                des2: "Control from your smart phone",
                des3: "Multiple operating modes",
                des4: "10 year manufacture warranty"
            },
            bestPrice: "$2,199",
            fedTax: "$300",
            UtilityInce: "$1000",
            equCost: "$599",

        },
    ]);

    return (
        <>
        
            <div className="sideNav ">
                <>
                <SideNav />
                </>
            </div>
            <div className="mainCntnr">
                <Whaterheaterheader />
                <div className="container resPdngMD ">
                    <p className="pera">Your Hybrid Electric Water Heater Recommended Options</p>
                    <div className="resColRow  ">
                        {Data.map((item) => <CardList data={item} />)}
                    </div>
                    <div className="btnCreate">
                        <button className="btnSeeMore">See more Options</button>
                    </div>
                    <div className="rowFlex">
                        <p className="pera1 "> The heat pump hot water advantage</p>
                    </div>
                    <Waterheateradvantages />
                    <Electricwaterheater />


                </div>
            </div>



        </>
    )
}

export default Waterheater;
