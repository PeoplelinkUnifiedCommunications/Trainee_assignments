import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function PersonInput() {
    const [name, setName] = useState("")



    // useEffect(() => {
    //   return () => {
    //     axios.get("https://jsonplaceholder.typicode.com/users").then(res=>setData(res.data))
    //   };
    // }, []);

    const handleSubmit = (e) =>{
        e.preventDefault()


    const user ={
        name:name,
    }

    axios.post('https://jsonplaceholder.typicode.com/users', {user}).then(res=>{
        console.log(res)
    })
    }

    
  return <div>
      <form onSubmit={handleSubmit}> 
          <label>Person Name:
              <input type='text' name="name"
              onChange={(e)=>setName(e.target.value)}/>
          </label>
          <button type="submit">Add</button>
      </form>
  </div>;
}
