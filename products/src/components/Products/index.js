import React,{useState,useEffect} from 'react';
import ProductList from '../ProductList';


function Products() {
  const [dataList,setData]=useState([])
  useEffect(()=>{
    const url="https://fakestoreapi.com/products";
    fetch(url).then(response=>response.json())
    .then(data=>setData(data))
  },[])
  return (
    <div className="App">
      <h1>Fetch API's calls Using useEffect</h1>
        <ul className="un-order">
            <li className="list-item">
                <h1 className='item'>ID</h1>
                <h1 className='title'>Title</h1>
                <h1 className='price'>Price</h1>
                <h1 className='category'>Category</h1>
            </li>
            {dataList && dataList.map(each=><ProductList key={each.id} List={each}/>)}
        </ul>
    </div>
  );
}

export default Products;
