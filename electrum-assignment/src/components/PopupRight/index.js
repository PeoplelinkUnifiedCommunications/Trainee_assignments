
const PopupRight=(props)=>{
    const {value}=props
    const {name,ef,logo,logo1,banner_logo}=value
	const onClickNext = () => {
		if (indexData < productData.length - 1) {
			setPopupDataItem(productData[indexData + 1]);
			setIndex(indexData + 1);
			setImgThumb(productData[indexData + 1].thumbnails[0].img);
			setActiveImg(productData[indexData + 1].thumbnails[0].id);
		}
	};

	const onClickPrev = () => {
		if (indexData > 0) {
			setPopupDataItem(productData[indexData - 1]);
			setIndex(indexData - 1);
			setImgThumb(productData[indexData - 1].thumbnails[0].img);
			setActiveImg(productData[indexData - 1].thumbnails[0].id);
		}
	};
    return(
    <div style={{display:"flex",justifyContent:"center",marginBottom:'10px'}}>
		<div className='productCon'>
			<img src={banner_logo} alt='popupImage' className='product' />
		</div>
		<div className='popupData'>
					<div style={{display:'flex',justifyContent:"space-between"}}>
						<div>
							<h1 className='rate1'>{name}</h1>
							<p className='rate1'>
								50 Gal. Heat Pump Electric water Heater
							</p>
							<span className='rate1'>XE65T10HD50U1</span>
						</div>
						<div>
							<img src={logo1} alt='star' />
							<p>
								{ef} <img src={logo} alt='info' />
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
							<div style={{marginLeft:"10px",display:"flex"}}>
								<div style={{display:"flex"}}>
									<sup><p>$</p></sup>
									<h1>1,799</h1>
									<sup><p>00</p></sup>
								</div>
								<hr style={{marginLeft:"5px",marginRight:"5px"}}/>
								<div>
									<div style={{display:"flex"}}>
										<sup><p>$</p></sup>
										<h1>799</h1>
										<sup><p>00</p></sup>
									</div>
									<p style={{marginTop:"0px"}}>*with all incentives applied</p>
								</div>
							</div>
							<div>
								<button type='button' className="quote">
									Get Install Quote
								</button>
								<button type='button' className='quote' style={{marginLeft:"10px"}}>
									Back to Results
								</button>
							</div>
		</div>
	</div>
    )
}
export default PopupRight