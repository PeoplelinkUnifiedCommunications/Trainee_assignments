import React from 'react'
import '../../stylesheets/cardlist.css'
import Button from '../components/button.js'
const Cardlist = (props) => {
    const{data}=props
    return (
        <>
            <div className="colFlex card pdngXS ">
                <div className="colFlex cardbg">
                    <div className="cardHeader rowFlex ">
                        <div className="headerLeft">
                            <p className="Rheem">{data.name}</p>
                            <p className="RheemText">{data.Prtype}</p>
                        </div>
                        <div className="headerRight">
                            <span className="headerRightText">3.0 of <img src="images/info-tooltip.svg"alt="" /></span>
                            <img className="logo" src="images/Energy_Star_logo.svg.png" alt="" />
                        </div>
                    </div>
                    <div className="cardBody resColRow rowFlex" >
                        <div className="heatPumpImg">
                            <img className="heatPump" src={data.img} alt="" />
                        </div>
                        <ul className="list">
                            <li className="rowFlex pdngVSM">
                                <i className="fas fa-play-circle icon"></i><span className="cardList">{data.descrption.des1}</span>
                            </li>
                            <li className="rowFlex pdngVSM">
                                <i className="fas fa-play-circle icon"></i><span className="cardList">{data.descrption.des2}</span>
                            </li>
                            <li className="rowFlex pdngVSM">
                                <i className="fas fa-play-circle icon"></i><span className="cardList">{data.descrption.des3}</span>
                            </li>
                            <li className="rowFlex pdngVSM">
                                <i className="fas fa-play-circle icon"></i><span className="cardList">{data.descrption.des4}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="cardFooter colFlex">
                        <div className=" rowFlex">
                            <div className=" flexMinWidth">
                                <b >Base Price </b>
                            </div>
                            <div className="flexAuto">
                                <b className=" textRight">{data.bestPrice}</b>
                            </div>
                        </div>
                        <div className="rowFlex">
                            <p className="textMuted">(Installation not Included)</p>
                        </div>

                            <div className="rowFlex">
                                <div className="flexMinWidth">
                                <span className="textMuted  textLeft"> Federal Tax Credit <img src="images/info-tooltip.svg" alt="" /></span>
                                </div>
                                <div className="flexMinWidth">
                                    <span>-------------------</span>
                                </div>
                                <div className="flexAuto">
                                <span className=" textMuted">{data.fedTax}</span>
                                </div>
                            </div>
                            <div className="rowFlex">
                                <div className="flexMinWidth">
                                <span className="textMuted  textLeft">Utility Incentives<img src="images/info-tooltip.svg" alt="" /></span>
                                    
                                </div>
                                <div className="flexMinWidth">
                                    <span>------------------</span>
                                </div>
                                <div className="flexAuto">
                                <span className=" textMuted">{data.UtilityInce}</span>
                                </div>
                            </div>
                        <div className="rowFlex">
                            <div className="flexMinWidth">
                                <b>Equipment Cost </b>
                            </div>
                            <div className="flexMinWidth">
                                <span className="textCenter"> -------------------</span>
                            </div>
                            <div className=" flexAuto">
                                <span className="peraInnerText textRight">{data.equCost}</span>
                            </div>
                        </div>
                        <div className="rowFlex">
                            <button className=" outLineBtn">Your East .annual saving is<span className="outLineBtnText"> $120</span></button>
                        </div >
                        <div className="button pdngVSM">
                            <button className="GetInstall pdngSM ">Get install Quote</button>
                        </div>
                            <Button />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cardlist;
