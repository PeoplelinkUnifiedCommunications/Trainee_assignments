import React from "react";
import Cards from "../cards/Cards";
const Main=(props) => {
    let data=[
        {
            id:1,
            manufacturer_name:'Rheem',
            name:'Pro Prestige 50 LeakGuar',
            ef:'3.4 ef',
            logo:'Images/info.svg',
            logo1:'Images/EnergyStar.png',
            banner_logo:'Images/img1.png',
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
            name:'Pro Prestige 50 LeakGuar',
            ef:'3.4 ef',
            logo:'./Images/info.svg',
            logo1:'Images/EnergyStar.png',
            banner_logo:'Images/img2.png',

            base_price:'................................$ 1,899',
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
            banner_logo:'Images/img3.png',
            base_price:'................................$ 2,899',
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
            base_price:'................................$ 2,799',
            Availabe_incentives:'.......................$ 1,300',
            Equipment_cost:'.....................$ 599',
            your_annual_saving_is:'$ 120',
            view_more:'View  More Details'
        },
    ];
  
    let updatedData = data.slice(0,props.value)
    return(
        <>
        { 
        updatedData.map((elem) => {
        return <Cards key={elem.id} {...elem}/>
        })
    }
        </>
       
    )
}

export default Main;
