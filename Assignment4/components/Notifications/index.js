import React, { useState, useEffect } from 'react'

import Display from '../Display'

import './index.css'

const data = [
  "message 1", "message 2", "message 3", "message 4", "message 5",
]

function Notifications() {

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
    }, 2000)

    return () => clearTimeout(timer)
    
  }, [text])


  return (
    <div className='base_container'>
      <div className='Notification-button'>
          <button className='btn' onClick={PopMsg}>Show Notification</button>
      </div>
      <div>
        {/* {text.map((eachMsg) => <Display details={eachMsg} />)} */}
        <Display details={text} />
      </div>
    </div>
  )
}

export default Notifications