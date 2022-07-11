const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server} = require("socket.io");


app.use(cors());

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin : "http://localhost:3000",
        methods: ["GET","POST"],
    }
});


io.on("connection",(socket)=>{
    console.log("user connected.....",socket.id);
    socket.on("join_room", (room)=>{
        socket.join(room)
        console.log("id", socket.id, ",   room connected to:", room)
        socket.emit("message", "connected to backend")
    })

    socket.on("send_message",(data)=>{
        socket.to(data.room).emit("receive_message",data)
    })
    socket.on("disconnect",(reason)=>{
        console.log(reason, ":::::::::::;reason::::::::::::")
        console.log("User disconnected",socket.id);
    })

})


server.listen(8001,()=>{
    console.log("server running at port 8001")
})