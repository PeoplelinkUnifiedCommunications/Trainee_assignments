import React, { useState, useEffect, useRef } from "react";
import Axios from 'axios'
import DeleteIcon from '@material-ui/icons/Delete';

function Chat({ socket, userName, room }) {

  const [currentMessage, setCurrentMessage] = useState("");
  const [listOfMessages, setMessagesList] = useState([])
  const messagesEndRef = useRef(null)

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: userName,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
        id: new Date().valueOf()
      };

      await socket.emit("send_message", messageData);
      setCurrentMessage("")
      setMessagesList(() => [...listOfMessages, messageData])
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(()=>{
    scrollToBottom()
  },[listOfMessages])

  useEffect(()=>{
    Axios.get(`http://localhost:8001/${room}`).then((res)=>{
      const listOfMessages =   res.data.map((each)=>{
        const item = JSON.parse(each)
        return(item)
      })
      setMessagesList(listOfMessages)
    }).catch((err)=>{
      console.log(err,"..............err")
    })
  },[])


  const handleDelete=(each)=>{
    const msgToDelete = listOfMessages.filter((item)=>item.id === each )
    const msg = JSON.stringify(msgToDelete[0]) 
    Axios.delete(`http://localhost:8001/deleteMsg/?roomId=${room}&body=${msg}`).then((res)=>{
      if(res.statusText === 'OK'){
        const newList = listOfMessages.filter((eachItem) => eachItem.id !== each)
        setMessagesList(newList)
    }  
    }).catch((err)=>{
      console.log(".........delete error", err)
    })

  }


  socket.on("receive_message", (data) => {
    setMessagesList(() => [...listOfMessages, data])
  });


  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>

      <div className="chat-body hrztlScroll hideScroll">
          {listOfMessages.map((each) =>
            <div className="message" id={userName !== each.author ? "you" : "other"}>
              <div>
                <div className="message-content">
                  <p>{each.message}</p>
                </div>
                <div className="message-meta">
                  <p>{`${each.time}`}</p>
                  <p>{`, ${each.author}`}</p>
                  <button onClick={()=>{handleDelete(each.id)}} className="deleteIcon" type="button"><DeleteIcon id="deleteIcon" /></button>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button type="button" onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;