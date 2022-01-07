import "./index.css";
import { useState } from "react";
const SlotGenrator = () => {
	const [slots, setslots] = useState("");

	const inputSlots = (e) => {
		let value = e.target.value;
		setslots(value);
	};

	const onClickBtn = () => {
		console.log(slots);
	};

	return (
		<div className="slot_genrate_container1">
			<div className="genrate_slot">
				<p className="slot_heading">Genrate Slots:</p>
				<input
					type="text"
					className="input_txt_tag"
					onChange={inputSlots}
					value={slots}
				/>
			</div>
			<p className="msg">{}</p>
			<button className="genrate" onClick={onClickBtn}>
				Genrate
			</button>
			<div className="genrate_slot">
				<p className="slot_heading">Availble Slots:</p>
				<input type="text" className="input_txt_tag" />
			</div>
			<div className="genrate_slot">
				<p className="slot_heading">Alloted Slots:</p>
				<input type="text" className="input_txt_tag" />
			</div>
		</div>
	);
};

export default SlotGenrator;
