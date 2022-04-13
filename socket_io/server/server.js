const express = require("express");
const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`user connected with id ${socket.id}`);
  socket.on("join-room", (room) => {
    //   if(room.trim() !== ""){
        socket.join(room);
        console.log(`user with roomId ${room} is connected`);
    //   }
  });
  socket.on("send-message", (payload) => {
    console.log(payload);
    socket.to(payload.room).emit("get-message", payload);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(7000, () => {
  console.log("server is listening at port 7000...");
});
