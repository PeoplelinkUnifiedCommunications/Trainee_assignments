import React, { useState } from 'react';
import './Form.css';
function Form() {
    const [data, setData] = useState({
        firstName: '', lastName: '', email: '', password: '',select: '', phonenumber: '',gender:'',checkbox:''
    })
    const [arrData, setArrData] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [newItem, setNewItem] = useState(null);
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    function addItems(event) {
        event.preventDefault();
        if (!data) {
            alert("field cannot be empty")
        }
        else if (data && !toggleSubmit) {
            setArrData(
                arrData.map((elem) => {
                    if (elem.id === newItem) {
                        return { ...elem,  firstName: data.firstName, lastName: data.lastName, email: data.email, password: data.password, select: data.select,phonenumber: data.phonenumber,gender:data.gender,checkebox:data.checkbox}
                    }
                    return elem;
                })
            )
            setToggleSubmit(true);
            setData({ firstName: '', lastName: '', email: '', password: '', select: '' ,phonenumber: '', gender:'',checkebox:''});
            setNewItem(null);
        }
        else {
            const allInput = { id: new Date().getTime().toString(), firstName: data.firstName, lastName: data.lastName, email: data.email, password: data.password, select: data.select, phonenumber: data.phonenumber, gender:data.gender,checkebox:data.checkbox}
            setArrData([...arrData, allInput]);
            setData({ firstName: '', lastName: '', email: '', password: '', select: '', phonenumber: '',  gender:'',checkebox:''});
        }
    }
    const deleteItem = (index) => {
        const updateItem = arrData.filter((elem) => index !== elem.id
        )
        setArrData(updateItem);
    }
    const editItem = (id) => {
        let newEditItem = arrData.find((elem) => elem.id === id)
        setToggleSubmit(false);
        setData(newEditItem)
        setNewItem(id);
    }

    return (
        <div className="Form">
            <div className="Form-input">
                <h1>Form</h1>
                <form onSubmit={addItems}>
                    <input type="text" name="firstName" placeholder="firstName" value={data.firstName} onChange={handleChange} /><br /><br />
                    <input type="text" name="lastName" placeholder="lastName" value={data.lastName} onChange={handleChange} /><br /><br />
                    <input type="email" name="email" placeholder="email" value={data.email} onChange={handleChange} /><br /><br />
                    <input type="password" name="password" placeholder="password" value={data.password} onChange={handleChange}  /><br /><br />
                    <input type="radio" name="gender" value="male" checked={data.gender=="male"} onChange={handleChange} /><span>Male</span>
                    <input type="radio" name="gender" value="female" checked={data.gender=="female"} onChange={handleChange} /><span>Female</span><br /><br />
                    <select name="select" value={data.select} onChange={handleChange} >
                        <option>madhu</option>
                        <option>vamsi</option>
                        <option>surya</option>
                        <option>rahul</option>
                        <option>sreekanth</option>
                    </select><br /><br />
                    <input type="text" name="phonenumber" maxlength="10" placeholder="phonenumber" value={data.phonenumber} onChange={handleChange} required /><br /><br />
                    <input type="checkbox" name="checkbox" value="books" checked={data.checkbox ==="books"}onChange={handleChange}/><span>books</span><br /><br />
                    {
                        toggleSubmit ?
                            <input type="submit" value="Login" /> :
                            <i className="fa fa-pencil-square-o fa-lg" onClick={addItems}></i>
                    }
                </form>
            </div>
            <div className="display">
                {
                    arrData.map((elem) => {
                        return (
                            <div className="display1" key={elem.id}>
                                <h3>{elem.firstName}</h3> <h3>{elem.lastName}</h3> <h3>{elem.email}</h3><h3>{elem.select}</h3><h3>{elem.gender}</h3><h3>{elem.phonenumber}</h3><h3>{data.gender}</h3><h3>{data.checkbox}</h3>
                                <div className="icons">
                                    <i className="fa fa-pencil-square-o fa-lg" onClick={() => editItem(elem.id)}></i>&nbsp;
                                    <i className="fa fa-trash fa-lg" onClick={() => deleteItem(elem.id)}></i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
}
export default Form;