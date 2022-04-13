import React, { useState } from "react";
import io from "socket.io-client";
import Chat from "../chatOutline";
import Form from "../form";
const socket = io.connect("http://172.16.16.67:7000");
function ChatApp() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [hide, setHide] = useState(true);

  return (
    <div className="chatContainer flexCol">
      {hide ? (
        <Form
          setUsername={setUsername}
          setRoom={setRoom}
          setHide={setHide}
          socket={socket}
          room={room}
          username={username}
        />
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default ChatApp;
