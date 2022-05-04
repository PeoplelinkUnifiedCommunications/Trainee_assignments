import React from "react"
import "./billingdashboard.css"
import Button from "@material-ui/core/Button";
import { createTheme, ThemeProvider } from "@material-ui/core";


function BillingDashboard() {
  const theme = createTheme({
    palette : {
      primary :  {
        main : "#215288"
      }
      
    }
  });
  return (
    <div className="card flexCol" >
      <div className="cardHead flexRow">
        <span className="cardName">Billing And Payment</span>
        <span className="blueTxt">MORE</span>
      </div>
      <div className="flexCol billing pdngHXS brdrRadiusXSM">
        <div className="flexRow pdngHXXS mrgnTSM">
          <p>Account Balance :</p>
          <p>&#8377; 0</p>
        </div>
        <div className="flexCol pdngHXXS mrgnTSM alignEnd">
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" disableElevation>MAKE PAYMENT</Button>
          </ThemeProvider>
        </div>

      </div>
      
      
    </div>
  )
}

export default BillingDashboard