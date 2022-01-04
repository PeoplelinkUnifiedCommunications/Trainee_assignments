import React, { useEffect, useState } from "react";
import './nextPage.css'
import PopupBottom from "./PopupBottom/PopuopBottom";
import PopuopRight from "./PopupRight/PopupRIght";
import Previous from "./Previous";
function Popup(props) {
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
        },
        {
            id:4,
            manufacturer_name:'Rheem',
            name:'Pro Prestige 50 LeakGuar',
            ef:'3.4 ef',
            logo:'Images/info.svg',
            logo1:'Images/EnergyStar.png',
            banner_logo:'Images/img1.png',
            images:['./Images/img1.png','./Images/img2.png','./Images/img3.png'],
            base_price:'Base_Price................................$ 1,799',
            Federal_tax:'...................................$ 1,300',
            Utility_incentives:'.......................$ 1,300',
            Equipment_cost:'.....................$ 499',
            your_annual_saving_is:'$ 120',
            view_more:'View  More Details'
        },
        {
            id:5,
            manufacturer_name:'A.O.Smith',
            name:'Pro Prestige 50 LeakGuar',
            ef:'3.4 ef',
            logo:'./Images/info.svg',
            logo1:'Images/EnergyStar.png',
            banner_logo:'Images/img2.png',
            images:['./Images/img2.png','./Images/img1.png','./Images/img3.png'],

            base_price:'................................$ 1,899',
            Availabe_incentives:'.......................$ 1,300',
            Equipment_cost:'.....................$ 599',
            your_annual_saving_is:'$ 120',
            view_more:'View  More Details'
        },
        {
            id:6,
            manufacturer_name:'Rheem',
            name:'Pro Prestige 50 LeakGuar',
            ef:'3.4 ef',
            logo:'Images/info.svg',
            logo1:'Images/EnergyStar.png',  
            banner_logo:'Images/img3.png',
            images:['./Images/img3.png','./Images/img2.png','./Images/img1.png'],
            base_price:'................................$ 2,799',
            Availabe_incentives:'.......................$ 1,300',
            Equipment_cost:'.....................$ 599',
            your_annual_saving_is:'$ 120',
            view_more:'View  More Details'
        },
    ];

    let updatedData = data.slice(0,props.value)

    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(()=>{
        let index = updatedData.findIndex(ele => ele.id === props.id);
        if(index >= 0){
            setSelectedIndex(index)
        }
    },[props.id])
    

    const onPrev = () => {
        if(selectedIndex !== 0){
            setSelectedIndex(selectedIndex-1);
           
        }
    }

    const onNext = () => {
        if(updatedData.length-1 !== selectedIndex){
            setSelectedIndex(selectedIndex+1);

        }
    }
    console.log(updatedData[selectedIndex])

    return (
        <div className="popup">
            <Previous onPrev={onPrev} onNext={onNext}/>
            <hr style={{margin: '0px 15px' }} />
            <PopuopRight  selectedData={updatedData[selectedIndex]}/>
            <PopupBottom />
            <h6>
                All values displayed on this page are based on standard industry assumptions. Savings numbers are calculated based on present day amrket circumtances, but may vary due to utility adjustments to rates or policy, or due to updates to the system design. Finance payments displayed are estimates subject to credit approval and based upon current provider rates that are subject to change. Your payments and rates may be higher. 
            </h6>
        </div>
    )
}
export default Popup