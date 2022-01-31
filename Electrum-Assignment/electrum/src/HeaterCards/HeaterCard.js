import React from 'react';
import './HeaterCard.css'

import info from './info.svg'
import star from './energystar.png'
import { Link } from 'react-router-dom';

function HeaterCard({ details }) {
    return (
        <div>
            <div className='flexCol heaterCard'>
                <div className='flexRow cardHeader'>
                    <div className='flexCol'>
                        <span className='name'>{details.brand}</span>
                        <span className='model'>{details.name}</span>
                    </div>
                    <div className='flexRow spaceBetween'>
                        <span className='ef'>{details.rating}</span>
                        <img src={info} alt="info" className='info' />
                        <img src={star} alt="star" className='star' />
                    </div>
                </div>
                <div className='heaterContainer flexRow'>
                    <img src={details.img} alt="img1" className='heaterImage' />

                    <div>
                        <div className='flexRow'>
                            <p className='pt'>o</p><span className='advantages'>Leak detection with auto water shut-off</span>
                        </div>

                        <div className='flexRow'>
                            <p className='pt'>o</p><span className='advantages'>Control from your smart phone</span>
                        </div>

                        <div className='flexRow'>
                            <p className='pt'>o</p><span className='advantages'>Multiple operating modes</span>
                        </div>

                        <div className='flexRow'>
                            <p className='pt'>o</p><span className='advantages'>10 year manufacturer warranty</span>
                        </div>
                    </div>

                </div>

                <hr className='line' />

                <div>
                    <span className='basePrice'>Base Price  --------------- {details.base_price}</span>
                    <br />
                    <span className='installation'>(Installation not included)</span>
                    <br />
                    <p className='incentive'>Available incentives <img src={info} alt="info" /> ------------------ {details.available_incentives}</p>
                    <span className='equipmentCost'><b>Equipement Cost</b> <img src={info} alt="info" /> --------------------- <span className='eqCost'>{details.equipement_cost}</span></span>
                    <div className='savings'>
                        <span>Your Est. Annual Savings is <span className='savingsMoney'>$120</span> <img src={info} alt="info" /></span>
                    </div>

                    <div className='btn'>
                        <button className='installBtn'>Get install Quote</button>
                    </div>

                    <div>
                        <p className='moreDetails'><Link to={details.path} className='link'>View More Details</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaterCard;

