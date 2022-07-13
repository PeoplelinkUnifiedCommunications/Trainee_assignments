const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();
app.use(express.json());
// const jwt = require('jsonwebtoken');
const http = require("http");
const { Server } = require("socket.io");
const redis = require("redis");
app.use(cors())
const ChatUsersModel = require("./models/ChatUsers")
const MessagesListModel = require("./models/MessagesList")

const client = redis.createClient(
    {
        port: 6379,
        host: "127.0.0.1"//default port and host
    }
)

client.connect()


const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});


io.on("connection", (socket) => {
    console.log("user connected.....", socket.id);
    socket.on("join_room", (room) => {
        socket.join(room)
        console.log("id", socket.id, ",   room connected to:", room)
        socket.emit("message", "connected to backend")
    })

    socket.on("send_message", (data) => {
        const newMsg = new MessagesListModel(data)
        newMsg.save()
        socket.to(data.room).emit("receive_message", data)
    })
    socket.on("disconnect", (reason) => {
        console.log(reason, ":::::::::::;reason::::::::::::")
        console.log("User disconnected", socket.id);
    })

})



server.listen(8001, () => {
    console.log("server running at port 8001")
})



app.get("/getRoomMessages", async(req,res)=>{
    const room = req.headers["x-token"];
    try{
        const list = await MessagesListModel.find({room : room})
        if(!list){
            res.send("No messages Yet")
        }else{
            res.send(list)
        }
    }
    catch(error){
        res.send("server error")
    }
})



app.get("/contacts", async(req,res)=>{
    const email = req.headers["x-token"];
    try{
        ChatUsersModel.find({Email:{ $ne: email }}).then((response)=>{
            res.send(response)
        }).catch((error)=>{
            console.log(error)
        })
    }catch(error){
        console.log(error)
    }
})


app.post("/create", async(req,res)=>{
    const {email} = req.body
    try{
        const exist = await ChatUsersModel.findOne({Email:email})
        if (!exist){
            const newUser = new ChatUsersModel({Email:email})
            await newUser.save()
            res.send("Created")
        }else{
            res.status(200).send("Exist")
        }  
   }catch(error){
        res.send("Server Error")
    }
   
})




const CONNECTION_URL = 'mongodb+srv://SujithaKonda:13QP1A0245@cluster0.k9ilwcu.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
        app.listen(8050, () => {
            console.log("Server is running on port 8050");
        })
    ).catch(() => {
        console.log("error connecting")
    }
    )