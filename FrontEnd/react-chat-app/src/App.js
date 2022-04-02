
import './App.css';
import { useState} from 'react'
import { BrowserRouter as  Router } from 'react-router-dom';
import ChatRoom from './component/ChatRoom/ChatRoom';
import { io }  from 'socket.io-client'

const socket = io.connect('http://localhost:4000')

const App = () => {

  const [userName, setUserName] = useState('')
  const [userRoom, setuserRoom] = useState('')
  const [showChat, setShowChat] = useState(false)

  const joinRoom = () => {
    if ( userName !== '' & userRoom !== '') {
      socket.emit('joinRoom', userRoom)
      setShowChat(true)
  }
}
  return (
         <div>
            {!showChat ?
            <div>
              <h1>House Of Cruise Chat App</h1>
              <h3>Enter your username to join</h3>
              <input type='text' placeholder='Username'
              onChange={(event) => {
                  setUserName(event.target.value)
              }} required ></input>
              <input type='text' placeholder='Room'
              onChange={(event) => {
                  setuserRoom(event.target.value)
              }} required ></input>
              <button onClick={joinRoom}>Join Chat</button>
            </div> :

              <ChatRoom  socket={socket} username={userName} roomId={userRoom}/> }
         </div>
 
  )
  
}

export default App;
