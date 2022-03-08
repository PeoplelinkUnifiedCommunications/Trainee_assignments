import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import { Link } from "react-router-dom";
import BadgeVisibility from "../uiElements/muiElements";

const icons = [
	{
		id: 1,
		path: "/",
		title: "Dashboard",
		icn: DashboardCustomizeIcon,
	},
	{
		id: 2,
		path: "/cart",
		title: "Cart",
		icn: ShoppingCartIcon,
	},
	{
		id: 3,
		path: "/files",
		title: "Files",
		icn: InsertDriveFileRoundedIcon,
	},
	{
		id: 4,
		path: "/settings",
		title: "Settings",
		icn: SettingsIcon,
	},
];

function SideNav() {
	const [activeIcon, setActiveIcon] = useState(icons[0].id);

	const onChangeNavItem = (id) => {
		setActiveIcon(id);
	};

	return (
		<div className='flexCol alignCenter justifyCntBtwn fixedLeftNav'>
			<ul className='unOrdlist flexMinWidthCol'>
				{icons.map((each) => {
					const activeNav = activeIcon === each.id ? "actIcn" : "";
					const onClickNavLink = () => {
						onChangeNavItem(each.id);
					};
					return (
						<li className='li' key={each.id}>
							<Link to={`${each.path}`}>
								<button
									type='button'
									className='iconBtn'
									onClick={onClickNavLink}>
									<BadgeVisibility
										Icon={each.icn}
										title={each.title}
										activeNav={activeNav}
										invisible={true}
									/>
								</button>
							</Link>
						</li>
					);
				})}
			</ul>
			<ul className='unOrdlist flexAutoCol'>
				<li className='li'>
					<BadgeVisibility Icon={InfoIcon} title='Info' invisible={true} />
				</li>
				<li className='li'>
					<BadgeVisibility Icon={LogoutIcon} title='Logout' invisible={true} />
				</li>
			</ul>
		</div>
	);
}

export default SideNav;
