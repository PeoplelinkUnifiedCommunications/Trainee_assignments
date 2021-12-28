import React,{useState} from 'react';
import Popup from '../../popupcomponent/components/popuppage';
import Content from '../../popupcomponent/components/content';
import ProductDetails from '../../popupcomponent/components/productDetails';

 const Button = (props) => {
    const [isOpen, setIsOpen] = useState(false);

 const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    return (
        <>
        <div className="btnevnt " >
         <button className="button pdndSM" type="button" onClick={togglePopup}>view more details</button>
         </div>
         { isOpen && <Popup  content={
         <>
            <Content/>
         <ProductDetails/>
         </>
         } handleClose={togglePopup}  />

         }
         
       
        </>
        
    )
}
export default Button;
