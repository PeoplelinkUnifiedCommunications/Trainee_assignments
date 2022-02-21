// import React from 'react'
// import Child from './Components/Child';
// import { useState } from 'react';
// import './App.css';

// export default function App() {
//   const [data, setData] = useState('');
  
//   const parentToChild = () => {
//     setData("This is data from Parent Component to the Child Component.");
//   }
//   return (
//     <div className="App">
//       <Child parentToChild={data}/>
      
//       <div className="child">
//         <button onClick={() => parentToChild()}>Click Parent</button>
//       </div>
//     </div>
//   )
// }



import React from 'react'
import Child from './Components/Child'
import { useState } from 'react'

export default function App() {
  const [data, setData] = useState('');

  const childToParent = (childdata) => {
    setData(childdata);
  }

  return (
    <div className="App">
     {data}
      <div>
        <Child childToParent={childToParent}/>
      </div>
    </div>
  );
}
