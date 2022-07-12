import './App.css';
import io from "socket.io-client"
import { useState } from 'react'
import Chats from './Components/Chats';


const socket = io.connect("http://localhost:8001")


function App() {
  const [userName, setUserName] = useState("")
  const [room, setRoom] = useState("")
  const [showChats, setShowChats] = useState(false)

  const joinRoom = (e) => {
    e.preventDefault()
    socket.emit("join_room", room, userName)
    setShowChats(true)
    socket.on("message", (data) => {
      console.log(data)
    })
  }

  return (
    <div className="App">
      {!showChats ? <div className="joinChatContainer">
        <h3>Join A chat</h3>
        <form onSubmit={joinRoom} className="jcCntr">
          <div className='flexCol'>
            <input required onChange={(e) => { setUserName(e.target.value) }} value={userName} type="text" placeholder='Enter Name' />
            <input required onChange={(e) => { setRoom(e.target.value) }} value={room} type="text" placeholder="Room Id" />
            <button type="submit" >Join room</button>
          </div>
        </form>
      </div> :
        <Chats socket={socket} userName={userName} room={room} />
      }
    </div>
  );
}

export default App;


