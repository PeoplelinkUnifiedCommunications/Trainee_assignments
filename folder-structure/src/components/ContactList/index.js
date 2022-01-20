import {  AiOutlineDelete } from "react-icons/ai";

import './index.css'

function ContactList(props){
    
    const {contactDetails,deleteItemList}=props;
    const {id,name,email,number}=contactDetails
    const deleteItem=()=>{
       deleteItemList(id)
    }
    return (
        <li className="list-item">
            <p className="name">{name}</p>
            <p className="email">{email}</p>
            <p className="num">{number}</p>
            <AiOutlineDelete className="del" style={{marginTop:"15px"}} onClick={deleteItem}/>
        </li>
    )
}

export default ContactList;