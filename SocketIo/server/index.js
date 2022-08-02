// const express = require("express");
// const app = express("");
// const server = require("http").createServer(app)

// const io = require("socket.io")(server,{
//     cors : {
//         origin : "*",
//         methods : ["GET","POST"],
//     },
// });

// io.on("connection",(socket)=>{
//     console.log(socket.id)

//     socket.on("disconnect",()=>{
//         console.log("User disconnected",socket.id);
//     });
// });
// server.listen(5001,()=>{
//     console.log("connected socket port at 5001")
// })





const express = require("express");
const app = express("");
const http = require("http");
const cors = require("cors");
const {Server, Socket} = require("socket.io");
const server = http.createServer(app);
app.use(cors());

const io = new Server(server,{
    cors : {
        origin :"*",
        methods : ["GET","POST"]
    },
});

io.on("connection",(socket)=>{
    console.log(socket.id);
    console.log(`User Connected : ${socket.id}`);
    socket.on("create_room",(createData)=>{
        socket.join(createData);
        console.log(`Room created With : ${socket.id} joined room : ${createData}`)
    });
    socket.on("join_room",(data)=>{
        socket.join(data);
        console.log(`User With ID: ${socket.id} joined room : ${data}`)
    });
    socket.on("disconnect",()=>{
        console.log("User Disconnected",socket.id);
    });
    socket.on("send_message",(data)=>{
        socket.to(data.roomname).emit("receive_message",data)
        console.log(data);
    })
    socket.on("leave_room",(data)=>{
        console.log("User leaved",socket.id);

        socket.leave(data);
    })
});
server.listen(5001,()=>{
    console.log("server running in 5001 port")
})











