import React, { useState } from 'react';
import ProductOverview from '../../ProductOverview/ProductOverview';
import ProductSpecs from '../../ProductSpecs/ProductSpecs';
import TopContent from '../TopContent/TopContent';
import './Rheem.css'

import heater from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'

function RheemDetailedPage() {

  const [productOverviewBtn, setProductOverviewBtn] = useState(true)
  const [productSpecsBtn, setproductSpecsBtn] = useState(false)

  const [productOverview, setProductOverview] = useState(true)
  const [productSpecs, setproductSpecs] = useState(false)

  const productOverviewTriggered = () => {
    setProductOverviewBtn(true)
    setproductSpecsBtn(false)

    setProductOverview(true)
    setproductSpecs(false)
  }

  const productSpecsTriggered = () => {
    setProductOverviewBtn(false)
    setproductSpecsBtn(true)

    setProductOverview(false)
    setproductSpecs(true)
  }

  return (
    <div className='secondPage flexCol'>
      <div className='flexRow headerContainer'>
        <span className='path'>Heat Pump Electric Heater &gt; <b>Rheem Performance Platinum 50</b></span>
        <div className='flexRow'>
          <button className='navigationBtn nextBtn'>&lt;</button>
          <span className='navText'>Previous</span>

          <hr className='verticalLine' />

          <span className='navText'>Next</span>
          <button className='navigationBtn previousBtn'>&gt;</button>
        </div>
      </div>

      <hr className='detailsPageLine' />

      <div className='flexRow'>
        <div className='flexCol' style={{ marginTop: "1rem" }}>
          <img src={heater} alt="img" className='sideImages' />
          <img src={img2} alt="img" className='sideImages' />
          <img src={img3} alt="img" className='sideImages' />
        </div>

        <div className='flexCol'>
          <TopContent />

          <div className='bottomContainer'>
            <div className='bottomContent'>
              <button className={productOverviewBtn ? "btnTriggered" : "productOverBtn"} onClick={productOverviewTriggered}>Product Overview</button>
              <button className={productSpecsBtn ? "btnTriggered" : "productOverBtn"} onClick={productSpecsTriggered}>Product Specs</button>

              <hr />

              {productOverview ? <ProductOverview /> : <ProductSpecs />}
            </div>
          </div>

          <p className='bottomDesc'>All values displayed on this page are based on standard industry assumptions. Savings numbers are calculated based on present day market circumstances, but may vary due to utility adjustments to rates or policy, or due to updates to the system design. Finance payments are displayed are estimates subject to credit approval and based upon current provider rates that are subject to change. Your payments and rates may be higher.</p>
        </div>
      </div>
    </div>
  )
}

export default RheemDetailedPage;
