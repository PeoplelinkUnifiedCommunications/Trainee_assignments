import { React, useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { v4 } from "uuid";

import { format } from "date-fns";

import moment from "moment";

import UsersDataContext from "../../context/usersdatacontext";

import "./index.css";

const EnterUserDetailsForm = () => {
    const value = useContext(UsersDataContext);
    const { usersData, onSubmitForm } = value;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");

    const [nameErrMsg, setNameErrMsg] = useState(false);
    const [emailErrMsg, setEmailErrMsg] = useState(false);
    const [dateErrMsg, setDateErrMsg] = useState(false);
    const [emailExistErrMsg, setEmailExistErrMsg] = useState(false);

    const navigation = useNavigate();

    const todayDate = format(new Date(), "yyyy-MM-dd");
    const validation = () => {
        let returnValidatiion = true;
        if (name === "") {
            setNameErrMsg(true);
            returnValidatiion = false;
        } else {
            let regex = /^([a-zA-Z ]+)$/;
            if (!regex.test(name)) {
                setNameErrMsg(true);
                returnValidatiion = false;
            } else {
                setNameErrMsg(false);
            }
        }

        if (email === "") {
            setEmailErrMsg(true);
            setEmailExistErrMsg(false);
            returnValidatiion = false;
        } else {
            let regex =
                /^((([a-zA-Z]|[0-9])|([-]|[_]|[.])){1,})+[@](([a-zA-Z0-9])|([-]|[.])){2,40}[.]((([a-zA-Z0-9]){2,10})|(([a-zA-Z0-9]){2,4}[.]([a-zA-Z0-9]){2,4}))$/;
            if (!regex.test(email)) {
                setEmailErrMsg(true);
                returnValidatiion = false;
            } else {
                setEmailErrMsg(false);
                const isEmailExist = usersData.find(
                    (eachUser) => eachUser.email === email
                );
                if (isEmailExist) {
                    setEmailExistErrMsg(true);
                    returnValidatiion = false;
                } else {
                    setEmailExistErrMsg(false);
                }
            }
        }

        if (dob === "") {
            setDateErrMsg(true);
            returnValidatiion = false;
        } else {
            const formatedDob = moment(dob, "yyyy-MM-dd").isValid();
            if (!formatedDob) {
                setDateErrMsg(true);
                returnValidatiion = false;
            } else {
                setDateErrMsg(false);
            }
        }

        return returnValidatiion;
    };

    const formSubmit = (event) => {
        event.preventDefault();

        if (validation()) {
            const newUserDetails = { id: v4(), name, email, dob };
            onSubmitForm(newUserDetails);
            setName("");
            setEmail("");
            setDob("");
            navigation("/");
        }
    };

    const onChangeName = (event) => {
        setName(event.target.value);
    };

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangeDob = (event) => {
        setDob(event.target.value);
    };

    return (
        <div className="user-app-container">
            <div className="form-container">
                <h1 className="heading">Enter Your Details</h1>
                <form className="user-form-container" onSubmit={formSubmit}>
                    {/* <label className="label-text" htmlFor="name">
                        Name: <span className="star">*</span>
                    </label> */}
                    <input
                        className="user-input"
                        type="text"
                        value={name}
                        id="name"
                        onChange={onChangeName}
                        placeholder="Enter Name Here"
                    />
                    {nameErrMsg && (
                        <p className="error-msg">* Please Enter Valid Name</p>
                    )}
                    <br />

                    {/* <label className="label-text" htmlFor="email">
                        Email: <span className="star">*</span>
                    </label> */}
                    <input
                        className="user-input"
                        type="text"
                        value={email}
                        id="email"
                        onChange={onChangeEmail}
                        placeholder="Enter Email Here"
                    />
                    {emailErrMsg && (
                        <p className="error-msg">* Please Enter Valid Email</p>
                    )}
                    {emailExistErrMsg && (
                        <p className="error-msg">* Email Already Exist</p>
                    )}
                    <br />

                    {/* <label className="label-text" htmlFor="date">
                        Date Of Birth: <span className="star">*</span>
                    </label> */}
                    <input
                        className="user-input"
                        type="date"
                        max={todayDate}
                        value={dob}
                        id="date"
                        onChange={onChangeDob}
                    />
                    {dateErrMsg && (
                        <p className="error-msg">* Please Enter Valid Date</p>
                    )}
                    <br />

                    <div className="button-container">
                        <button className="button" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EnterUserDetailsForm;
