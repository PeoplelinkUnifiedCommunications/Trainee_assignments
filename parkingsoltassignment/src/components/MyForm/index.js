import {useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {v4} from 'uuid'
import "./index.css"

const MyForm =()=>{
	let {slots,updatedData,dataList} = useSelector((state)=>state)
	
	
	const [ownerName,setOwnerName] = useState({name:updatedData.ownerName!==undefined?updatedData.ownerName:"",nameErrMsg:""})
	const [regNumber,setRegNumber] = useState({number:"",numberErrMsg:""})
	const [color,setColor] = useState({col:"",colErrMsg:""})
	const [slotNumber,setSlotNumber] = useState({slno:"",slnoErrMsg:""})

	const [noOfSlots,setNoOfSlots] = useState(0)
	const dispatch = useDispatch()

	
	useEffect(()=>{
		if (updatedData.id!==undefined){
			setOwnerName(prev=>({...prev,name:updatedData.ownerName}))
			setRegNumber(prev=>({...prev,number:updatedData.regNumber}))
			setColor(prev=>({...prev,col:updatedData.color}))
			setSlotNumber(prev=>({...prev,slno:updatedData.slotNumber}))

		}
	},[updatedData])


	function validateColor(data) {
		var s = new Option().style;
		s.color = data;
		return s.color === data.toLowerCase();
	}
	const validateCharecters = function (data) {
		var regex = /^([a-zA-Z ]+)$/;
		return regex.test(data);
	};
	const validateRegNumber = (data) => {
		var regex = /^[a-zA-Z]{2}[0-9]{2}(-)[a-zA-Z]{2}(-)[0-9]{4}$/;
		return regex.test(data);
	};
	const validateSlot = (data) => {
		var regex = /^[0-9]+$/;
		return regex.test(data);
	};

	const validate = () => {

		let retValue = true;
		const isSlotExist = dataList.find(
			(each) => parseInt(each.slotNumber) === parseInt(slotNumber.slno)
		)

		const isRegExist = dataList.find(
			(each) => each.regNumber === regNumber.number
		)
		
		if (ownerName.name === "") {
			setOwnerName(prev =>({...prev,nameErrMsg:"Enter The Name"}))
			retValue = false;
		} else if (!validateCharecters(ownerName.name)) {
			setOwnerName(prev =>({...prev,nameErrMsg:"Enter The Valid Name"}))
			retValue = false;
		}else{
			setOwnerName(prev =>({...prev,nameErrMsg:""}))
			
		}


		if (regNumber.number=== "") {
			setRegNumber(prev =>({...prev,numberErrMsg:"Enter The regNumber"}))
			retValue = false;
		} else if (!validateRegNumber(regNumber.number)) {
			setRegNumber(prev =>({...prev,numberErrMsg:"Enter The Valid Registration number"}))
			retValue = false;
		}else if (isRegExist && updatedData.regNumber!==undefined && regNumber.number!==updatedData.regNumber) {
			setRegNumber(prev =>({...prev,numberErrMsg:"Registration Number Already Exists"}))
			retValue = false;
		}else if (isRegExist && updatedData.regNumber===undefined) {
			setRegNumber(prev =>({...prev,numberErrMsg:"Registration Number Already Exists"}))
			retValue = false;
		}else{
			setRegNumber(prev =>({...prev,numberErrMsg:""}))
			
		}


		if (color.col === "") {
			setColor(prev =>({...prev,colErrMsg:"Enter The vehicleColor"}))
			retValue = false;
		} else if (!validateColor(color.col)) {
			setColor(prev =>({...prev,colErrMsg:"Enter The Valid Color"}))
			retValue = false;
		}else{
			setColor(prev =>({...prev,colErrMsg:""}))
			
		}


		if (slotNumber.slno=== "") {
			setSlotNumber(prev =>({...prev,slnoErrMsg:"Enter The slotNumber"}))
			retValue = false;
		} else if (!validateSlot(slotNumber.slno)) {
			setSlotNumber(prev =>({...prev,slnoErrMsg:"Enter The Valid slot"}))
			retValue = false;
		} else if (
			!(parseInt(slotNumber.slno) > 0 && parseInt(slotNumber.slno) <= slots)
		) {
			if (dataList.length >slots) {
				alert("No More Slots Available");
			}
			setSlotNumber(prev =>({...prev,slnoErrMsg:`Enter Slot Number Between 1 to ${slots}`}))
			
			retValue = false;
		}else if (isSlotExist && updatedData.slotNumber!==undefined && slotNumber.slno!==updatedData.slotNumber) {
			setSlotNumber(prev =>({...prev,slnoErrMsg:"SlotNumber Already Exists"}))
			retValue = false;
		} else if (isSlotExist && updatedData.slotNumber===undefined) {
				setSlotNumber(prev =>({...prev,slnoErrMsg:"SlotNumber Already Exists"}))
				retValue = false;
		}else{
			setSlotNumber(prev =>({...prev,slnoErrMsg:""}))
			
		}

		return retValue;
	};
	
	const formValidate=()=>{
		if (slots<=0){
			alert("please Select slots greater than 0")
			return false
		}
		return true
	}
	
	const onSubmitForm =(event)=>{
		event.preventDefault()
					
		
		if (updatedData.id !==undefined){
			if(formValidate() && validate()){
				console.log(ownerName.name, regNumber.number, color.col)
				const data = {
					id:updatedData.id,
					ownerName:ownerName.name,
					regNumber:regNumber.number,
					color:color.col,
					slotNumber:slotNumber.slno
				}
				
				dispatch({type:"UPDATE_DATA",payload:data})
				setOwnerName(prev=>({...prev,name:""}))
				setRegNumber(prev=>({...prev,number:""}))
				setColor(prev=>({...prev,col:""}))
				setSlotNumber(prev=>({...prev,slno:""}))
			}
		}else{
			if(formValidate() && validate()){
				const data = {
					id:v4(),
					ownerName:ownerName.name,
					regNumber:regNumber.number,
					color:color.col,
					slotNumber:slotNumber.slno
				}
				
				dispatch({type:"ADD_DATA",payload:data})
				setOwnerName(prev=>({...prev,name:""}))
				setRegNumber(prev=>({...prev,number:""}))
				setColor(prev=>({...prev,col:""}))
				setSlotNumber(prev=>({...prev,slno:""}))
			}
		}
	}

	


    return(
        <div className="my-form-container">
            <form className='form-container' onSubmit={onSubmitForm}>
				<input type='text' id="owner" value={ownerName.name} className='input-field' placeholder='Owner_name' onChange={(e)=>setOwnerName(prev=>({...prev,name:e.target.value}))}/>
				{ownerName.nameErrMsg===""?null:<p className="error-message">{ownerName.nameErrMsg}</p>}
				<input
					type='text'
					value={regNumber.number}
					className='input-field'
					placeholder='Registration_Number'
					onChange={(e)=>setRegNumber(prev=>({...prev,number:e.target.value}))}
				/>
				{regNumber.numberErrMsg===""?null:<p className="error-message">{regNumber.numberErrMsg}</p>}
				<input
					type='text'
					value={color.col}
					className='input-field'
					placeholder='Car/Bike_Color'
					onChange={(e)=>setColor(prev=>({...prev,col:e.target.value}))}
				/>
				{color.colErrMsg===""?null:<p className="error-message">{color.colErrMsg}</p>}
				<input type='number' value={slotNumber.slno} className='input-field' placeholder='Slot_Number'  onChange={(e)=>setSlotNumber(prev=>({...prev,slno:e.target.value}))} />
				{slotNumber.slnoErrMsg===""?null:<p className="error-message">{slotNumber.slnoErrMsg}</p>}
				
				{updatedData.ownerName!==undefined?<button type='submit' className='submit-button'>
					Update Solt
				</button>:<button type='submit' className='submit-button'>
					Allot the Solt
				</button>}
				

			</form>
			<div className='generate-slot-cont'>
				<div className='slot-cont'>
					<label htmlFor='gen-slot' className="label-name">Generate Slots:</label>
					<input
						type='number'
						id='gen-slot'
						className="input-generate-solt"
						value = {noOfSlots===0?slots:noOfSlots}
						placeholder="000"
						onChange={(e) => setNoOfSlots(e.target.value===""?"":parseInt(e.target.value))}
					/>
				</div>
				<button className='submit-button generate' type='button' onClick={()=>dispatch({type:"SET_SLOT",payload:noOfSlots})}>
					Genrate
				</button>
				<div className='slot-cont'>
					<label htmlFor='gen-slot'  className="label-name">Available Slots:</label>
					<span>{slots-parseInt(dataList.length)}</span> 
				</div>
				<div className='slot-cont'>
					<label htmlFor='gen-slot' className="label-name">Allotted Slots:</label>
					<span>{dataList.length}</span>
				</div>
			</div>
        </div>
    )
}
export default MyForm