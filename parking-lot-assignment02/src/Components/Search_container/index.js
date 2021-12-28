import "./index.css";
import logo from "../../images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
	return (
		<div className="search_container">
			<div className="logo_container">
				<img src={logo} alt="logo" className="image" />
				<h1 className="heading">OnLine-Parking-Lot</h1>
			</div>
			<div className="search_bar">
				<input
					type="search"
					className="search"
					placeholder="Search your Car/Bike"
				/>
				<AiOutlineSearch className="icon" />
			</div>
		</div>
	);
};

export default SearchBar;
