import searchImg from "../inputSection/search-bar.svg";
import info from "../inputSection/info-tooltip.svg";

import "../styles.css";

function InputSection() {
	return (
		<div className='inputSection'>
			<p>Home{">"} Hybrid Electric Water Heater </p>
			<h1 className='mainHeading'>Tell Us About Your Project</h1>
			<hr />
			<p>Location</p>
			<div className='flexRow'>
				<div className='inputFields'>
					<input type='text' className='textInput' />
					<select className='selectInput'>
						<option value='Single Family'>Single Family</option>
						<option value='Joint Family'>Joint Family</option>
					</select>
				</div>
				<img
					src={searchImg}
					color='white'
					className='search-icon'
					alt='search'
				/>
			</div>
			<p>
				Size your water heater <img src={info} alt='info' />
			</p>
			<div className='inputFields1'>
				<input className='rangeInput' type='range' min={30} max={80} />
				<input
					className='textInput'
					type='text'
					value='50 Gallons (3-5 people)'
				/>
			</div>
			<p>Waht is Your current water heater fuel type?</p>
			<select className='inputFields'>
				<option value='Natural Gas'>Natural gas</option>
				<option value='Electricity'>Electricity</option>
			</select>
			<p>
				Is this a water heater emergency? <img src={info} alt='info' />
			</p>
			<div className='inputFields'>
				<button className='yes-no' type='button'>
					No
				</button>
				<button className='yes-no' type='button'>
					Yes
				</button>
			</div>
			<hr />
		</div>
	);
}

export default InputSection;
