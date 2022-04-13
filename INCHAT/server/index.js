const app = require("express")()
const server = require("http").createServer(app)
const io = require("socket.io")(server, {
    cors: { origin: "*" }
})

io.on("connection", socket => {
    console.log("user:", socket.id, "is connected")
    socket.on("enter_room", (data) => {
        socket.join(data)
    })
    socket.on("send_message", (data) => {
        socket.to(data.room).emit("recieve_message", data)
        console.log(data)

    })
    socket.on("disconnect", () => {
        console.log("user:", socket.id, "is disconnected")
    })
})

server.listen(8888, () => {
    console.log("serveer is live")
})