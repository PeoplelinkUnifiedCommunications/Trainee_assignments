import {Component} from 'react'
import {v4} from 'uuid'
import { FiUser } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { BsFillCalendar2DateFill } from "react-icons/bs";

import LoginItem from '../LoginItem'

import './index.css'

class LoginForm extends Component {
  state = {
    loginList: [],
    nameInput: '',
    emailInput:'',
    dobInput: '',
    alertMsg:false
  }
  
  onChangeDOBInput = event => {
    this.setState({dobInput: event.target.value})
  }

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
    
  }

  onChangeEmailInput = event => {
    this.setState({emailInput: event.target.value})
  }

  onAddItem = event => {
    event.preventDefault()
    const {nameInput, emailInput,dobInput} = this.state
    const newItem = {
      id: v4(),
      name: nameInput,
      email: emailInput,
      dob: dobInput,
    }

    if (nameInput==='' || emailInput==='' || dobInput==='' ){
      this.setState({alertMsg:true})
    }else{
    this.setState(prevState => ({
      loginList: [...prevState.loginList, newItem],
      nameInput: '',
      emailInput:'',
      dobInput: '',
      alertMsg:false
    }))
  }
  }

  
  render() {
    const {nameInput, emailInput, dobInput,loginList,alertMsg} = this.state

    return (
      <div className="form-container">
        <div className="login-form">
         <form onSubmit={this.onAddItem}>
            <label htmlFor="name" className="label">Name</label>
            <div className="container">
               <div className="icon-container"><FiUser className="icon-size" /></div>
               <input
                type="text"
                id="name"
                value={nameInput}
                onChange={this.onChangeNameInput}
                className="input"
                placeholder="Name"
              />
            </div>
            <label htmlFor="email" className="label">Email</label>
            <div className="container">
              <div className="icon-container"><FiMail className="icon-size" /></div>
              <input
                type="email"
                id="email"
                value={emailInput}
                onChange={this.onChangeEmailInput}
                className="input"
                placeholder="Email"
              />
            </div>
            <label htmlFor="date" className="label">DOB</label>
            <div className="container">
              <div className="icon-container"><BsFillCalendar2DateFill className="icon-size" /></div>
              <input
                type="date"
                id="date"
                value={dobInput}
                onChange={this.onChangeDOBInput}
                className="input"
              />
            </div>
            <button type="submit" className="add-button">Add</button>
         </form>
         {alertMsg && <p className="err-msg">Required all fields</p>}
         </div>
         <div className="appointments-list">
            <ul className="un-order">
              <li className="list-item">
                <p className="name">Name</p>
                <p className="email">E-mail</p>
                <p className="age">Age</p>
              </li>
              {loginList.map(each => (
                <LoginItem
                  key={each.id}
                  userDetails={each}
                />
              ))}
            </ul>
         </div>
      </div>
    )
  }
}

export default LoginForm
