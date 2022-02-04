import { AiOutlineMessage, AiOutlineBell } from "react-icons/ai";
import { IoLogoHtml5 } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "../styles.css";
import SearchBar from "../uiElements/searchBar";

function Header() {
	return (
		<div className='flexRow fxdTopHeader alignCenter'>
			<div className='navBar flexRow alignCenter justifyCntBtwn'>
				<div className='flexMinWidth alignCenter'>
					<IoLogoHtml5 className='logo' />
					<SearchBar />
				</div>
				<div className='flexAuto'>
					<div className='iconsCnt flexRow alignCenter'>
						<AiOutlineMessage className='icon' />
						<span className='badge'></span>
					</div>
					<div className='iconsCnt flexRow alignCenter'>
						<AiOutlineBell className='icon' />
						<span className='badge'></span>
					</div>
					<div className='iconsCnt flexRow alignCenter'>
						<CgProfile className='icon' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
