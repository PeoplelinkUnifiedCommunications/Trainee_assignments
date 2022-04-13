const app = require('express')()    //initialization of express
const http = require('http').createServer(app)  //Turns app instance to a http server


//initializing socket.io and connecting it to the server
const io = require('socket.io')(http, {
    cors: {
        origin:'*'
    }
})


io.on('connection', socket => {
    socket.on('join_room', (data) => {
        socket.join(data)               //subscribe the socket to the room
    })
    socket.on('send_message', (data) => {
        socket.to(data.room).emit('received_message', data)
    })
})

http.listen(8100, () => {
    console.log('server running')
})