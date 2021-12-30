import './table.css';
import { VscChromeClose } from "react-icons/vsc";
import { RiFileEditFill } from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux';
  
function ParkingTable() {
  const list=useSelector((state)=>state.list)
  const searchInput=useSelector(state=>state.searchInput)
  const filteredData = list.filter(each=>(each.regNum.toLowerCase()).includes(searchInput.toLowerCase()))
    
  const dispatch=useDispatch()
  return (
    <div className="ParkingTable">
      <table>
        <tbody>
         <tr>
          <th>SL_Number</th>
          <th>Registration_Number</th>
          <th>Owner_Name</th>
          <th>Car/Bike Colour</th>
          <th>Remove/Update</th>
         </tr>
        </tbody>
        <tbody>
         {filteredData.map((val) => {
          return (
            <tr key={val.id}>
              <td>{val.slotNum}</td>
              <td>{val.regNum}</td>
              <td>{val.ownerName}</td>
              <td>{val.vehicleColor}</td>
              <td><div className='images-order'>
                <VscChromeClose style={{marginRight:"30px"}} onClick={()=>dispatch({type:"DEL",payload:val.id})}/>
                <RiFileEditFill onClick={()=>dispatch({type:"EDIT",payload:val.id})}/>
              </div></td>
            </tr>
          )
          })}
        </tbody>
      </table>
    </div>
  );
}
  
export default ParkingTable;