import React, { useState } from "react";
import './nextPage.css'
import PopupBottom from "./PopupBottom/PopuopBottom";
import PopuopRight from "./PopupRight/PopupRIght";
import Previous from "./Previous";
function Popup() {
    const data=[
        {
            id:1,
            manufacturer_name:'Rheem',
            name:'Pro Prestige',
            ef:'3.4 ef',
            logo:'Images/info.svg',
            logo1:'Images/EnergyStar.png',
            image:'Images/img1.png',
            images:['./Images/img1.png','./Images/img2.png','./Images/img3.png'],
            base_price:'Base_Price................................$ 1,799',
            Federal_tax:'...................................$ 1,300',
            Utility_incentives:'.......................$ 1,300',
            Equipment_cost:'.....................$ 499',
            your_annual_saving_is:'$ 120',
            view_more:'View  More Details',
        },
        {
            id:2,
            manufacturer_name:'A.O.Smith',
            name:'Pro Prestige 50',
            ef:'3.4 ef',
            logo:'./Images/info.svg',
            logo1:'Images/EnergyStar.png',
            image:'Images/img2.png',
            images:['Images/img2.png','Images/img1.png','Images/img3.png'],
            base_price:'................................$ 1,799',
            Availabe_incentives:'.......................$ 1,300',
            Equipment_cost:'.....................$ 599',
            your_annual_saving_is:'$ 120',
            view_more:'View  More Details'
        },
        {
            id:3,
            manufacturer_name:'Stiebel Eltron',
            name:'Pro Prestige 50 LeakGuar',
            ef:'3.4 ef',
            logo:'Images/info.svg',
            logo1:'Images/EnergyStar.png',  
            image:'Images/img3.png',
            images:['./Images/img3.png','./Images/img2.png','./Images/img1.png'],
            base_price:'................................$ 1,799',
            Availabe_incentives:'.......................$ 1,300',
            Equipment_cost:'.....................$ 599',
            your_annual_saving_is:'$ 120',
            view_more:'View  More Details'
        }
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    

    const onPrev = () => {
        if(selectedIndex !== 0){
            setSelectedIndex(selectedIndex-1);
           
        }
    }

    const onNext = () => {
        if(data.length-1 !== selectedIndex){
            setSelectedIndex(selectedIndex+1);

        }
    }
    console.log(data[selectedIndex])

    return (
        <div className="popup">
            <Previous onPrev={onPrev} onNext={onNext}/>
            <hr style={{margin: '0px 15px' }} />
            <PopuopRight  selectedData={data[selectedIndex]}/>
            <PopupBottom />
            <h6>
                All values displayed on this page are based on standard industry assumptions. Savings numbers are calculated based on present day amrket circumtances, but may vary due to utility adjustments to rates or policy, or due to updates to the system design. Finance payments displayed are estimates subject to credit approval and based upon current provider rates that are subject to change. Your payments and rates may be higher. 
            </h6>
        </div>
    )
}
export default Popup