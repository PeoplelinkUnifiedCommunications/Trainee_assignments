import React,{useEffect, useState} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import HookApiCalls from "../../HookApiCalls"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button} from "@mui/material"
import axios from 'axios';

const TotalProducts = () => {
  const { ApiData,loader } = HookApiCalls("http://localhost:8000/productData")
  const [Data,setData]=useState(ApiData)
  const [product,setProduct]=useState("")
  const [count,setCount]=useState("")
  const [isedit,setIsEdit]=useState(false)
  const [editId,setEditId]=useState(null)
  const [action,setAction]=useState(false)
  const [show,setShow]=useState(Data.length===0)
  
  const deleteData=async(id)=>{
    await axios.delete(`http://localhost:8000/productData/${id}`)
    setAction((prev) => ({ action: !prev.action }))
  }
  const postData=async(e)=>{
    e.preventDefault()
    const newProduct={product,count}
    await axios.post('http://localhost:8000/productData',newProduct)
    setAction((prev) => ({ action: !prev.action }))
    setProduct("")
    setCount("")
  }
  const editData=async(id)=>{
    await axios.get(`http://localhost:8000/productData/${id}`)
    .then(resp=>{
      setProduct(resp.data.product)
      setCount(resp.data.count)
      setIsEdit(true)
      setEditId(id)})
  }
  
  const updateData=async()=>{
    const newProduct={product,count}
    await axios.put(`http://localhost:8000/productData/${editId}`,newProduct)
    setAction((prev) => ({ action: !prev.action }))
    setProduct("")
    setCount("")
  }

  useEffect(()=>{
    axios.get("http://localhost:8000/productData")
    .then(resp=> setData(resp.data))
    if (Data.length===0){
      setShow(true)
    }else{
      setShow(false)
    }
  },[action,ApiData])
  
  if (loader) return (
    <div className='dashboardCntnr flexRow jcCntr alignCntr'>
       <center>
       <CircularProgress />
       </center>
    </div>
  )
  const ChangeShow=()=>{
    setShow(false)
  }
  return (
    <div className='dashboardCntnr'>
      {show && <div>
    <center>
      <h1>No Data</h1>
      <Button variant='contained' onClick={ChangeShow}>ADD Some Data</Button>
    </center>
  </div>}
     {!show && <div className="flexCol" style={{ width: "80%" }}>
        <form  className='flexRow jcBetween' onSubmit={postData} style={{marginBottom:"1rem",fontSize:"1.5rem"}}>
          <label>ProductName:
          <input type="text" value={product} onChange={e=>setProduct(e.target.value)}/></label>
          <label>Count:
          <input type="number" value={count} onChange={e=>setCount(e.target.value)}/></label>
          {isedit?<button type='button' onClick={updateData}>Update</button>:<button type='submit'>ADD</button>}
        </form>
        <div className="flexRow jcBetween">
          <h1>ID</h1>
          <h1>ProductName</h1>
          <h1>TotalItems</h1>
          <h1>UPDATE</h1>
          <h1>DELETE</h1>
        </div>
        <hr />
        {Data && Data.map(each =>{
        const delData=()=>{
          deleteData(each.id)
        }
        const editdata=()=>{
           editData(each.id)
        }
        return(
          <div key={each.id}>
            <div className="flexRow jcBetween brdrBottomSM">
              <h1>{each.id}</h1>
              <h1 >{each.product}</h1>
              <h1>{each.count}</h1>
              <h1 onClick={editdata}><EditIcon/></h1>
              <h1 onClick={delData}><DeleteIcon/></h1>
            </div>
          </div>)
        }
        )}
      </div>}
    </div>

  )
};

export default TotalProducts;