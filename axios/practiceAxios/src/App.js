import './App.css';
// import {useState, useEffect} from 'react';
// import axios from 'axios';
import Components from './Component/Components';
import PersonInput from './Component/PersonInput';



function App() {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   return () => {
  //     axios.get("https://jsonplaceholder.typicode.com/users").then(res=> setData(res.data))
  //   };
  // }, []);
  
  return (
    // <div>
    //   {data.map((each)=><li key={each.id}>{each.title}</li>)}
    // </div>
    <div>
    <PersonInput/>
    <Components/>
    </div>
  );
}

export default App;
