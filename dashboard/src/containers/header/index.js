import MailIcon from "@mui/icons-material/Mail";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { IoLogoHtml5 } from "react-icons/io";
import "../styles.css";
import SearchBar from "../uiElements/searchBar";
import BadgeVisibility from "../uiElements/muiElements";

function Header() {
	return (
		<div className='flexRow fxdTopHeader alignCenter'>
			<div className='navBar flexRow alignCenter justifyCntBtwn'>
				<div className='flexMinWidth alignCenter'>
					<IoLogoHtml5 className='logo' />
					<SearchBar />
				</div>
				<div className='flexAuto justifyCntBtwn'>
					<BadgeVisibility Icon={MailIcon} title='Messages' />
					<BadgeVisibility
						Icon={NotificationsOutlinedIcon}
						title='Notifications'
					/>
					<BadgeVisibility
						Icon={AccountCircleOutlinedIcon}
						invisible={true}
						title='Profile'
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
