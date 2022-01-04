import React, { useState } from "react";
import './PopuopBottom.css'
import ProductOverview from "./ProductOverview";
import ProductSpecs from "./ProductSpecs/ProductSpecs";
function PopupBottom() {
    const [selectedTab, setSelectedTab] = useState(1);
    return (
        <div className="Product">
            <div className="pro">
            <div className="Overview" onClick={()=>setSelectedTab(1)}>Product Overview</div> <div className="Specs" onClick={() => setSelectedTab(2)}>Product Specs</div></div>
            <hr style={{ marginTop: '10px' }} />
            {selectedTab === 1 && <ProductOverview />
            }
            {selectedTab === 2 && <ProductSpecs />}
        </div>
    )
}
export default PopupBottom;