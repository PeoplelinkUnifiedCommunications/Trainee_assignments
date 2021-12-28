import React, { useState } from 'react';
import PopupCntr from '../popup/components/popupCntr.js';
import CardDitails from '../popup/components/cardDitails'
import ProductDetails from '../popup/components/productDetails.js';
function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
  return <>
    <input
      type="button"
      value="View More Details"
      className="ViewMoreBtn  textCenter"
      onClick={togglePopup}
    />

    {isOpen && <PopupCntr
      content={
      <>
        <CardDitails />
        <ProductDetails />
      </>
      }handleClose={togglePopup}
    />}
  </>
}
 
export default App;