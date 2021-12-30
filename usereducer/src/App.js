import React,{useReducer} from "react"
import './App.css';

const initial=0
const reducer=(state,action)=>{
  switch(action){
    case 'increment':
      return state+1
    case 'decrement':
      return state-1
    case "reset":
      return initial
    default:
      return state
  }
}
function App() {
  const [count,dispatch]=useReducer(reducer,initial)
  return (
    <div className="App App-header">
      <div >Count-{count}</div>
      <button onClick={()=>dispatch('increment')}>Increment</button><br/>
      <button onClick={()=>dispatch('decrement')}>Decrement</button><br/>
      <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  );
}

export default App;
