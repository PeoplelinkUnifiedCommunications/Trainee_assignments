import React, { useState } from 'react'
import io from 'socket.io-client'
import Chat from './Chat'

const socket = io.connect('http://localhost:8100/')

function App() {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')
  const [showChat, setShowChat] = useState(true)

  const joinRoom = (e) => {
    e.preventDefault()
    if (username !== "" && room !== "") {
      socket.emit('join_room', room)
      setShowChat(false)
    }
  }

  return (
    <div className='joinRoomContainer'>
      {showChat ? 
      <form onSubmit={joinRoom} className='joinForm form'>
        <div className='header'>
          <h1>Join Room</h1>
        </div>
        <input className='username' type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input><br />
        <input className='username' type='text' placeholder='RoomID' onChange={(e) => setRoom(e.target.value)}></input><br />
        <button className='joinRoomBtn' type='submit'>Join</button>
      </form>
      :
      <div>
        <Chat socket={socket} username={username} room={room} />
      </div>
      }
    </div>
  );
}

export default App;
