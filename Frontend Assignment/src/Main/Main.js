import React from "react";
import Cards from "../cards/Cards";
const Main= () => {
    let Data = [
        {
            id:1,
            manufacturer_name:'Rheem',
            name:'Pro Prestige 50 LeakGuar',
            ef:'3.4 ef',
            logo:'Images/info.svg',
            logo1:'Images/EnergyStar.png',
            banner_logo:'Images/img1.png',
            // list1:'Leak detection with auto water shut-off',
            // list2:'Control from your Smart phone',
            // list3:' Multiple Operating Modes',
            // list4:' 10 year Manufacture Warrenty',
            base_price:'Base_Price................................$ 1,799',
            Federal_tax:'...................................$ 1,300',
            Utility_incentives:'.......................$ 1,300',
            Equipment_cost:'.....................$ 499',
            your_annual_saving_is:'$ 120'
        },
        {
            id:2,
            manufacturer_name:'A.O.Smith',
            name:'Pro Prestige 50 LeakGuar',
            ef:'3.4 ef',
            logo:'./Images/info.svg',
            logo1:'Images/EnergyStar.png',
            banner_logo:'Images/img2.png',
            // list1:'Leak detection with auto water shut-off',
            // list2:'Control from your Smart phone',
            // list3:' Multiple Operating Modes',
            // list4:' 10 year Manufacture Warrenty',
            base_price:'................................$ 1,799',
            Availabe_incentives:'.......................$ 1,300',
            Equipment_cost:'.....................$ 599',
            your_annual_saving_is:'$ 120'
        },
        {
            id:3,
            manufacturer_name:'Rheem',
            name:'Pro Prestige 50 LeakGuar',
            ef:'3.4 ef',
            logo:'Images/info.svg',
            logo1:'Images/EnergyStar.png',
            banner_logo:'Images/img3.png',
            // list1:'Leak detection with auto water shut-off',
            // list2:'Control from your Smart phone',
            // list3:' Multiple Operating Modes',
            // list4:' 10 year Manufacture Warrenty',
            base_price:'................................$ 1,799',
            Availabe_incentives:'.......................$ 1,300',
            Equipment_cost:'.....................$ 599',
            your_annual_saving_is:'$ 120'
        }
    ];
    return(
        <>
        { 
        Data.map((elem) => {
        return <Cards key={elem.id} {...elem}/>
        })
    }
        </>
    )
}

export default Main;
