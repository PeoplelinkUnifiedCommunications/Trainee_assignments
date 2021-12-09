import { Component } from "react";

import { v4 } from "uuid";

import { AgeCalculator } from "@dipaktelangre/age-calculator";

import ViewUserDetails from "../ViewUserDetails"

import { format } from "date-fns";

import "./index.css";

class EnterUserDetailsForm extends Component {
    state = {userDetailsList: [],
    name: "",
    email: "",
    dob: "",
    errorMsg: false
    }

    formSubmit = (event) => {
        event.preventDefault()
        const {name, email, dob} = this.state
        if(name !== "" && email !== "" && dob !== ""){
            let age = AgeCalculator.getAgeIn(new Date(dob), "years")
            const newUserDetails = {id: v4(), name, email, age}

            this.setState(prevState => ({
                userDetailsList: [...prevState.userDetailsList, newUserDetails],
                name: "",
                email: "",
                dob: "",
                errorMsg: false
            }))
        } else {
            this.setState({errorMsg: true})
        }
    }

    onChangeName = (event) => {
        this.setState({name: event.target.value})
    }

    onChangeEmail = event => {
        this.setState({email: event.target.value})
    }

    onChangeDob = event => {
        this.setState({dob: event.target.value})
    }

    render(){
        const {userDetailsList, name, email, dob, errorMsg} = this.state
        const todayDate = format(new Date(), 'yyyy-MM-dd')
        
        return(
            <div className="user-app-container">
                <div className="form-container">
                    <form className="user-form-container" onSubmit={this.formSubmit}>
                        <h1 className="heading">Enter Your Details</h1>
                        <div className="input-view">
                            <label className="label-text" htmlFor="name">Name: <span className="star">*</span></label>
                            <input className="user-input" type="text" value={name} id="name" onChange={this.onChangeName} placeholder="Enter Name Here"/>
                        </div>

                        <div className="input-view">
                            <label className="label-text" htmlFor="email">Email: <span className="star">*</span></label>
                            <input className="user-input" type="email" value={email} id="email" onChange={this.onChangeEmail} placeholder="Enter Email Here" />
                        </div>

                        <div className="input-view">
                            <label className="label-text" htmlFor="date">Date Of Birth: <span className="star">*</span></label>
                            <input className="user-input" type="date" max={todayDate} value={dob} id="date" onChange={this.onChangeDob} />
                        </div>

                        {errorMsg && <p className="error-msg">* Fields Are Mandatory</p> }
                        <div className="button-container">
                            <button className="button" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="view-user-details-container">
                    <ul className="user-details-list">
                        <li className="list-item">
                            <p className="user-name text-weight">Name</p>
                            <p className="user-name email-text text-weight">Email</p>
                            <p className="user-name text-weight">Age</p>
                        </li>
                        <hr className="line"/>
                        {userDetailsList.map(eachUser => (<ViewUserDetails userDetails={eachUser} key={eachUser.id}/>))}
                    </ul>
                </div>
            </div>
        )
    }

}

export default EnterUserDetailsForm;