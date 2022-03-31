const express = require('express');
const http = require('http')
const cors = require('cors')

//const socketio = require('socket.io') OR 
const { Server } = require('socket.io')

const app = express()

const server = http.createServer(app)

//const io = socketio(server)  OR
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3001',
        methods: ['GET', 'POST']
    }
})



const port = process.env.PORT || 4000

io.on('connection', (socket) => {
    console.log('New Connection has been established with id ' + socket.id )

    socket.on('joinRoom', (dataId) => {
        socket.join(dataId)
        console.log(`User with Id ${socket.id} joined room ${dataId}`)
    })

    socket.on('sendMessage', (msgData) => {
        socket.to(msgData.ChatRoom).emit( 'sendToClient', msgData)
        console.log(msgData)
    })

    socket.broadcast.emit('message,', 'A new has User has Joined the chat room')

    socket.on('disconnect', () => {
        console.log(`A user with id ${socket.id} has disconnected`)
    })
})

 
server.listen(port, () => {
    console.log(`App is running on Port ${port}`)
})