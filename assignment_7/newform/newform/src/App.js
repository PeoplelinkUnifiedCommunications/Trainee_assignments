import { useEffect, useState } from "react"
import axios from 'axios'
import Table from "./Table"

function App() {
  const [users, setUsers] = useState([])
  const [userdata, setUserdata] = useState({})

  useEffect(() => {
    const timer = setInterval(async () => {
      const getResponse = await axios.get("http://172.16.16.216:8010/")
      setUsers(getResponse.data)
    }, 1000);
    return () => clearInterval(timer)
  },[])

  const postData = async () => {
    try {
      const spacedData = userdata.name.trim()
      if (userdata.name && spacedData) {
        const postResponse = await axios.post("http://172.16.16.216:8010/", userdata)
        console.log(postResponse)
      }
    } catch (error) {
      console.log(`Error: ${error.message}`)
    }
  }

  const inputTriggered = (e) => {
    const { name, value } = e.target
    setUserdata({ ...userdata, [name]: value })
  }

  const sumbitTriggered = (e) => {
    e.preventDefault()
    postData()
  }

  return (
    <div className="c">
      <div className="main">

      <div className="b ">
        <form onSubmit={sumbitTriggered}>
          <div>
            <label htmlFor="name" ><b>Name</b></label>
            <br />
            <input placeholder="Enter your Name" id="name" type='text' name="name" value={userdata.name} onChange={inputTriggered}></input>
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="d">
        <Table users={users} />
      </div>
      </div>
    </div>
  );
}

export default App;
