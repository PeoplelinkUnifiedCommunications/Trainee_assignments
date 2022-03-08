import React,{createContext,useState} from "react"
import Slider from "./components/Slider";
import Header from "./components/Header";
import info from "./Images/info-tooltip.svg"
import energy from "./Images/Energy_Star_logo.svg.png"
import image1 from './Images/img1.png'
import image2 from './Images/img2.png'
import image3 from './Images/img3.png'
import './App.css';
export const store=createContext();
const initial=[
  {
      id:1,
      manufacturer_name:'Rheem',
      name:'Performance Platinum 50',
      ef:'3.4 ef',
      logo:info,
      logo1:energy,
      banner_logo:image1,
      base_price:'................................$ 1,799',
      Federal_tax:'...................................$ 1,300',
      Utility_incentives:'.......................$ 1,300',
      Equipment_cost:'.....................$ 499',
      your_annual_saving_is:'$ 120',
  },
  {
      id:2,
      manufacturer_name:'A.O.Smith',
      name:'Elite Master 56',
      ef:'3.4 ef',
      logo:info,
      logo1:energy,
      banner_logo:image2,
      base_price:'................................$ 1,799',
      Federal_tax:'...................................$ 1,300',
      Utility_incentives:'.......................$ 1,300',
      Equipment_cost:'.....................$ 499',
      your_annual_saving_is:'$ 120',
      
  },
  {
      id:3,
      manufacturer_name:'Stiebel Eltron',
      name:'Hybrid Electric 50',
      ef:'3.4 ef',
      logo:info,
      logo1:energy,
      banner_logo:image3,
      base_price:'................................$ 1,799',
      Federal_tax:'...................................$ 1,300',
      Utility_incentives:'.......................$ 1,300',
      Equipment_cost:'.....................$ 499',
      your_annual_saving_is:'$ 120',
      
  },
  {
      id:4,
      manufacturer_name:'Rheem',
      name:'Pro Prestige 50 LeakGuar',
      ef:'3.4 ef',
      logo:info,
      logo1:energy,
      banner_logo:image1,
      base_price:'................................$ 1,799',
      Federal_tax:'...................................$ 1,300',
      Utility_incentives:'.......................$ 1,300',
      Equipment_cost:'.....................$ 499',
      your_annual_saving_is:'$ 120',
  },
  {
      id:5,
      manufacturer_name:'A.O.Smith',
      name:'Pro Prestige 50 LeakGuar',
      ef:'3.4 ef',
      logo:info,
      logo1:energy,
      banner_logo:image2,
      base_price:'................................$ 1,799',
      Federal_tax:'...................................$ 1,300',
      Utility_incentives:'.......................$ 1,300',
      Equipment_cost:'.....................$ 499',
      your_annual_saving_is:'$ 120',
      
  },
  {
      id:6,
      manufacturer_name:'Rheem',
      name:'Pro Prestige 50 LeakGuar',
      ef:'3.4 ef',
      logo:info,
      logo1:energy,
      banner_logo:image1,
      base_price:'................................$ 1,799',
      Federal_tax:'...................................$ 1,300',
      Utility_incentives:'.......................$ 1,300',
      Equipment_cost:'.....................$ 499',
      your_annual_saving_is:'$ 120',
  },
];

function App() {
  const [data,setData]=useState({rangeVal:50,list:initial})
  return (
    <store.Provider  value ={[data,setData]}>
    <div className="App">
      <Slider/>
      <Header/>
    </div>
    </store.Provider>
  );
}

export default App;
