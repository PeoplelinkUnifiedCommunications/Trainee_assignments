import {Link} from "react-router-dom"
import {v4} from 'uuid'
import { FiUser } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { BsFillCalendar2DateFill } from "react-icons/bs";


import './index.css'
var initial=[]

function CreateUser(){
  localStorage.setItem("userlist",initial)

  const onChangeDOBInput = event => {
    var dobInput=event.target.value
    
  }

  const onChangeNameInput = event => {
    var nameInput=event.target.value
    //var alertName=nameInput.match(/^[A-Za-z ]+$/)?true:false;
  }

  const onChangeEmailInput = event => {
    var emailInput=event.target.value
  }

  const onAddItem = event => {
    event.preventDefault()
    const newItem = {
      id: v4(),
      name: this.nameInput,
      email: this.emailInput,
      dob: this.dobInput,
    }

    if (this.nameInput==='' || this.emailInput==='' || this.dobInput==='' ){
      var alertMsg=true
    }else{
    localStorage.getItem('userlist').push(newItem)
  }
  }
    return (
      <div className="form-container">
        <div className="login-form">
         <form onSubmit={onAddItem}>
            <label htmlFor="name" className="label">Name</label>
            <div className="container">
               <div className="icon-container"><FiUser className="icon-size" /></div>
               <input
                type="text"
                id="name"
                onChange={onChangeNameInput}
                className="input"
                placeholder="Name"
              />
            </div>
            <label htmlFor="email" className="label">Email</label>
            <div className="container">
              <div className="icon-container"><FiMail className="icon-size" /></div>
              <input
                type="text"
                id="email"
                value={this.emailInput}
                onChange={onChangeEmailInput}
                className="input"
                placeholder="Email"
              />
            </div>
            <label htmlFor="date" className="label">DOB</label>
            <div className="container">
              <div className="icon-container"><BsFillCalendar2DateFill className="icon-size" /></div>
              <input
                type="text"
                id="date"
                value={this.dobInput}
                onChange={onChangeDOBInput}
                className="input"
              />
            </div>
            <button type="submit" className="add-button"><Link to='/userdetails'>Add</Link></button>
         </form>
         {this.alertMsg && <p className="err-msg">Required all fields</p>}
         </div>
      </div>
    )
  }


export default CreateUser
