import "./index.css";
import logo from "../../images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { searchData } from "../Redux/action";
import { connect } from "react-redux";

const SearchBar = ({ addSearchInput }) => {
  const onChangeSearchInput = (e) => {
    addSearchInput(e.target.value);
  };

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
          onChange={onChangeSearchInput}
        />
        <AiOutlineSearch className="icon" />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addSearchInput: (value) => dispatch(searchData(value)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
