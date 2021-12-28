import React from 'react';
import Button from './button';

function CardItem(props) {
    const { name, type, image, description, annsaving, resultcontent } = props.cardData;
    return (
        <>
       
            <div className="card  ">
                <div className="cardinner colFlex">
                    <div className="cardHeader rowFlex">
                        <div className="headerleft">
                            <h2>{name}</h2>
                            <span>{type}</span>
                        </div>
                        <div className="headerRgt">
                           <span className="hdrrgt">3.4 of<i class="fas fa-info-circle"></i> </span>
                            <img src="./assets/logo.png" alt="" className="logo imgcnt" />
                        </div>

                    </div>
                    <div className="resColRow ">
                        <div className="img">
                            <img src={image}  alt=""className="imgcnt" />
                        </div>
                        <div className="listitems">
                            <ul>
                                <li className=" rowFlex pdngVSM">
                                    <i className="fas fa-dot-circle icon"></i><span>{description.des1}</span>
                                </li>
                                <li className=" rowFlex pdngVSM">
                                    <i className="fas fa-dot-circle icon"></i><span>{description.des2}</span>
                                </li>
                                <li className="rowFlex pdngVSM">
                                    <i className="fas fa-dot-circle icon"></i><span>{description.des3}</span>
                                </li>
                                <li className=" rowFlex pdngVSM">
                                    <i className="fas fa-dot-circle icon"></i><span>{description.des4}</span>
                                </li>

                            </ul>
                        </div>

                    </div>
                    <hr />
                    <div className="prices">
                        <ul>
                            <li className=" pdngSM">
                                <div className="rowFlex">
                                    <div >
                                        <span><b>Base price</b></span>
                                    </div>
                                    <span className="minWidth">-------- </span>
                                    <div className="flexAuto">
                                        <span ><b>{resultcontent.res1}</b></span>
                                    </div>
                                </div>
                            </li>
                            <li className=" text1">(Installation not included)</li>
                            <li className=" pdngSM">
                                <div className="rowFlex">
                                    <div >
                                        <span>Federal task credit<img src="info-tooltip.png" alt="" /></span>
                                    </div>
                                    <span className="minWidth"> -------- </span>
                                    <div className="flexAuto">
                                        <span >{resultcontent.res3}</span>
                                    </div>
                                </div>
                            </li>
                            <li className=" pdngSM">
                                <div className="rowFlex">
                                    <div>
                                        <span>utility incentives<img src="info-tooltip.png" alt="" /></span>
                                    </div>
                                    <span className="minWidth">-------- </span>
                                    <div className="flexAuto">
                                        <span  >{resultcontent.res4}</span>
                                    </div>
                                </div>
                            </li>
                            <li className=" pdngSM">
                                <div className="rowFlex">
                                    <div>
                                        <span ><b> Equipment cost</b></span>
                                    </div>
                                    <span className="minWidth">--------  </span>
                                    <div className="flexAuto">
                                        <span className="txtclrs" ><b>{resultcontent.res5}</b></span>
                                    </div>
                                </div>
                            </li>
                           
                        </ul>
                    </div>
                    <div className="result">
                        <span className="text" ><b>your Est.Annual saving is <b className="txtclr">{annsaving}</b></b></span>
                    </div>
                    <div className="txtdet">
                        <button type="button" className="btn" onClick="carditem.js" > Get install quote</button>
                    </div>
                     <Button/>
                    {/* <div className="cntrend"><b className="endcnt">view more details</b></div> */}
                </div>

            </div>
        </>
    )
}

export default CardItem;