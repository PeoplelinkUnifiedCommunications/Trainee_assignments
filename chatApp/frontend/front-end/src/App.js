import React, { useState } from 'react'
import io from 'socket.io-client'
import Chat from './Chat'

const socket = io.connect('http://172.16.16.216:8100/')

function App() {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')
  const [showChat, setShowChat] = useState(false)

  const joinRoom = (e) => {
    e.preventDefault()
    const uName = username.trim()
    const roomId = room.trim()
    if (uName && roomId) {
      socket.emit('join_room', roomId)
      setShowChat(true)
    }
  }
  return (
    <div className='joinRoomContainer'>
      {showChat ?
        <div>
          <Chat socket={socket} username={username} room={room} />
        </div>
        :
        <form onSubmit={joinRoom} className='joinForm form'>
          <div className='header'>
            <h1>Join Room</h1>
          </div>
          <input className='username' type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input><br />
          <input className='username' type='text' placeholder='RoomID' onChange={(e) => setRoom(e.target.value)}></input><br />
          <button className='joinRoomBtn' type='submit'>Join</button>
        </form>
      }
    </div>
  );
}

export default App;
