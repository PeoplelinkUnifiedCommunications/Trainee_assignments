import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Components() {
    const [data, setData] = useState([])

    useEffect(() => {
      return () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>setData(res.data))
      };
    },[]);
    console.log(data)
    
  return <div>
      {
          data.map(each=><li key={each.id}>{each.name}</li>)
      }
  </div>;
}
