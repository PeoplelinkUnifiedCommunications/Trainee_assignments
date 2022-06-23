import React from "react";
import "@fontsource/roboto"; 
import Button from '@mui/material/Button';
import "./style.css";
function Dom() {
  

  const switchOff = () => {
    document.getElementById("bulbImage").src = "./images/bulb-go-off-img.png";
    document.getElementById("catImage").src = "./images/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switched On";
    document.getElementById("offBtn").style.backgroundColor = "#cbd2d9";
    document.getElementById("onBtn").style.backgroundColor = "#22c55e";
  }

  const switchOn = () => {
    document.getElementById("bulbImage").src = "./images/bulb-go-on-img.png";
    document.getElementById("catImage").src = "./images/cat-img.png";
    document.getElementById("switchStatus").textContent = "Switched Off";
    document.getElementById("onBtn").style.backgroundColor = "#cbd2d9";
    document.getElementById("offBtn").style.backgroundColor = "#e12d39";
  }

  return (
    <div className="mainCntnr">
      <div className="flexCol darkBackground">
        <div className="flexCol imgContainer">
          <div>
            <img id = "bulbImage" src="./images/bulb-go-on-img.png" alt="bulb-go-on" width="150px" />
          </div>
          <div>
            <img id = "catImage" src="./images/cat-img.png" alt="cat-img" width="300px"/>
          </div>
        </div>
        <div className="flexCol mrgnVLG switchBoard">
          <div className="switchStatus">
            <h1 id = "switchStatus">Switched On</h1> 
          </div>
          <div className="btnStatus">
           <Button onClick={switchOff} id="offBtn" variant="contained">OFF</Button>
           <Button onClick={switchOn} id="onBtn" variant="contained">ON</Button>
          </div>
        </div>
      </div>
    </div>

   
  );
}
export default Dom;
