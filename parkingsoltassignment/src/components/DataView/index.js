import {useSelector} from 'react-redux'
import { AiFillDelete,AiFillEdit } from "react-icons/ai";
import {useDispatch} from 'react-redux'

import "./index.css"

const DataView =()=>{
    const {dataList,searchValue} = useSelector((state)=>state)
    const filteredView = dataList.filter(each=>each.regNumber.includes(searchValue))

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
                        
                   
                    
                    {filteredView.map(each=>
                        <tr key={each.id}>
                        <td>{each.slotNumber}</td>
                        <td>{each.regNumber}</td>
                        <td>{each.ownerName}</td>
                        <td>{each.color}</td>
                        <td className="delete-update">
                            <button className='icon-button' onClick={()=>dispatch({type:"DELETE",payload:each.id})}><AiFillDelete/></button>
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
