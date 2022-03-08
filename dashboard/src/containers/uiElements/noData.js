import { BiErrorCircle } from "react-icons/bi";
import { BasicButtons } from "./muiElements";

const NoData = () => {
	return (
		<div className='contentCntr loader'>
			<div className='flexCol alignCenter justifyCntBtwn'>
				<BiErrorCircle className='errorIcon' />
				<h1 className='errorIcon'>No Data Found</h1>
				<BasicButtons buttonText='Retry' />
			</div>
		</div>
	);
};

export default NoData;
