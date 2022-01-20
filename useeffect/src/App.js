import React,{useState,useEffect} from 'react';
import ListItem from './components/ListItem';
import './App.css';

function App() {
  const [dataList,setData]=useState([])
  useEffect(()=>{
    const url="https://jsonplaceholder.typicode.com/posts";
    fetch(url).then(response=>response.json())
    .then(data=>setData(data))
  },[])
  return (
    <div className="App">
      <h1>Fetch API's calls Using useEffect</h1>
      <div className="appointments-list">
            <ul className="un-order">
              <li className="list-item">
                <h1 className='item'>ID</h1>
                <h1>Title</h1>
              </li>
              {dataList && dataList.map(each=><ListItem key={each.id} List={each}/>)}
            </ul>
      </div>
    </div>
  );
}

export default App;
