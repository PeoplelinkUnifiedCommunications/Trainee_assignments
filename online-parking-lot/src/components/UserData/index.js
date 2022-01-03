import {v4} from "uuid"
import { useState ,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./index.css"

function UserData(){
	const {list,gen_slots,editData,isEdit} = useSelector((state) => state);
	const dispatch = useDispatch();

	const [slots, setSlot] = useState();
	const [genSlotError,setSlotError]=useState('')
	const [error,setError]=useState('')
	const [ownerNameDetails, setOwnerName] = useState({owner:'',nameError:''});
	const [regNumDetails, setRegNum] = useState({reg:'',regError:""});
	const [vehicleColorDetails, setVehicleColor] = useState({vehicle:'',colorError:""});
	const [slotNumDetails, setSlotNum] = useState({slot:'',slotError:''});
	
	
	useEffect(() => {
		console.log(editData)
		if (editData.id !== ''){
			setOwnerName({owner:editData.ownerName,nameError:''});
			setRegNum({reg:editData.regNum,regError:""});
			setVehicleColor({vehicle:editData.vehicleColor,colorError:""});
			setSlotNum({slot:editData.slotNum,slotError:''});
		}else{
			setOwnerName({owner:"".ownerName,nameError:''});
			setRegNum({reg:"".regNum,regError:""});
			setVehicleColor({vehicle:"".vehicleColor,colorError:""});
			setSlotNum({slot:"".slotNum,slotError:''});

		}}, [editData]);

	const changeSlot=(e)=>{
		if(e.target.value>0){
			setSlot(e.target.value)
			setSlotError("")
		}else{
			setSlotError("please enter correct value")
			setSlot("")
		}
	}	
	const onSubmitForm = (event) => {
		event.preventDefault(); 
		
		if (ownerNameDetails.owner=== ""){
			setOwnerName({nameError:"Required",owner:ownerNameDetails.owner})
		}
		if (regNumDetails.reg === ""){
			setRegNum({regError:"Required",reg:regNumDetails.reg})
		}
		if (vehicleColorDetails.vehicle === ""){
			setVehicleColor({colorError:"Required",vehicle:vehicleColorDetails.vehicle})
		}
		if (slotNumDetails.slot === ""){
			setSlotNum({slotError:"Required",slot:slotNumDetails.slot})
		}
		if (ownerNameDetails.owner !== "" && regNumDetails.reg !== "" && vehicleColorDetails.vehicle !== "" && slotNumDetails.slot!== "") {
			
			const validOwnerName=ownerNameDetails.owner.match(/^[A-Za-z ]+$/)
			const validRegNum=regNumDetails.reg.match(/^[A-Za-z]{2}[0-9]{2}(|-)[A-Za-z]{2}(|-)[0-9]{4}$/)
			const validSlotNum=slotNumDetails.slot.match(/^[0-9]+$/)
			
			let vehClr=new Option().style
		    vehClr.color=vehicleColorDetails.vehicle
			
			if(gen_slots-list.length===0){
				setError("Please Generate Slots")
			}else if (!validOwnerName){
				setOwnerName({nameError:"Please Enter Valid Name",owner:ownerNameDetails.owner})
			}else if(!validRegNum){
				setRegNum({regError:"Please Enter Valid Registration Number",reg:regNumDetails.reg})
			}else if(!(vehClr.color===vehicleColorDetails.vehicle.toLowerCase())){
				setVehicleColor({colorError:"Please Enter Valid Colour",vehicle:vehicleColorDetails.vehicle})
			}else if(!validSlotNum || Number(gen_slots)<Number(slotNumDetails.slot) || Number(slotNumDetails.slot)<=0){
				setSlotNum({slotError:"Please Enter Valid Slot Number",slot:slotNumDetails.slot})
			}else{
				if (isEdit){
					const NewSlot = {
						id: editData.id,
						ownerName:ownerNameDetails.owner,
						regNum:regNumDetails.reg,
						vehicleColor:vehicleColorDetails.vehicle,
						slotNum:slotNumDetails.slot,
					};
					console.log(NewSlot)
					const RegExists=list.find(each=>{
						if (each.id!==NewSlot.id){
							return each.regNum===NewSlot.regNum
						}else{
							return false
						}})
			        const SlotExists=list.find(each=>{
						if (each.id!==NewSlot.id){
						 return each.slotNum===NewSlot.slotNum
						}else{
							return false
						}
					})
					if(RegExists){
						setRegNum({regError:"Registration Number Already Exists",reg:regNumDetails.reg})
					}else if(SlotExists){
						setSlotNum({slotError:"Please Enter Valid Slot Number",slot:slotNumDetails.slot})
					}else{
						dispatch({type:"UPDATE",payload:NewSlot});
                        setOwnerName({owner:'',nameError:''});
			            setRegNum({reg:"",regError:""});
			            setVehicleColor({vehicle:"",colourError:""});
			            setSlotNum({slot:"",slotError:""});
				        setError("")
					}
				}else{
					const NewSlot = {
						id: v4(),
						ownerName:ownerNameDetails.owner,
						regNum:regNumDetails.reg,
						vehicleColor:vehicleColorDetails.vehicle,
						slotNum:slotNumDetails.slot,
					};
					const RegExists=list.find(each=>each.regNum===NewSlot.regNum)
			        const SlotExists=list.find(each=>each.slotNum===NewSlot.slotNum)
					if(RegExists){
						setRegNum({regError:"Registration Number Already Exists",reg:regNumDetails.reg})
					}else if(SlotExists){
						setSlotNum({slotError:"Please Enter Valid Slot Number",slot:slotNumDetails.slot})
					}else{
						dispatch({type:"ADD",payload:NewSlot});
                        setOwnerName({owner:'',nameError:''});
			            setRegNum({reg:"",regError:""});
			            setVehicleColor({vehicle:"",colourError:""});
			            setSlotNum({slot:"",slotError:""});
				        setError("")
					}
				}
                
			}
		}
	};

    return(
        <div className="data-container">
                <form className="form-container" onSubmit={onSubmitForm}>
				   <div className="input-container" >
				       <div className="input">
					      <input value={ownerNameDetails.owner} className="data" onChange={e=>setOwnerName({owner:e.target.value,nameError:""})} placeholder="Owner_Name" />
				          <AiOutlineInfoCircle className="on-hover"/><p  className="hint">Hint: surya</p>
					   </div>
				       <p className="error-msg">{ownerNameDetails.nameError}</p>
				   </div>
				   <div className="input-container">
				        <div className="input">
						    <input value={regNumDetails.reg} className="data" onChange={e=>setRegNum({reg:e.target.value,regError:""})}  placeholder="Registration_Number"/>
						    <AiOutlineInfoCircle className="on-hover"/><p  className="hint">Hint: ap45-gh-3156</p>
				   		</div>
				        <p className="error-msg">{regNumDetails.regError}</p>
                   </div>
				   <div className="input-container">
				        <div className="input">
						   <input value={vehicleColorDetails.vehicle} className="data" onChange={e=>setVehicleColor({vehicle:e.target.value,colorError:''})}  placeholder="Car/Bike_Colour"/>
				   		   <AiOutlineInfoCircle className="on-hover"/><p  className="hint">Hint: red</p>
						</div>
				   		<p className="error-msg">{vehicleColorDetails.colorError}</p>
                   </div>
				   <div className="input-container">
				        <div className="input">
						   <input value={slotNumDetails.slot} className="data" onChange={e=>setSlotNum({slot:e.target.value,slotError:""})}  placeholder="Slot_Number"/>
						   <AiOutlineInfoCircle className="on-hover"/><p  className="hint">Hint: 1-999</p>
						</div>
				   		<p className="error-msg">{slotNumDetails.slotError}</p>
				   </div>
                   <button type="submit" className="slot-button">Allot the Slot</button> 
				   <p className="error-msg">{error}</p>
                </form>
            <div className="slot-container">
                <div className="slots">
                    <p className="par">Generate Slots: </p>
                    <input type="text" value={slots===undefined?"":slots} placeholder="0" className="slot-input" autofocus onChange={changeSlot}/>
                </div>
				<p className="error-msg">{genSlotError}</p>
                <button className="generate-button" onClick={()=>dispatch({type:"GENERATE",payload:Number(slots)})} type="button">Generate</button>
				<div className="slots">
				    <p className="par">Available Slots: </p>
					<input className="slot-input" value={Number(gen_slots)-list.length} readOnly/>
				</div>
				<div className='slots'>
                    <p className='par'>Allotted Slots: </p>
                    <input  className='slot-input' value={list.length} readOnly/>
                </div>
            </div>
        </div>
    )
}

export default UserData