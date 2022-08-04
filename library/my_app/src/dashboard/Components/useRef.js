import React, { useRef, useEffect } from "react";

const Userefer = () => {
 // create a ref
 const divElement = useRef();

 // trigger on the first render of the component 
 useEffect(() => {
   console.log(
     "The height of the div is: ", divElement.current.offsetHeight
   );
 }, []);

 return (
   <div ref={divElement}>
     <h1>UseRef Examples!</h1>
   </div>
 );
  
};

export default Userefer;
