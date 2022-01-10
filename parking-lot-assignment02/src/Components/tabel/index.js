import "./index.css";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { RiFileEditFill } from "react-icons/ri";
import { deleteData, editData } from "../Redux/action";
import { connect } from "react-redux";
import { RiEBike2Fill, RiEBike2Line } from "react-icons/ri";
import { AiFillCar, AiOutlineCar } from "react-icons/ai";

const Tabel = ({ deleteUserData, editEachData }) => {
  const userVehicalData = useSelector((state) => state.userVehicalData);
  const searchInputValue = useSelector((state) => state.searchValue);
  const filterData = userVehicalData.filter((each) =>
    each.registraionNumber.includes(searchInputValue)
  );
  console.log(userVehicalData);

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
      {filterData.map((each) => (
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
                  onClick={() => deleteUserData(each.id)}
                >
                  <MdDelete className="delete" />
                </button>
                <button
                  className="deleteBtn"
                  onClick={() => editEachData(each.id)}
                >
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
  deleteUserData: (id) => dispatch(deleteData(id)),
  editEachData: (id) => dispatch(editData(id)),
});

export default connect(null, mapDispatchToProps)(Tabel);
