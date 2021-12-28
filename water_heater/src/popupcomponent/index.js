import React from 'react';
import Content from './components/content';
import Popup from './components/popuppage';
import './stylesheets/content.css';

function Popupindex() {
  const[item,setItem]=useState([
    { id:1,
      image:"./assets/img1.png",
      name:"Rheem",
      product:"50Gal waterpump heatwater",
      type:"XE65TI0HD5102"
    },
    {
      id:2,
      image:"./assets/img2.png",
      name:"Jhons",
      product:"50Gal waterpump heatwater",
      type:"XE65TI0HD5105"
    },
    {
     id:3,
      image:"./assets/img3.png",
      name:"kavya",
      product:"50Gal waterpump heatwater",
      type:"XE65TI0HD5107" 
    }
    ])
   
    return (
        <>
          <Popup/>
          <Content/>
          
        </>
    )
}

export default Popupindex;
