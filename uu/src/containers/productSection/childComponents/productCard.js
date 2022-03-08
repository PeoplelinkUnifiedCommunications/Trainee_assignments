import info from "../../inputSection/info-tooltip.svg";
import energyStar from "../Energy_Star_logo.svg.png";
import Popup from "reactjs-popup";
import PopupModal from "./popupModal";

function ProductCard(props) {
	const { data } = props;
	return (
		<div className='productCard'>
			<div className='flexRow nameRating'>
				<div>
					<h1 className='ProHeading'>{data.name}</h1>
					<p>{data.type}</p>
				</div>
				<div className='rating'>
					<p>{data.rating}</p>
					<img src={info} alt='info' />
					<img src={energyStar} alt='star' />
				</div>
			</div>
			<div className='imgPrice'>
				<div className='imageListItem'>
					<img src={data.image} alt='product' className='product' />
					<ul>
						<li className='listItem'>
							Leak detection with auto water shut-off
						</li>
						<li className='listItem'>Control from your smart phone</li>
						<li className='listItem'>Multiple opreating modes</li>
						<li className='listItem'>10 year manufacture warranty</li>
					</ul>
				</div>
				<hr />
				<div className='flexRow'>
					<h1 className='head'>Base Price:</h1>
					<h1 className='head'>{data.basePrice}</h1>
				</div>
				<p className='head'>(Installation not Included)</p>
				<div className='flexRow'>
					<p className='head'>
						Federal Tax Credit: <img src={info} alt='info' />
					</p>
					<p className='head'>{data.fedTaxCredit}</p>
				</div>
				<div className='flexRow'>
					<p className='head'>
						Utility Incentives: <img src={info} alt='info' />
					</p>
					<p className='head'>{data.incentives}</p>
				</div>
				<div className='flexRow'>
					<h1 className='head'>
						Equipment Cost: <img src={info} alt='info' />
					</h1>
					<h1 className='head'>{data.eqpCost}</h1>
				</div>
				<p className='saving'>
					Your Est. Annual Saving is <span>$120</span>{" "}
					<img src={info} alt='info' />
				</p>
				<div className='buttonDiv'>
					<button type='button' className='quote'>
						Get Insatll Quote
					</button>
				</div>
			</div>
			<div className='footerButton'>
				<Popup
					modal
					trigger={
						<button className='detailsButton' type='button'>
							View More Details
						</button>
					}>
					<PopupModal popupData={data} />
				</Popup>
			</div>
		</div>
	);
}

export default ProductCard;
