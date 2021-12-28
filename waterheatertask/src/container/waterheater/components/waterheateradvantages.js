import React from 'react'
import '../../stylesheets/waterheateradvantages.css'
const waterheateradvantages = () => {
    return (
        <>
            <div className="resColRow">
                <div className="part1 card">
                    <h3 className="cleanHealth">clean & health air<img src="images/info-tooltip.svg" alt="" className="iIcon" /> </h3>
                    <p className="part1Innertext">No in-Home air pollution or greenhouse gas emissions</p>
                </div>
                <div className="part1 card">
                    <h3 className="cleanHealth">Reduced Carbon footprint<img src="images/info-tooltip.svg" alt=""className="iIcon" /></h3>
                    <p className="part1Innertext">Carbon offset equivaient for your home equals <span className="peraInnerText">23 trees planted</span></p>
                </div>
                <div className="part1 card">
                    <h3 className="cleanHealth">lower energy bills<img src="images/info-tooltip.svg" alt=""className="iIcon" /></h3>
                    <p className="part1Innertext">No in-Home air pollution or greenhouse gas emissions</p>
                </div>
            </div>
        </>
    )
}

export default waterheateradvantages
