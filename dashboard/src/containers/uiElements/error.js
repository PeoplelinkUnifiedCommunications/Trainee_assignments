import { BiErrorCircle } from "react-icons/bi";
import { BasicButtons } from "./muiElements";

const Error = (props) => {
	const { error } = props;

	return (
		<div className='contentCntr loader'>
			<div className='flexCol alignCenter justifyCntBtwn'>
				<BiErrorCircle className='errorIcon' />
				<h1 className='errorIcon'>{error}</h1>
				<p className='errorIcon'>Check your Network Connection</p>
				<BasicButtons buttonText='Retry' />
			</div>
		</div>
	);
};

export default Error;
