import React, {useState} from 'react';
import './App.css';

function App() {
  // let name ="saikrishna"

const [name, setName]=useState("saikrishna");
const [apper, setApper]=useState(false);
const [num, setnum] =useState(0);
const [values, setvalues] = useState([]);
// values = []
console.log(values)
  // const changeName = ()=> {
  //   console.log("name Changed");
  //   return setName("vamshi")
  // }

  // const increment =()=>{
  //    setnum((prevState)=> prevState +1 )
  //    setnum((prevState)=> prevState +1 )
     
  // }
  // const decrement =()=>{
  //   return setnum(num -1)
  // }


  // const toggle =()=>{
  //   return setApper(!apper)
  // }

  const addnames =()=>{
    // console.log("added")

    setvalues([...values,{id:values.length+1, rahul:name}])
    setName('')
  }


  return (
    <div className="App">
      
      

      <div>
        {/* <h2>hello  i am , {name}</h2>
        <h1>{apper ? name  : "something" }</h1>
        <button onClick ={toggle}>Click Me</button>
        <hr/>
        <hr/>

        <h2>{num}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button> */}

        <hr/>
        <hr/>

        <input type="text" placeholder='Enter here' value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={addnames}>Add names</button>

      </div>

      {
        values.map((items)=>(
          
            <li key={items.id}>{items.name}</li>
        ))
      }

    </div>
  );
}

export default App;
