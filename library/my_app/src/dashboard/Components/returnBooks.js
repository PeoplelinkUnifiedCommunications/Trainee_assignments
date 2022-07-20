import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

const ReturnBooks = () => {
  const [click, setClick] = useState(false);
  const [width, setWidth] = useState(window.screen.width);
  // const[click, setClick] = useState("kavya");

  useEffect(()=>{
    window.addEventListener("resize", actualWidth)
    return (()=> {
      window.removeEventListener("resize", actualWidth)})
  })
  const actualWidth = () =>{
    console.log("asdfghjkl",window.innerWidth);
    setWidth(window.innerWidth);
  }
  const handleClick = () => {
    setClick(!click);
  };
  // const handleClick = () =>{
  //   setClick("koushik");
  // }
  return (
    <>
      <div className="flexCol alignCntr jcCntr pdngTMD">
        <div className="flexRow alignCntr jcCntr">
          <span className="subHdngTxt">{click ? "koushik" : "kavya"}</span>
        </div>
        <span className="pdngVMD ">
          <Button color="primary" variant="contained" onClick={handleClick}>
            Click me!
          </Button>
        </span>
        <div className="flexCol alignCntr borderTop pdngVSM">
          <span className="subHdngTxt">window size of our laptop</span>
          <span className="pdngTLG subHdngTxt">{width}</span>
        </div>
      </div>
    </>
  );
};

export default ReturnBooks;
