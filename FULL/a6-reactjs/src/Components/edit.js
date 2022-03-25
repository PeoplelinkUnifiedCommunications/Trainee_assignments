import React, { useEffect, useState } from "react";

function Edit({ editObj, editCancelFn, updateForm }) {
    const [name, setName] = useState(editObj.name);
    const [email, setEmail] = useState(editObj.email);
    const [phone, setPhone] = useState(editObj.phone);
    const [dob, setDob] = useState(editObj.dob);
    const [role, setRole] = useState(editObj.role);
    const [password, setPassword] = useState(editObj.password);
    const [conform, setConform] = useState(editObj.conform);


    const [val, setVal] = useState({})



    const [isUpdate, setIsUpdate] = useState(false)

    useEffect(() => {
        if (isUpdate && Object.keys(val).length === 0) {
            updateForm(editObj._id, updatedEditObject)

        }
    }, [isUpdate, val])

    const updateInfo = (u) => {
        u.preventDefault()
        setIsUpdate(!isUpdate)
        setVal(validation(updatedEditObject))

    }

    const oneditCancel = () => {
        editCancelFn()
    }


    const updatedEditObject = { name, email, phone, dob, role, password, conform }

    // const imgUpload = async (i) => {
    //     const files = i.target.files
    //     const data = new FormData()
    //     data.append("file", files[0])
    //     data.append("upload_preset", "sanbarrn")
    //     const response = await fetch(
    //         "https://api.cloudinary.com/v1_1/daqvoa4bx/upload",
    //         {
    //             method: "POST",
    //             body: data
    //         }
    //     )
    //     try {
    //         const image1 = await response.json()
    //         setFormData({ ...formData, imgUrl: image1.url })
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

    const validation = (updatedEditObject) => {
        const valError = {}
        if (!updatedEditObject.name) {
            valError.name = "* name required"
        }
        if (!updatedEditObject.email) {
            valError.email = "* email required"
        }
        if (!updatedEditObject.phone) {
            valError.phone = "* phone required"
        }
        if (!updatedEditObject.dob) {
            valError.dob = "* Date of birth required"
        }
        if (!updatedEditObject.role) {
            valError.role = "* Role required"
        }
        if (!updatedEditObject.password) {
            valError.password = "* password required"
        }
        if (!updatedEditObject.conform) {
            valError.conform = "* conform  required"
        }
        if (updatedEditObject.conform !== updatedEditObject.password) {
            valError.match = "* password dosent match"
        }

        return valError
    }

    return (
        <div className="formContainer flexCol">
            <h3>
                Edit Mongo
            </h3>
            <br />

            <form onSubmit={updateInfo}  >

                <div className="form1 flexCol">
                    <input className="input0" type="text" value={name} id="name" title="Full Name" name="name" minLength="4" maxLength="20" placeholder="full name" onChange={(e) => setName(e.target.value)} ></input>
                    <span>{val.name}</span>
                    <input className="input0" type="email" value={email} id="email" title="Email" name="email" minLength="10" maxLength="20" placeholder="eg : a@mail.com" onChange={(e) => setEmail(e.target.value)}  ></input>
                    <span>{val.email}</span>
                    <input className="input0" type="text" value={phone} id="phone" name="phone" title="Phone Number" maxLength="10" placeholder="8888888888" onChange={(e) => setPhone(e.target.value)}  ></input>
                    <span>{val.phone}</span>

                    <input className="input0" type="date" value={dob} id="date" title="Dob" name="dob" onChange={(e) => setDob(e.target.value)}  ></input>
                    <span>{val.dob}</span>

                    <select name="role" value={role} id="role" title="Role" onChange={(e) => setRole(e.target.value)} >
                        <option value="Frontend" >Frontend</option>
                        <option value="Backend" >Backend</option>
                        <option value="Full Stack" >Full Stack</option>
                    </select>

                    <input className="input0" type="password" value={password} id="password" title="Password" name="password" minLength="4" maxLength="20" placeholder="password" onChange={(e) => setPassword(e.target.value)} ></input>
                    <span>{val.password}</span>

                    <input className="input0" type="password" value={conform} id="conform" title="Confirm Password" name="conform" minLength="4" maxLength="20" placeholder="confirm" onChange={(e) => setConform(e.target.value)}  ></input>
                    <span>{val.conform}</span>                    <span>{val.match}</span>


                    <input className="input0" type="file" id="file" name="imgUrl"    ></input>

                    <div className="buttons flexRow">
                        <button className="input1" type="submit" >Update</button>
                        <button className="inputC" type="reset" onClick={oneditCancel} >Cancel</button>

                    </div>
                </div>
            </form>



        </div>
    );
}

export default Edit;