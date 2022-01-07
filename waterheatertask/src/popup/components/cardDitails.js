import React, { useState } from 'react'
import '../../container/stylesheets/cardDitails.css';
import Images from '../components/images.js'
import ReactImageMagnify from 'react-image-magnify';
const CardDitails = () => {
    const [selectImg, setSelectImg] = useState(Images[0]);

    return (
        <>
            <div className='colFLex'>
                <div className='CDCntr'>
                    <div className='rowFlex'>
                        <div className='leftBTNPart'>
                            <span className='CDTxt'>Heat Pump Electric Water Heater {">"}  Rheem Perfomance platinum 50</span>
                        </div>
                        <div className='rightBTNPart'>
                            <i class="fas fa-angle-double-left preicon"></i> <button className='pdngSM previous'>  Previous</button>
                            <button className='pdngSM next' > Next </button><i class="fas fa-angle-double-right preicon"></i>
                        </div>
                    </div>
                </div>


                <div className='rowFlex  pdngVLG'>
                    {/* <div className=' '> */}
                    <div className='lpart'>
                        <div className='colFlex '>
                            {Images.map((img, index) =>
                                <div className='rowFlex pdngXS'>
                                    <img
                                        key={index}
                                        src={img}
                                        alt='img'
                                        onClick={() => setSelectImg(img)}
                                        className='imgsize'
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    {/* </div> */}

                    <div className='resColRow'>
                        <div className='bgImg'>
                            {/* <img src={selectImg} alt="" className='img' /> */}
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: true,
                                    src: `${selectImg}`,
                                    className: 'img',
                                    // position:"relative",
                                    // top:"0px"
                                },
                                largeImage: {
                                    src: `${selectImg}`,
                                    width: 1200,
                                    height: 1000,
                                    className: 'img',
                                },
                                // enlargedImageContainerClassName:{
                                //     width:500,
                                //     height:500,
                                //     // position:"absolute",
                                //     // left:"64px",
                                //     // top:"0"
                                // },
                                enlargedImageContainerDimensions: {
                                    width: 800,
                                    height: 500,
                                    position: "absolute",
                                    right: "32px",
                                    top: 0,
                                }
                            }} />
                        </div>

                        <div className='rightCntr'>
                            <div className='rowFlex'>
                                <div className='lCntr'>
                                    <h2 className='pdngVSM RhemTxt'>Rheem</h2>
                                    <h4 className='pdngVSM RhmInnerTxt'>50 Gal.Heat Pump Electric Water Heater</h4>
                                    <h6 className='pdngVSM XE65'>XE65T10HD50U1</h6>

                                    <ul className=" colFlex">
                                        <li className="rowFlex pdngVSM">
                                            <i className="fas fa-play-circle icon"></i><span className="cardList">240-Volt and with only a single 15bamp circuit breaker.</span>
                                        </li>
                                        <li className="rowFlex pdngVSM">
                                            <i className="fas fa-play-circle icon"></i><span className="cardList">Best in class ENERGY STAG energy factor of 3.39 and DOE estimated energy usage is 12B9 kWh/yr</span>
                                        </li>
                                        <li className="rowFlex pdngVSM">
                                            <i className="fas fa-play-circle icon"></i><span className="cardList">Household size recommendation is 3-5people ,possible 6</span>
                                        </li>
                                        <li className="rowFlex pdngVSM">
                                            <i className="fas fa-play-circle icon"></i><span className="cardList">Simple LED interface with no complicated modes to set achive outstanding savings provides easy to read perfomance information</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='rCntr'>
                                    <img src="images/Energy_Star_logo.svg.png" alt='' />
                                </div>

                            </div>
                            <div className='rowFlex pdngHMD'>
                                <p className="amtStyl"><sup>$</sup>1,799<sup>00</sup></p>

                                <div className=' incentives'>
                                    <h6 className="textStyl"><sup>$</sup>799<sup>00</sup></h6>
                                    <span className='WITh'>With all incentives applied</span>
                                </div>
                            </div>
                            <div className='rowFlex pdngVLG'>
                                <button className='getInstall'>Get Install Quote</button>
                                <a href=''> Back to Results</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default CardDitails;
