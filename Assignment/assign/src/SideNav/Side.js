import React, {useState} from 'react'
import Header from '../Header/Header';
import './Side.css'



function Side(props){
    const [data, setData] = useState({vehicleownername:'', registernumber:'', color:'', slot:''})
    const [print, setPrint]=useState([]);

    const handleChange = (e) =>{
        setData({...data, [e.target.name]:[e.target.value]})
    }
    const [slots, setSlots] = useState('');

    const submitHandle = (event)=>{
        event.preventDefault();
        if(!data){
            alert("please enter details");
        }

        else if (slots > print.length){

            const allData = {id: new Date().getTime.toString(), vehicleownername:data.vehicleownername, registernumber:data.registernumber, color:data.color, slot:data.slot}
            setPrint([...print, allData]);
            setData({vehicleownername:'', registernumber:'', color:'', slot:''})
        }else if (slots === print.length){
            alert("Slots Are Not Available")
        }
    }

    const deleteHandle = (indexValue) =>{
        const deleteItem = print.filter((elem, index)=> index !== indexValue);
        setPrint(deleteItem);
      
    }
    const handle = (e) =>{
        setSlots(parseInt(e))
    }

    const [SearchName, setSearchName] = useState('')
     const addSearch = (event) =>{
        setSearchName(event.target.value)
     }

     const searchItems = print.filter(elem=>elem.vehicleownername[0].includes(SearchName))
   
    return (
        <>
        <Header handle={handle}/>
        <div className="main1">
        <form onSubmit={submitHandle}>
        <h3>Enter Incoming Cards</h3>
        <div className='side'>
        <input className="sideInput" name="vehicleownername" type="text" placeholder='Vehicle Owner Name' onChange={handleChange} value={data.vehicleownername} required/>
        </div>
        <div className='side'>
        <input className="sideInput" name="registernumber" type="text" placeholder='Enter Registration Number'onChange={handleChange} value={data.registernumber} required/>
        </div>
        <div className='side'>
        <input className="sideInput" name="color" type="text" placeholder='Enter The Vehicle color' onChange={handleChange} value={data.color} required/>
        </div>
        <div className='side'>
        <input className="sideInput" name="slot" type="text" placeholder='Enter The Slot Number' onChange={handleChange} value={data.slot} required/>
        </div>
        <div className='side'>
        <input className='sideButton' name="slot" type="submit"/>  
        </div>
        </form>
        <div className='right'>   
         <input className='rhtinput' type="search" placeholder='search' onChange={addSearch}/><br/>
         <div className='black'>
             <div className='text'>Vehicle Owner Name</div>
             <div className='text'>Registration No.</div>
             <div className='text'>Vehicle Color</div>
             <div className='text'>Slot Number</div>
             <div className='text'>Remove</div>
         </div>
         <div className='table'> 
         {
             searchItems.map((elem,index) =>{
                 return(
                   <div key={index}>  
                 <table>
                     <tbody>
                         <thead>
                         <td><h5>{elem.vehicleownername}</h5></td>
                         <td><h5>{elem.registernumber}</h5></td>
                         <td><h5>{elem.color}</h5></td>
                         <td><h5>{elem.slot}</h5></td>
                         <button className='button1' onClick={()=>{deleteHandle(index)}}>Delete</button>
                         </thead>
                     </tbody>
                </table>
                </div>
                 )
             })
         }
         </div>
        </div>
        </div>
        </>
    )
}

export default Side
