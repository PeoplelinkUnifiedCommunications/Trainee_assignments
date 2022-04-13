import React, { useState, useEffect, useRef } from "react";
import MessageBody from "../messageBody";
import "./index.css";

function Chat({ socket, username, room }) {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const messageRef = useRef()

  useEffect(() => {
    socket.on("get-message", (payload) => {
      setAllMessages([...allMessages, payload]);
    });
    scrollToBottom()
  });

  // console.log('hello')

   const scrollToBottom = () => {
    messageRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const onClickSend = async (e) => {
    if (message !== "") {
      const details = {
        room: room,
        username: username,
        message: message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send-message", details);
    //   setAllMessages((list) => [...list, details]);
    setAllMessages(() => [...allMessages, details]);
      setMessage('')
    }
  };
  return (
    <div className="chatComponentContainer flexCol">
      <div className="chatHeader flexCol">
        <h2>Chat Header</h2>
      </div>
      <div className="chatBody">
        {allMessages.map((eachItem, index) => (
          <MessageBody
            key={index}
            messageDetails={eachItem}
            username={username}
          />
        ))}
        <div ref={messageRef}></div>
      </div>
      <div className="chatBottom flexRow">
        <input type="text" value={message} onChange={onChangeMessage} placeholder="Enter Message" onKeyPress={(e) => {e.key === "Enter" && onClickSend()}}/>
        <div className="chatButtonContainer">
          <button onClick={onClickSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
