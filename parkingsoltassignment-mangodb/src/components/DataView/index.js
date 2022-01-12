import {useSelector} from 'react-redux'
import { AiFillDelete,AiFillEdit } from "react-icons/ai";
import {useDispatch} from 'react-redux'
import {AiFillCar,AiOutlineCar} from "react-icons/ai"
import axios from "../../api/data";
import {useEffect,useState} from 'react'


import "./index.css"

const DataView =()=>{
    const {searchValue} = useSelector((state)=>state)
   

    const [dataList,setDataList] = useState([])

    useEffect(()=>{
		axios.get("/get/").then(response=>setDataList(response.data))
        
	},[dataList])
    // const filteredView = dataList.filter(each=>each.regNumber.includes(searchValue))

    const onDeleteData = (slotNum) => {
		axios.delete(`/delete/${slotNum}`).then((response) => {
			console.log(response);
		});
	};


    const  dispatch=useDispatch()
    return(
        <div className="data-view-container">
            <div className="data-view-content">
                <table className="table">
                <tbody>
                    
                        <tr className="top">
                            <th>SL_Num</th>
                            <th>Registration_Number</th>
                            <th>Owner_Name</th>
                            <th>Car/Bike Color</th>
                            <th>Delete/Update</th>
                        </tr>
                    {dataList.map(each=>
                        <tr key={each.id}>
                        <td>{each.slotNumber}</td>
                        
                        <td>{each.regNumber}</td>
                        <td>{each.ownerName}</td>
                        <td ><span className="car">{each.color}</span> <span className="car-color">{each.color==="white"?<AiOutlineCar/>:<AiFillCar style={{color:each.color}}/>}</span></td>
                        <td className="delete-update">
                            <button className='icon-button' onClick={()=>onDeleteData(each.id)}><AiFillDelete/></button>
                            <button className='icon-button' onClick={()=>dispatch({type:"UPDATE",payload:each})}><AiFillEdit/></button>
                        </td>
                        
                    </tr>

                    )}
                </tbody>
                </table>
            </div>
            
        </div>
    )
}
export default DataView
