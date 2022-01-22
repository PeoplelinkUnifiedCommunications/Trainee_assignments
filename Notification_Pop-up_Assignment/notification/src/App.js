import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import Display from './Display'

const data = [
  "message 1", "message 2", "message 3", "message 4", "message 5",
]

function App() {

const [msg, setMsg] = useState(data)
const [text, setText] = useState([])

  const PopMsg = () => {
    const randomNum = Math.floor(Math.random() * data.length)

    setMsg(msg)
    const newText = [...text, msg[randomNum]]
    setText(newText)

  }

  useEffect(() => {

    const timer = setTimeout(() => {
      setText(text.slice(1))
    }, 1000)

    return () => clearTimeout(timer)
    
  }, [text])


  return (

    <div className='base_container'>
      <div className='button'>
        <div>
          <button className='btn' onClick={PopMsg}>Show Notification</button>
        </div>
      </div>
      <div>
        {/* {text.map((eachMsg) => <Display details={eachMsg} />)} */}

        <Display details={text} />
      </div>
    </div>
  )

}

export default App