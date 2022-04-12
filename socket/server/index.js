
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: { origin: "*" }
})

io.on("connection", socket => {

    socket.on("chat", (message) => {
        console.log("payload success", message)
        io.emit("chat", message)
    })
})

server.listen(8000, () => {
    console.log("server is active")
})