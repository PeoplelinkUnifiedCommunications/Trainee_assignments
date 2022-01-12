import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { updateSlot } from "../../store/index";
import { useSelector, useDispatch } from "react-redux";
import { AiFillCar } from "react-icons/ai";
import axios from "axios";

import "./index.css";
import { useEffect, useState } from "react";

function Genslots() {
	const [slotData, setSlotData] = useState([]);
	const dispatch = useDispatch();

	// const searchResults = allotedSlots.filter((item) => {
	// 	return Object.keys(item).some((key) => {
	// 		if (key !== "id") {
	// 			return item[key].toLowerCase().includes(searchvalue.toLowerCase());
	// 		} else {
	// 			return null;
	// 		}
	// 	});
	// });

	const onClickDelete = async (id) => {
		try {
			await axios.delete(`http://localhost:3005/delete/${id}`);
		} catch (e) {
			console.log(e.message);
		}
	};

	useEffect(() => {
		axios
			.get("http://localhost:3005/")
			.then((response) => {
				setSlotData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [slotData]);

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
						{slotData.map((eachSlot) => (
							<tr key={eachSlot.id} className='table-row'>
								<td className='table-data'>{eachSlot.slotNumber}</td>
								<td className='table-data'>{eachSlot.regNumber}</td>
								<td className='table-data'>{eachSlot.ownerName}</td>
								<td className='table-data'>
									{eachSlot.vehicleColor}
									<AiFillCar
										className='car'
										fontSize='30px'
										color={eachSlot.vehicleColor}
									/>
								</td>
								<td className='table-data'>
									<AiOutlineDelete
										className='icons'
										onClick={() => onClickDelete(eachSlot.id)}
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
