import React, { useState, useEffect, useRef } from "react";

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