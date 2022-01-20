
import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';

function ProductListItem() {
  const [list,setList]=useState([])
  const {id}=useParams()
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>setList(data))
  },[id])
  const {title,price,description,category,image}=list
  
  return (
    <div>
      <div className="item-container">
        <div>
            <h1>{title}</h1>
            <p>Price: {price}</p>
            <p>Category: {category}</p>
            
        </div>
        <img src={image} className='images' alt={category} />
      </div>
      <p className='title'>Description: {description}</p>
    </div>
  );
}

export default ProductListItem;
