import React from 'react'
import './SlotGeneration.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {v4} from 'uuid'
import { BsInfoCircle } from "react-icons/bs";




export default function SlotGeneration() {
    const [ownerName, setOwnerName] = useState("")
    const [registrationNumber, setRegistrationNumber] = useState("")
    const [carBikeColor, setCarBikeColor] = useState("")
    const [slotNumber, setSlotNumber] = useState("")

    const [ownerNameError, setOwnerNameError] = useState("")
    const [registrationNumberError, setRegistrationNumberError] = useState("")
    const [carBikeColorError, setCarBikeColorError] = useState("")
    const [slotNumberError, setSlotNumberError] = useState("")
    let error = ''

    const [generateSlot, setGenerateSlot] = useState("")

    const dispatch = useDispatch()
    const state = useSelector(state => state.slots)
    const state1 = useSelector(state => state.list)
    const state2 = useSelector(state => state.update)

    useEffect(() => {
        if (state2.length !== 0){
            setOwnerName(state2[0].ownerName),
            setRegistrationNumber(state2[0].registrationNumber),
            setCarBikeColor(state2[0].carBikeColor),
            setSlotNumber(state2[0].slotNumber)
        } else{
            setOwnerName(""),
            setRegistrationNumber(""),
            setCarBikeColor(""),
            setSlotNumber("")
        }       
    }, [state2])

    const soltDetailsSubmission = e =>{
        e.preventDefault()

        if (ownerName === ""){
            setOwnerNameError("Required*")
            error = 'error'
        }else if(!(ownerName.match(/^[A-Za-z ]+$/))){
            setOwnerNameError("Enter Valid Name*")
            error = 'error'
        }else{
            setOwnerNameError('')
        }

        const isExistregistrationNumber = state1.find(each => each.registrationNumber === registrationNumber);
        let registrationNumberFormate = /^[A-Z]{2}[0-9]{2}(|-)[A-Z]{2}(|-)[0-9]{4}$/
        if (registrationNumber===""){
            setRegistrationNumberError("Required*")
            error = 'error'
        }else if(!(registrationNumber.match(registrationNumberFormate))){
            setRegistrationNumberError("Enter Valid Registration Number*")
            error = 'error'
        }else if (isExistregistrationNumber && state2[0] !== undefined && registrationNumber !== state2[0].registrationNumber) {
			setRegistrationNumberError("Registration number alredy exist");
			error = 'error';
		}else if (isExistregistrationNumber && state2[0] === undefined) {
			setRegistrationNumberError("Registration number alredy exist");
			error = 'error';
		}else{
            setRegistrationNumberError('')
        }

        var s = new Option().style; 
        s.color = carBikeColor;

        if (carBikeColor===""){
            setCarBikeColorError("Required*")
            error = 'error'
        }else if(!(s.color === carBikeColor.toLowerCase())){
            setCarBikeColorError("Enter Valid Color*")
            error = 'error'
        }else{
            setCarBikeColorError('')
        }

        const isExistSlotNumber = state1.find(each => each.slotNumber === slotNumber);
        if (slotNumber === ""){
            setSlotNumberError("Required*")
            error = 'error'
        }else if(!(slotNumber.match(/^[0-9]+$/))){
            setSlotNumberError("Enter Valid Slot")
            error = 'error'
        }else if(state===0){
            error = 'error'
            alert("Generate Slots")
        }           
        
        else if (isExistSlotNumber && state2[0] !== undefined && slotNumber !== state2[0].slotNumber) {
			setSlotNumberError("Slot Number is Already exist*")
            error = 'error'
		} else if (isExistSlotNumber && state2[0] === undefined) {
			setSlotNumberError("Slot Number is Already exist*")
            error = 'error'
		}else if(Number(state) < Number(slotNumber)){
            if(Number(state) > state1.length){
                setSlotNumberError("Enter Valid Slot")
                error = 'error'
            }else{
                setSlotNumberError("No More Slots Available")
                error = 'error'
            }            
        }else{
            setSlotNumberError('')
        }

        
        if(error === ''){
            let slotDetails = {
                id : state2.length===0? v4(): state2[0].id,
                ownerName,
                registrationNumber,
                carBikeColor,
                slotNumber
            }
            dispatch({type:"DATA", payload:slotDetails})  
            setOwnerName('')
            setRegistrationNumber('')
            setCarBikeColor('')
            setSlotNumber('')          
        }  
    }


    return (
        <div className='SlotContainer'>
            <form className='Soltform' onSubmit={soltDetailsSubmission}>
                <input type='text' value = {ownerName}  placeholder='Owner_Name' className='inputItem'
                onChange={e =>setOwnerName(e.target.value)}/>
                <BsInfoCircle className='popup'/>
                <p className='details'>name</p>
                <br/>
                <p className='error'>{ownerNameError}</p>

                <input type="text" value={registrationNumber} placeholder='Registration_Number' className='inputItem'
                onChange={e =>setRegistrationNumber(e.target.value)}/><br/>
                <p className='error'>{registrationNumberError}</p>

                <input type="text" placeholder='Car/Bike_Color' className='inputItem' value={carBikeColor}
                onChange={e =>setCarBikeColor(e.target.value)}/><br/>
                <p className='error'>{carBikeColorError}</p>


                <input type="text" placeholder='Slot_Number' className='inputItem' value={slotNumber}
                onChange={e =>setSlotNumber(e.target.value)}/><br/>
                <p className='error'>{slotNumberError}</p>

                <button className='formbutton' type='submit'>Allot the Slot</button>
            </form>

            <div className='GenerateSlot'>
                <div className='GSlotContainer'>
                    <label className='Slots'>Genrate Slots :</label>
                    <input type="text" className='inputSlot' value={generateSlot}
                    onChange={e =>setGenerateSlot(e.target.value)}/>
                </div>
                <button className='button' onClick={()=>dispatch({type:"GENERATESLOT", payload:Number(generateSlot)})}>Genrate</button>
                <div className='GSlotContainer'>
                    <label className='Slots'>Available Slots :</label>
                    <input type="text" className='inputSlot' value={Number(state)-state1.length} readOnly/><br/>
                </div>
                <div className='GSlotContainer'>
                    <label className='Slots'>Allotted Slots :</label>
                    <input type="text" className='inputSlot' value={state1.length} readOnly/><br/>
                </div>              
            </div>

        </div>
    )
}
