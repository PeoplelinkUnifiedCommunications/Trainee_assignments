import React, { useState, useEffect } from 'react'
import Display from './Display'
import "./Notification.css"

// const data = [
//   ["message 1", "color1"], "message 2", "message 3", "message 4", "message 5",
// ]

const data = [
  ["message 1", "color1"], ["message 2", "color2"], ["message 3", "color3"], ["message 4","color4"], ["message 5","color5"]
]

function NotificationApp() {

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
    }, 700)

    return () => clearTimeout(timer)
    
  }, [text])


  return (

    <div className='base_container'>
      <div className='buttonn'>
        <div className="btn-container">
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

export default NotificationApp;