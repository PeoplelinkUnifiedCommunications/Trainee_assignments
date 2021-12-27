import React from "react";
import './ProdPrice.css' ;

function ProdPrice() {
  return (
    <div>
      <div className="pricing_in_prod">
        <h3 className='pricing princingOne'>
          Best Price <span>..........</span> $1,799
        </h3>
        <span>(Installalation not included)</span>
        <h4 className='pricing princingOne'>
          Federal Tax Credit
          <img src="ProjectImages/info-tooltip.svg" alt="tooltipsvg" />
          <span>..........</span> $200
        </h4>
        <h4 className='pricing princingOne'>
          Federal Tax Credit
          <img src="ProjectImages/info-tooltip.svg" alt="tooltipsvg" />
          <span>..........</span> $100
        </h4>
        <h4>
          Utility Incentives
          <img src="ProjectImages/info-tooltip.svg" alt="tooltipsvg" />
          <span>..........</span> $1,000
        </h4>
        <h3 className='pricing princingOne'>
          Equipment Cost
          <img src="ProjectImages/info-tooltip.svg" alt="tooltipsvg" />
          <span>..........</span> $499
        </h3>
        <button className='estbtn'> Your Est.Annual Saving is $120</button>
      </div>
    </div>
  );
}

export default ProdPrice;
