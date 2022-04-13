import React from "react";

function Form({ socket, setUsername, setRoom, setHide, room, username }) {
  const onChangeUser = (e) => {
    setUsername(e.target.value);
  };

  const onChangeRoom = (e) => {
    setRoom(e.target.value);
  };

  const onSubmitDetails = (e) => {
    e.preventDefault();
    if (username && room.trim()) {
      socket.emit("join-room", room.trim());
      setHide(false);
    }
    // setHide(false);
  };
  return (
    <div className="chatBaseContainer flexCol">
      <form className="formContainer flexCol" onSubmit={onSubmitDetails}>
        <h2>Chat app</h2>
        <div className="userContainer">
          <label html="username">User name</label>
          <input
            type="text"
            placeholder="Enter user name"
            id="username"
            onChange={onChangeUser}
          />
        </div>
        <div className="userContainer">
          <label html="roomNo">Room No</label>
          <input
            type="text"
            placeholder="Enter Room No"
            id="roomNo"
            onChange={onChangeRoom}
          />
        </div>
        <button type="submit" className="joinButton">
          Join
        </button>
      </form>
    </div>
  );
}

export default Form;
