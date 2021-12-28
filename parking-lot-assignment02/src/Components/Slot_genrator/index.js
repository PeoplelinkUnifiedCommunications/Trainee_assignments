import "./index.css";
const SlotGenrator = () => {
	return (
		<div className="slot_genrate_container1">
			<div className="genrate_slot">
				<p className="slot_heading">Genrate Slots:</p>
				<input type="text" className="input_txt_tag" />
			</div>
			<p className="genrate">Genrate</p>
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
