const app = require('express')()
const http = require('http').createServer(app)

const io = require('socket.io')(http, {
    cors: {
        origin:'*'
    }
})

io.on('connection', socket => {
    socket.on('join_room', (data) => {
        socket.join(data)
    })
    socket.on('send_message', (data) => {
        socket.to(data.room).emit('received_message', data)
    })
})

http.listen(8100, () => {
    console.log('server running')
})