import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { deleteSlot, updateSlot } from "../../store/index";
import { useSelector, useDispatch } from "react-redux";

import "./index.css";

function Genslots() {
	const { searchvalue, allotedSlots } = useSelector(
		(state) => state.user.value
	);
	const dispatch = useDispatch();

	const searchResults = allotedSlots.filter((item) => {
		return Object.keys(item).some((key) => {
			if (key !== "id") {
				return item[key].toLowerCase().includes(searchvalue.toLowerCase());
			} else {
				return null;
			}
		});
	});

	return (
		<div className='slots-container'>
			<div className='back-cont'>
				<table className='table'>
					<tbody>
						<tr className='table-row-header'>
							<th className='table-data1'>SL_number</th>
							<th className='table-data1'>Registration_Number</th>
							<th className='table-data1'>Owner_Name</th>
							<th className='table-data1'>Car/Bike_Color</th>
							<th className='table-data1'>Remove/Update</th>
						</tr>
						{searchResults.map((eachSlot) => (
							<tr key={eachSlot.id} className='table-row'>
								<td className='table-data'>{eachSlot.slotNumber}</td>
								<td className='table-data'>{eachSlot.regNumber}</td>
								<td className='table-data'>{eachSlot.ownerName}</td>
								<td className='table-data'>{eachSlot.vehicleColor}</td>
								<td className='table-data'>
									<AiOutlineDelete
										className='icons'
										onClick={() => dispatch(deleteSlot(eachSlot.id))}
									/>
									<AiOutlineEdit
										className='icons'
										onClick={() => dispatch(updateSlot(eachSlot))}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Genslots;
