import { useEffect, useState } from "react"
import Axios from "axios"



function Home() {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [List, setList] = useState([])
   

    const saveName = (event) => {
        setName(event.target.value)
    }
    const saveLastName = (event) => {
        setLastName(event.target.value)
    }

    const addUser = () => {
        Axios.post("http://localhost:3000/addUser",
            { "name": name, "secondName": lastName })
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        setName("")
        setLastName("")
        addUser()
    }

    const updateUser = (id)=>{
       const newName = prompt("enter Name") 
       const newLastName = prompt("enter last name...")
       Axios.put("http://localhost:3000/update", {"id":id, "name":newName, "secondName": newLastName})

    }

    const deleteUser = (id)=>{
        Axios.delete(`http://localhost:3000/delete/${id}`)
    }


    useEffect(() => {
        Axios.get("http://localhost:3000/getUsers")
            .then(async(response) => {
                const dataRendered = await response.data
                setList(dataRendered)
            })
            .catch(() => { alert("not received") })
    }, [])



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={saveName} placeholder="first name..." value={name} type="text" required />
                <input onChange={saveLastName} placeholder="second name.." value={lastName} type="text" required />
                <div>
                    <button type="submit"> ADD </button>
                </div>
            </form>
            {
                !(List.length === 0 ) && <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>LastName</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {List.map((each)=>
                            <tr key={each._id}>
                                <td>{each.fName}</td>
                                <td>{each.lName}</td>
                                <td><button onClick={()=>{updateUser(each._id)}}>Edit</button></td>
                                <td><button onClick={()=>{deleteUser(each._id)}}>Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table> 
            }

        </div>

    )
}
export default Home









