import React, { useState } from "react";
import { Button } from "@material-ui/core";

const ReturnBooks = () => {
  const[click, setClick] = useState(false);
  // const[click, setClick] = useState("kavya");

  const handleClick = () =>{
    setClick(!click);
  }
  // const handleClick = () =>{
  //   setClick("koushik");
  // }
  return (
    <>
      <div className="flexCol alignCntr jcCntr pdngTMD">
        <div className="flexRow alignCntr jcCntr">
          <span>{click ? "koushik" :"kavya"}</span>
        </div>
        <span className="pdngTMD">
        <Button color="primary" variant="contained" onClick={handleClick}>
          Click me!
        </Button>
        </span>
      </div>
    </>

  );
};

export default ReturnBooks;
