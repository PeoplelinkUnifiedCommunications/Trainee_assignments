import { MdDashboardCustomize, MdInfo, MdLogout } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillFileText, AiTwotoneSetting } from "react-icons/ai";
import { useContext, useState } from "react";
import context from "../../context/context";

const icons = [
	{
		id: 1,
		icn: MdDashboardCustomize,
	},
	{
		id: 2,
		icn: FaShoppingCart,
	},
	{
		id: 3,
		icn: AiFillFileText,
	},
	{
		id: 4,
		icn: AiTwotoneSetting,
	},
];

function SideNav() {
	const { onClickNav } = useContext(context);
	const [activeIcon, setActiveIcon] = useState(icons[0].id);

	const onChangeNavItem = (id) => {
		setActiveIcon(id);
		onClickNav(id);
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
							<button
								type='button'
								className='iconBtn'
								onClick={onClickNavLink}>
								<each.icn className={`icon ${activeNav}`} />
							</button>
						</li>
					);
				})}
			</ul>
			<ul className='unOrdlist flexAutoCol'>
				<li className='li'>
					<MdInfo className='icon' />
				</li>
				<li className='li'>
					<MdLogout className='icon' />
				</li>
			</ul>
		</div>
	);
}

export default SideNav;
