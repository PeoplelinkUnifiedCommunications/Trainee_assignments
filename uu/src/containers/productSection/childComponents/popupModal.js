import energyStar from "../Energy_Star_logo.svg.png";
import info from "./../../inputSection/info-tooltip.svg";
import tick from "./right-check.svg";

function PopupModal(props) {
	const { popupData } = props;
	return (
		<div className='popupContainer'>
			<div className='btnCon flexRow'>
				<p className='subHead'>
					Heat Pump Electric Water Heater {">"}{" "}
					<span style={{ color: "black" }}>
						{popupData.name} {popupData.type}
					</span>
				</p>
				<div className='navBtnCon'>
					<button type='button' className='navBtn'>
						<div className='flexRow1'>
							<span className='span'>{"<"}</span>
							<p className='navText'>Previous</p>
						</div>
					</button>
					<button className='navBtn addon' type='button'>
						<div className='flexRow1'>
							<p className='navText'>Next</p>
							<span className='span'>{">"}</span>
						</div>
					</button>
				</div>
			</div>
			<div className='flexRow content'>
				<div className='thumbNailCont'>
					<div className='imgOutline'>
						<img src={popupData.image} alt='tumbnail' className='thumbnail' />
					</div>
				</div>
				<div>
					<div className='flexRowCenter'>
						<div className='imgStyle'>
							<img src={popupData.image} alt='popupImage' className='product' />
						</div>
						<div className='popupData'>
							<div className='flexRowHead'>
								<div>
									<h1 className='rate1'>{popupData.name}</h1>
									<p className='rate1'>
										{popupData.capacity} Gal. Heat Pump Electric water Heater
									</p>
									<span className='rate1'>XE65T10HD50U1</span>
								</div>
								<div>
									<img src={energyStar} alt='star' />
									<p>
										{popupData.rating} ef <img src={info} alt='info' />
									</p>
								</div>
							</div>
							<ul className='unordlist'>
								<li className='subHead'>
									240-volt and with only a single 15 amp circuit breaker.
								</li>
								<li className='subHead'>
									Best in class ENERGY STAR energy factor of 3.39 and DOE
									estimated energy usage is 1289 kWh/yr
								</li>
								<li className='subHead'>
									Household size Recommendation is 3-5 people, possible 6
								</li>
								<li className='subHead'>
									Simple LED interfacce with no complicated modes to set to
									achieve oustanding savings,provides easy-to-read Performance
									information
								</li>
							</ul>
							<div className='flexRowCenter'>
								<div className='flexRowCenter1'>
									<span>$</span>
									<h1 className='rate'>1,799</h1>
									<p className='rate1'>00</p>
								</div>
								<div className='line'>
									<hr />
								</div>
								<div className='flexRowCenter2'>
									<div className='flexRowCenter'>
										<span>$</span>
										<h1 className='rate'>799</h1>
										<p className='rate1'>00</p>
									</div>
									<p className='rate1'>*with all incentives applied</p>
								</div>
							</div>
							<div>
								<button type='buttonn' className='quote'>
									Get Install Quote
								</button>
								<button type='buttonn' className='quote see1'>
									Back to Results
								</button>
							</div>
						</div>
					</div>
					<div className='working'>
						<div className='btnCon'>
							<button className='proCom process' type='button'>
								Product Overview
							</button>
							<button className='proCom' type='button'>
								Product Specs
							</button>
						</div>
						<p className='subHead'>
							The {popupData.name} Pro Terra Electric hybris is the
							smartest,quietest and most efficient water heater on the market.
							it features a hybrid heat pump design makingg it 400% more
							efficient than standard electric water heaters. it's so
							efficient,it pays for itself in 2-3 years and has an estimated
							energy cost savings of up to $4,800 over 10-years. Plus, it's
							energy rebate eligible super high efficiency means it could be
							eligible for state, local or utility rebates. it's smart: with its
							built-in Wi-Fi and the EcoNet app, you can check hot water
							availability, track energy.
						</p>
						<div className='flexRowCenter'>
							<div className='cardsCont'>
								<div className='dataCards'>
									<h1 className='cardHead'>
										<img src={tick} alt='tick' /> Save Money {"&"} Energy
									</h1>
									<p className='cardPara'>
										The Pro Terra Hybrid uses 75% less energy than a standard
										electric water heater t help minimize your impact on the
										environment - that's 4X more efficient than a standard
										electric water heater.
									</p>
								</div>
								<div className='dataCards'>
									<h1 className='cardHead'>
										<img src={tick} alt='tick' /> Save Money {"&"} Energy
									</h1>
									<p className='cardPara'>
										The Pro Terra Hybrid uses 75% less energy than a standard
										electric water heater t help minimize your impact on the
										environment - that's 4X more efficient than a standard
										electric water heater.
									</p>
								</div>
								<div className='dataCards'>
									<h1 className='cardHead'>
										<img src={tick} alt='tick' /> Save Money {"&"} Energy
									</h1>
									<p className='cardPara'>
										The Pro Terra Hybrid uses 75% less energy than a standard
										electric water heater t help minimize your impact on the
										environment - that's 4X more efficient than a standard
										electric water heater.
									</p>
								</div>
								<div className='dataCards'>
									<h1 className='cardHead'>
										<img src={tick} alt='tick' /> Save Money {"&"} Energy
									</h1>
									<p className='cardPara'>
										The Pro Terra Hybrid uses 75% less energy than a standard
										electric water heater t help minimize your impact on the
										environment - that's 4X more efficient than a standard
										electric water heater.
									</p>
								</div>
								<div className='dataCards'>
									<h1 className='cardHead'>
										<img src={tick} alt='tick' /> Save Money {"&"} Energy
									</h1>
									<p className='cardPara'>
										The Pro Terra Hybrid uses 75% less energy than a standard
										electric water heater t help minimize your impact on the
										environment - that's 4X more efficient than a standard
										electric water heater.
									</p>
								</div>
							</div>
							<div className='line'>
								<hr />
							</div>
							<div className='prices'>
								<div className='flexRow'>
									<h1 className='head'>Base Price:</h1>
									<h1 className='head'>{popupData.basePrice}</h1>
								</div>
								<p className='head'>(Installation not Included)</p>
								<div className='flexRow'>
									<p className='head'>
										Federal Tax Credit: <img src={info} alt='info' />
									</p>
									<p className='head'>{popupData.fedTaxCredit}</p>
								</div>
								<div className='flexRow'>
									<p className='head'>
										Utility Incentives: <img src={info} alt='info' />
									</p>
									<p className='head'>{popupData.incentives}</p>
								</div>
								<div className='flexRow'>
									<h1 className='head'>
										Equipment Cost: <img src={info} alt='info' />
									</h1>
									<h1 className='head'>{popupData.eqpCost}</h1>
								</div>
								<p className='saving'>
									Your Est. Annual Saving is <span>$120</span>{" "}
									<img src={info} alt='info' />
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PopupModal;
