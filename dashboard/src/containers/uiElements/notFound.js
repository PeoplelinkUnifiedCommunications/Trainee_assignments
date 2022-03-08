import { BiErrorCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BasicButtons } from "./muiElements";

const NotFound = () => {
	return (
		<div className='contentCntr loader'>
			<div className='flexCol alignCenter justifyCntBtwn'>
				<BiErrorCircle className='errorIcon' />
				<h1 className='errorIcon'>No Page Found</h1>
				<Link to='/'>
					<BasicButtons buttonText='Go To DashBoard' />
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
