import tag from "../productSection/tag.svg";
import ProductCard from "./childComponents/productCard";
import "./../styles.css";
import info from "./../inputSection/info-tooltip.svg";
import heatPump from "./hpwh-process-tab.png";

function ProductSection(props) {
	const { productData } = props;
	return (
		<div className='productSection'>
			<div className='headerSec'>
				<h1 className='header'>
					<img src={tag} alt='tag' className='tag' /> Your project qualifies you
					for <span>incentives!</span>
				</h1>
			</div>
			<div className='subb'>
				<div>
					<h1 className='mainHeading'>
						Your Hybrid Electric Water Heater Recommended Options
					</h1>
					<hr />
					<div className='cardContainer'>
						{productData.map((eachProduct) => (
							<ProductCard key={eachProduct.name} data={eachProduct} />
						))}
					</div>
					<button type='button' className='quote see'>
						{" "}
						See More Options
					</button>
				</div>
				<div>
					<h1 className='subHead'>The Heat Pump Hot Water Advantage</h1>
					<div className='descCard'>
						<div className='card'>
							<h1 className='miniHead'>
								Clean {"&"} Healthy Air <img src={info} alt='tag' />
							</h1>
							<p className='subHead'>
								No in-home air pollution or greenhouse gas emissions
							</p>
						</div>
						<div className='card'>
							<h1 className='miniHead'>
								Reduced Carbon Footprint <img src={info} alt='tag' />
							</h1>
							<p className='subHead'>
								Carbon offset equivalent for your home equals{" "}
								<span>23 trees planted</span>
							</p>
						</div>
						<div className='card'>
							<h1 className='miniHead'>
								Lower Energy Bills <img src={info} alt='tag' />
							</h1>
							<p className='subHead'>Up to 75% reduction in energy use.</p>
						</div>
					</div>
				</div>
				<hr />
				<h1 className='subHead'>How Hybrid Electric Water Heaters Work</h1>
				<div className='working'>
					<div className='btnCon'>
						<button className='proCom process' type='button'>
							Process
						</button>
						<button className='proCom' type='button'>
							Components
						</button>
					</div>
					<p className='subHead'>
						A hybrid electric water heater uses a compressor to take heat from
						the surrounding air and transfers it inside the water tank. it works
						similarly to a refrigerator, but in reverse. The "Hybrid" component
						means that the water heater can heat water either via the heat pump,
						or, when the surrounding air iss too cold, it can the same as a
						conventional electric water heater. this means tour water heating is
						as efficient as possible, and also ensures you have hot water in all
						environments.
					</p>
					<div className='imgCon'>
						<img className='workImg' src={heatPump} alt='process' />
					</div>
				</div>
				<p className='subHead'>
					All values displayed on this page are based on standard assumptions.
					Savings numbers are calculated based on present dat market
					circumstances, but may vary due to utility adjustments to rates or
					policy, or due to updates to the system design. Finance payments
					displayed are estimates subject to credit approval and based upon
					current provider rates that are subject to change. your payments and
					rates may be higher.
				</p>
			</div>
		</div>
	);
}

export default ProductSection;
