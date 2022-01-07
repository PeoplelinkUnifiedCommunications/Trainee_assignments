import "./index.css";
import { MdDelete } from "react-icons/md";
import { RiFileEditFill } from "react-icons/ri";
import { RiEBike2Fill, RiEBike2Line } from "react-icons/ri";
import { AiFillCar, AiOutlineCar } from "react-icons/ai";
import axios from "../../api/data";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { edit } from "../Reducer/action";

const Tabel = ({ addEditbleData }) => {
	const [data, setdata] = useState([]);

	const onEdite = (id) => {
		axios.get(`/data/${id}`).then((response) => {
			addEditbleData(response.data);
		});
	};

	const onDeleteData = (id) => {
		axios.delete(`/data/${id}`).then((response) => {
			console.log(response);
		});
	};

	useEffect(() => {
		axios
			.get("/data")
			.then((response) => {
				setdata(response.data);
			})
			.catch((error) => {
				setdata(error);
			});
	}, [data]);

	return (
		<table className="tabel">
			<tbody>
				<tr className="tabel_row">
					<th className="tabel_heading">SL_Num</th>
					<th className="tabel_heading">Owner_Name </th>
					<th className="tabel_heading">Registration_Number</th>
					<th className="tabel_heading">Car/Bike Colour</th>
					<th className="tabel_heading">Remove/Update</th>
				</tr>
			</tbody>
			{data.map((each) => (
				<tbody key={each.id}>
					<tr>
						<td className="tabel_heading1">{each.slotNum}</td>
						<td className="tabel_heading1">{each.ownerName}</td>
						<td className="tabel_heading1">{each.registraionNumber}</td>
						<td className="tabel_heading2">
							<div className="car">
								{each.color}
								{each.carOrBike === "car" ? (
									each.color.toLowerCase() === "white" ? (
										<AiOutlineCar className="car_logo" />
									) : (
										<AiFillCar
											style={{ color: `${each.color}` }}
											className="car_logo"
										/>
									)
								) : each.color.toLowerCase() === "white" ? (
									<RiEBike2Line className="car_logo" />
								) : (
									<RiEBike2Fill
										style={{ color: `${each.color}` }}
										className="car_logo"
									/>
								)}
							</div>
						</td>
						<td className="tabel_heading1">
							<div className="del_edit">
								<button
									className="deleteBtn"
									onClick={() => onDeleteData(each.id)}
								>
									<MdDelete className="delete" />
								</button>
								<button className="deleteBtn" onClick={() => onEdite(each.id)}>
									<RiFileEditFill className="delete" />
								</button>
							</div>
						</td>
					</tr>
				</tbody>
			))}
		</table>
	);
};
const mapDispatchToProps = (dispatch) => ({
	addEditbleData: (newData) => dispatch(edit(newData)),
});
export default connect(null, mapDispatchToProps)(Tabel);
