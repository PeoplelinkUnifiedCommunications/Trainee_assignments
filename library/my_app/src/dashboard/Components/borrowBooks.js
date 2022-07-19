import { Button } from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "../Styles.css";


const BorrowBooks = () => {
    const [count, setCount] = useState(0);
    const [subscribe, setSubscribe] = useState(true);
    const handleClickIncrease = () => {
      setCount(count + 1);
    };
    const handleClickDecrease = () => {
      if (count > 0) {
        setCount(count - 1);
        console.log("sadfghjk", count);
      }
    };
    const handleSubscribe = () => {
      setSubscribe(true);
    };
    const handleSubscribed = () => {
      setSubscribe(false);
    };
  
  return (
    <>
    <div className="flexCol pdngVSM brdrBtm">
            <span className="subHdngTxt">
              The Button has clicked{" "}
              <span className="alertTXt">{count}&nbsp;</span>
              times
            </span>
            <span>Click the button to increase & decrease the count!</span>
            <div className="flexRow">
              <span className="pdngMD">
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  onClick={handleClickIncrease}
                >
                  <AddIcon />
                </Button>
              </span>
              <span className="pdngMD">
                <Button
                  className="mrgnHMD"
                  color="primary"
                  variant="contained"
                  size="small"
                  onClick={handleClickDecrease}
                >
                  <RemoveIcon />
                </Button>
              </span>
            </div>
          </div>
          <div className="flexCol pdngVSM brdrBtm">
            <span className="yellowTxt mainHdngTxt">Welcome</span>
            <span>Thank you, Happy Starting!</span>

            <span className="pdngMD">
              <Button
                color="primary"
                variant="contained"
                size="small"
                onClick={handleSubscribe}
              >
                {subscribe ? "subscribe" : "subscribed"}
              </Button>
            </span>
          </div>
          <div className="pdngVSM brdrBtm">
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
          </div>
          {setInterval(handleSubscribed, 1000)}
    </>
  )
}

export default BorrowBooks