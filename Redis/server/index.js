const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const redis = require("redis");
const { json } = require("express");


app.use(cors());

const server = http.createServer(app);

const client = redis.createClient(
    {
        port: 6379,
        host: "127.0.0.1"//default port and host
    }
)

client.connect()
client.on("connect", () => {
    console.log("Client Connected to Redis..")
})

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
        socket.to(data.room).emit("receive_message", data)
        client.rPush(data.room, JSON.stringify(data))
    })
    socket.on("disconnect", (reason) => {
        console.log(reason, ":::::::::::;reason::::::::::::")
        console.log("User disconnected", socket.id);
    })

})

app.delete("/deleteMsg/", async (req, res) => {
    const msg = req.params.id
    const { roomId, body } = req.query
    const removing = await client.lRem(roomId, 1, body)
    try {
        res.json(removing)
    } catch (error) {
        console.log(error.message)
    }


})

app.get("/:id", async (req, res) => {
    const params = req.params.id
    const data = await client.lRange(params, 0, -1)
    res.send(data)
}, [])


server.listen(8001, () => {
    console.log("server running at port 8001")
})