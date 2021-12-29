import { useDispatch, useSelector } from "react-redux";
import { sortedItems } from "../../store/index";
import { BiSearch } from "react-icons/bi";

import logo from "../../logo1.png";

import "./index.css";

function Navbar() {
	const { searchvalue } = useSelector((state) => state.user.value);
	const dispatch = useDispatch();

	const serachOf = (e) => {
		dispatch(sortedItems(e.target.value));
	};

	return (
		<nav className='nav-bar'>
			<div className='nav-container'>
				<div className='logo-heading'>
					<img src={logo} alt='logo' className='nav-logo' />
					<h1>Online-Parking Lot</h1>
				</div>
				<div className='search-container'>
					<input
						type='search'
						className='search-bar'
						placeholder='Search Your Car/Bike'
						value={searchvalue}
						onChange={serachOf}
					/>
					<BiSearch className='icon' />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
