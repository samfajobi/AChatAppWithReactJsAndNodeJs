const express = require('express');
const http = require('http')
const cors = require('cors')
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("../routes/auth") 
//const socketio = require('socket.io') OR 
const { Server } = require('socket.io');
//const path = require("path");



const app = express()  

app.use(express.json());


const corsOptions ={
    origin:'http://localhost:3000/api/auth', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
    methods: ['GET', 'POST']
 }
 
app.use(cors(corsOptions)) // Use this after the variable declaration  



dotenv.config()

mongoose.connect(process.env.DATABASE_URL)
.then( () => console.log('Database Connection was Successful'))
.catch( err => console.log(err))
  


app.get("/api/auth", (req, res) => {
    res.send("Welcome to My Chat-Application")
})


const server = http.createServer(app)  

//const io = socketio(server)  OR
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',  
        methods: ['GET', 'POST']
    }
}) 



app.get("/register", (req, res) => {
    res.send("Welcome here")
})
  

app.use("/api/auth", authRouter)

const port = process.env.PORT || 4000

io.on('connection', (socket) => {
    console.log('New Connection has been established with id ' + socket.id )

    socket.on('joinRoom', (dataId) => {
        socket.join(dataId)
        console.log(`User with Id ${socket.id} joined room ${dataId}`)
    })


    socket.on('sendMessage', (msgData) => {
        socket.to(msgData.ChatRoom).emit('sendToClient', msgData)
        console.log(msgData) 
    })


    socket.on('joinRoom', (msgData) => {
        console.log(`${msgData.User} has Joined the chat Room`)
        socket.broadcast.to(msgData.ChatRoom).emit( 'newUserMsg', `${msgData.User} has join the chat room`)
    })

    socket.broadcast.emit('message,', 'A new has User has Joined the chat room')

    socket.on('disconnect', () => {
        console.log(`A user with id ${socket.id} has disconnected`)
    })
})

 


  

server.listen(process.env.PORT || 5000, () => {
    console.log(`App is running on Port ${port}`)
})