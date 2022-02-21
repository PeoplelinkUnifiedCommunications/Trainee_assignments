import React from 'react';
import '../Allottedslots/Allottedslots.css';
import { useSelector, useDispatch } from 'react-redux';
import { ImCross } from "react-icons/im";
import { RiFileEditFill } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";


export default function Allottedslots() {
    
    const dispatch = useDispatch()
    const state = useSelector(state => state.list)
    const state1 = useSelector(state => state.search)

    const isExistItem = state.filter(each => each.registrationNumber.includes(state1))
    console.log(isExistItem)


    return (
        <div className='AllottedContainer'>
            <table className="table">
                <tbody>
                <tr>
                    <th className='Sl_Num'>SL_Num</th>
                    <th className='Registration_Number'>Registration_Number</th>
                    <th className='Owner_Name'>Owner_Name</th>
                    <th className='Car_Bike_Colour'>Car/Bike Colour</th>
                    <th className='Remove_Upadate'>Remove/Upadate</th>
                </tr>

                {
                    isExistItem.map((each)=> (
                    <tr className='tr-details' key={each.id}>
                        <td className='Sl_Num'>{each.slotNumber}</td>
                        <td className='Registration_Number'>{each.registrationNumber}</td>
                        <td className='Owner_Name'>{each.ownerName}</td>
                        <td className='Car_Bike_Colour'>{each.carBikeColor}<AiFillCar style={{color: each.carBikeColor, fontSize:'17px' ,verticalAlign:"middle"}}/></td>
                        <td className='Remove_Upadate'>
                            <ImCross className='remove' onClick={()=>dispatch({type:"DELETE", payload:each.id})}/>
                            <RiFileEditFill className='edit' onClick={()=>dispatch({type:"UPDATE", payload:each})}/>
                        </td>
                    </tr>)
                    )}
                </tbody>
            </table>
        </div>
    )
}
