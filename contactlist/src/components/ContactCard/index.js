import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import ContactDetail from "../ContactDetails";
import {store}  from '../../App'

const ContactCard = (props) => {
  const [list,addData] = useContext(store);
  
  const navigation=useNavigate()
  const data=list.length===0
  const deleteContactData=(id)=>{
     const updatedData=list.filter(each=>each.id!==id)
     addData(updatedData)
  }
  const NavigateToContact=()=>{
    navigation("/")
  }
  
  return (
    <div> 
      <h1 style={{textAlign:'center'}}>My Contact List</h1>
      <div className="main">
        <h3>Name</h3>
        <h3>Email</h3>
        <h3>Number</h3>
        <h3>Delete</h3>
      </div>
      {data?<h1 style={{textAlign:'center'}}>NO DATA</h1>:list.map(each=><ContactDetail key={each.id} eachData={each} deleteContactData={deleteContactData} />)}
      <div style={{marginTop:"4rem", textAlign:'center'}}><button  onClick={NavigateToContact}>
            Back to Contact Form
      </button>
      </div>
    </div>
  );
};

export default ContactCard;
