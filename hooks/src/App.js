import React, {useState, useEffect} from 'react'

function App(){
    const [count, setCount] = useState(0)
    useEffect(()=>console.log({count}), [count])
    return(
    <div>
        <h1>enter count {count}</h1>
        <button onClick={()=>setCount(count+1)}>submit</button>
    </div>
    )

}
export default App;