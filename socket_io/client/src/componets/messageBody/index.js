import React, { useState, useEffect } from "react";
import "./index.css";
function MessageBody({ messageDetails, username }) {
  const [bool, setBool] = useState(false);
  const [day, setDay] = useState(null);

  useEffect(() => {
    if (parseInt(messageDetails.time) >= 12) {
      setDay("PM");
    } else if(parseInt(messageDetails.time) <= 12) {
      setDay("AM");
    }
    
  }, []);

  return (
    <div className="chatMessages">
      <div
        className="flexRow"
        id={username === messageDetails.username ? "me" : "other"}
      >
        <span className="messageInfo">{messageDetails.message}</span>
      </div>
      <div
        className="flexRow timeDetails"
        id={username === messageDetails.username ? "me" : "other"}
      >
        <p>{messageDetails.username}</p>
        <p>
          {messageDetails.time} {day}
        </p>
      </div>
    </div>
  );
}

export default MessageBody;
