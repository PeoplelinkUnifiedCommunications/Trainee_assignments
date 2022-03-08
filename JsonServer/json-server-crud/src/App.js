import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
// import ListItem from './components/ListItem';
import axios from 'axios'
import './App.css';

function App() {
  const [dataList,setData]=useState([])
  const [edit,setEdit]=useState(false)
  const [n,setN]=useState("")
  
  const postName=(e)=>{
    const newItem={"name":n}
    e.preventDefault()
    createName(newItem)
    setN("")
  }
  const {id}=useParams()
  const updateData=()=>{
    
    updateName(id,{n})
    setN("")
    setEdit(false)
  }
  const createName=async(name)=>{
    await axios.post("http://localhost:5000/data",name)
    getName()
  }
  const delName=async(id)=>{
    console.log(id)
    await axios.delete(`http://localhost:5000/data/${id}`)
    getName()
  }
  const getName=async()=>{
    const url="http://localhost:5000/data";
    await axios.get(url)
    .then(resp=>setData(resp.data))
  }
  const editName=async(id)=>{
    await axios.get(`http://localhost:5000/data/${id}`)
    .then(resp=>setN(resp.data.name))
    setEdit(true)
  }
  const updateName=async(id,name)=>{
    await axios.put(`http://localhost:5000/data/${id}`,name)
    .then(resp=>setData(resp.data))
  }
  useEffect(()=>{
    getName()
  },[])
  console.log(dataList)
  return (
    <div className="App">
      <h1>Fetch API's calls Using useEffect</h1>
      <form onSubmit={postName}>
      <input type="text" value={n} onChange={e=>setN(e.target.value)} />
      {edit?<button type="button" onClick={updateData}>Update</button>:<button type="submit">Submit</button>}
      </form>
      <div className="appointments-list">
            <ul className="un-order">
              <li className="list-item">
                <h1 className='item'>ID</h1>
                <h1>Title</h1>
              </li>
              
              
              {dataList && dataList.map(each=>(
              <div style={{display:"flex"}} key={each.id}>
              <p style={{marginRight:"10px"}}>{each.name}</p>
              <button onClick={()=>{editName(each.id)}}>Edit</button>
              <button onClick={()=>{delName(each.id)}}>Delete</button>
              </div>))}
            </ul>
      </div>
    </div>
  );
}

export default App;