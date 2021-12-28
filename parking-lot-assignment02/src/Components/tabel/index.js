import "./index.css";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { RiFileEditFill } from "react-icons/ri";
import { deleteData } from "../Redux/action";
import { connect } from "react-redux";

const Tabel = ({ deleteUserData }) => {
	const userVehicalData = useSelector(state => state.userVehicalData);
	console.log(userVehicalData);

	return (
		<table className="tabel">
			<tbody>
				<tr className="tabel_row">
					<th className="tabel_heading">SL_Num</th>
					<th className="tabel_heading">Registration_Number</th>
					<th className="tabel_heading">Owner_Name</th>
					<th className="tabel_heading">Car/Bike Colour</th>
					<th className="tabel_heading">Remove/Update</th>
				</tr>
			</tbody>
			{userVehicalData.map(each => (
				<tbody key={each.id}>
					<tr>
						<td className="tabel_heading1">{each.slotNum}</td>
						<td className="tabel_heading1">{each.ownerName}</td>
						<td className="tabel_heading1">{each.registraionNumber}</td>
						<td className="tabel_heading1">{each.color}</td>
						<td className="tabel_heading1">
							<div className="del_edit">
								<button
									className="deleteBtn"
									onClick={() => deleteUserData(each.id)}
								>
									<MdDelete className="delete" />
								</button>
								<button className="deleteBtn">
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
const mapDispatchToProps = dispatch => ({
	deleteUserData: id => dispatch(deleteData(id)),
});

export default connect(null, mapDispatchToProps)(Tabel);
