import { FiSearch } from "react-icons/fi";

function SearchBar() {
	return (
		<div className='searchBar flexRow justifyCntBtwn'>
			<div className='flexRow alignCenter'>
				<FiSearch className='searchIcon' />
				<input
					type='text'
					className='search'
					placeholder='Search for products'
				/>
			</div>

			<button type='button' className='searchButton'>
				Search
			</button>
		</div>
	);
}

export default SearchBar;
