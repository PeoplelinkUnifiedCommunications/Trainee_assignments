import axios from "axios";
import React, { useState } from "react";

function Login({ create, inputData, formData, validate, resetDataFn, agree1, accept1, setAgree1, setAccept1, setFormData }) {



    const terminator = () => {
        const { name, email, phone, dob, password, conform } = formData
        let value

        if (!(name && email && phone && dob && password && conform && accept1 && agree1)) {
            console.log("working")
            return value = true
        } else {
            return value = false
        }
        return value;
    }


    const inputPhoneData = (e) => {
        let mobileNumber = e.target.value
        if (Number(mobileNumber) || mobileNumber === "") {
            setFormData({ ...formData, phone: mobileNumber })
        }
    }

    const inputDataImg = async (e) => {
        const imgFile = e.target.files[0]
        const ImgInst = new FormData()
        ImgInst.append("file", imgFile)
        try {
            const ImgRes = await axios.post("http://localhost:8001/imgFinal/", ImgInst)
            setFormData({ ...formData, imgUrl: ImgRes.data.path })

        } catch (error) {
            console.log(error.message)
            console.log(formData)
        }

    }


    return (
        <div className="formContainer flexCol">
            <h3>
                Sign up Mongo
            </h3>
            <br />

            <form onSubmit={create}>

                <div className="form1 flexCol">
                    <input className="input0" type="text" id="name" title="Full Name" name="name" value={formData.name} minLength="4" maxLength="20" placeholder="full name" onChange={inputData}></input>
                    <span>{validate.name}</span>
                    <input className="input0" type="email" id="email" title="Email" name="email" value={formData.email} minLength="7" maxLength="20" placeholder="eg : a@mail.com" onChange={inputData}></input>
                    <span>{validate.email}</span>
                    <input className="input0" type="text" id="phone" name="phone" title="Phone Number" value={formData.phone} maxLength="10" placeholder="8888888888" onChange={inputPhoneData}></input>
                    <span>{validate.phone}</span>
                    <input className="input0" type="date" id="date" title="Dob" name="dob" value={formData.dob} onChange={inputData}></input>
                    <span>{validate.dob}</span>
                    <select value={formData.role} onChange={inputData} name="role" id="role" title="Role">
                        <option value="Frontend" >Frontend</option>
                        <option value="Backend" >Backend</option>
                        <option value="Full Stack" >Full Stack</option>
                    </select>
                    <span>{validate.role}</span>
                    <input className="input0" type="password" id="password" title="Password" name="password" value={formData.password} minLength="4" maxLength="20" placeholder="password" onChange={inputData}></input>
                    <span>{validate.password}</span><span>{validate.match}</span>
                    <input className="input0" type="password" id="conform" title="Confirm Password" name="conform" value={formData.conform} minLength="4" maxLength="20" placeholder="confirm password" onChange={inputData}></input>
                    <span>{validate.conform}</span><span>{validate.match}</span>

                    <input className="input0 " type="file" id="file" name="imgUrl" onChange={inputDataImg} ></input>
                    <div className="checkBox flexRow">

                        <input type="checkbox" name="accept" value="accept" id="agree" className="cb" onChange={() => setAccept1(!accept1)} checked={accept1}></input>
                        <div>

                            <p className="c1">I  accept the terms and conditions</p>
                        </div>
                    </div>
                    <div className="checkBox flexRow">
                        <input type="checkbox" name="agree" value="agree" id="agree" className="cb" onChange={() => setAgree1(!agree1)} checked={agree1}></input>
                        <div>

                            <p className="c1">I agree privacy policies </p>
                        </div>
                    </div>


                    <div className="buttons flexRow">
                        <button className="input1" type="submit" disabled={terminator()}>Sign up</button>
                        <button className="inputC" type="reset" onClick={resetDataFn}>Cancel</button>

                    </div>
                </div>
            </form>



        </div>
    );
}

export default Login;