import React, { useState } from 'react'

export default function App() {
    let initialCount = 0
    const [count, setCount] = useState(initialCount)
    return (
        <div>
            <center>
                <h1>Count: {count}</h1>
                <button onClick={() => setCount(initialCount)}> Reset </button>&emsp;
                <button onClick={() => setCount(prevCount => prevCount - 1)}> - </button>&emsp;
                <button onClick={() => setCount(prevCount => prevCount + 1)}> + </button>                                
                </center>&emsp;
        </div>
    )
}
