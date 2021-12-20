import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import './Main.css'
function Main(props) {
    const localItems = () => {
        let list = localStorage.getItem('list');
        if (list) {
            return JSON.parse(localStorage.getItem('list'));
        }
        else {
            return [];
        }
    }
    const [data, setData] = useState({ ownername: '', registername: '', vechiclecolor: '', slot: '' });
    const [items, setItems] = useState(localItems());
    const [searchItems,setSearchItems]=useState("");
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    }
    const [slots, setSlots] = useState('');
    const addItems = (event) => {
        event.preventDefault();
        if (data.ownername === '' || data.registername === '' || data.vechiclecolor === '' || data.slot === '') {
            alert("Fields cannot be empty")
        }
        else if (slots > items.length) {
            const input = {
                id: new Date().getTime().toString(),
                ownername: data.ownername,
                registername: data.registername,
                vechiclecolor: data.vechiclecolor,
                slot: data.slot
            };
            setItems([...items, input]);
            setData({ ownername: "", registername: "", vechiclecolor: "", slot: "" });
        } else if (slots === items.length) {
            alert("Slots are Full");
        }
        setData({ ownername: "", registername: "", vechiclecolor: "", slot: "" });
    };


    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(items))
    }, [items])
    const deleteItem = (index) => {
        const updateItem = items.filter((elem) => index !== elem.id
        )
        setItems(updateItem);
    }
    const handleSlots = (d) => {
        setSlots(parseInt(d));
    };
    const addSearch = (event) =>{
        setSearchItems(event.target.value)
    }
    const search = items.filter(elem=>
        elem.ownername[0].includes(searchItems))
    return (
        <>
        <Header handleSlots={handleSlots} />
            <div className="Page">
                <div className="Main">
                    <h2>Enter Incoming Card Details</h2>
                    <div className="left-content">
                        <form onSubmit={addItems}>
                            <input type="text" name="ownername" placeholder="Vechile Owner Name" value={data.ownername} onChange={handleChange} /><br /><br />
                            <input type="text" name="registername" placeholder="Enter Registration Number" value={data.registername} onChange={handleChange} /><br /><br />
                            <input type="text" name="vechiclecolor" placeholder="Enter Vechile Color" value={data.vechiclecolor} onChange={handleChange} /><br /><br />
                            <input type="text" name="slot" placeholder="Slots Number" value={data.slot} onChange={handleChange} /><br /><br />
                            <input type="submit" value="Alot The Slot" />
                        </form>
                    </div>
                </div>
                    <div className="display">
                        <input type="search" placeholder="Search" onChange={addSearch} />
                        <div className="table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Vechile Owner Name</th>
                                        <th>Registration No.</th>
                                        <th>Vechile Colour</th>
                                        <th>Slot Number</th>
                                        <th>Remove</th>
                                    </tr>
                                    {
                                        search.map((elem) => {
                                            return (
                                                <tr key={elem.id}>
                                                    <td>{elem.ownername}</td>
                                                    <td>{elem.registername}</td>
                                                    <td>{elem.vechiclecolor}</td>
                                                    <td>{elem.slot}</td>
                                                    <td><i className="fa fa-times" aria-hidden="true" onClick={() => { deleteItem(elem.id) }}></i></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default Main