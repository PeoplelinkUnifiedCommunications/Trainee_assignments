import React, { useState, useEffect, useRef } from "react";



function Chats({ socket, token, room, previousMsgs, friendName}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [listOfMessages, setMessagesList] = useState(previousMsgs)
  const messagesEndRef = useRef(null)

  const sendMessage = async () => {
    if (currentMessage !== ""){
      const messageData = {
        room: room,
        author: token,
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
        <p>{friendName.slice(0, (friendName.length-10))}</p>
      </div>

      <div className="chat-body hrztlScroll hideScroll">
          {listOfMessages.map((each) =>
            <div className="message" id={token !== each.author ? "you" : "other"}>
              <div>
                <div className="message-content">
                  <p>{each.message}</p>
                </div>
                <div className="message-meta">
                  <p>{`${each.time}`}</p>
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

export default Chats;