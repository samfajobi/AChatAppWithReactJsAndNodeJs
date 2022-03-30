
import './App.css';
import { useState} from 'react'
import { BrowserRouter as  Router } from 'react-router-dom';
import ChatRoom from './container/ChatRoom/ChatRoom';
import { io }  from 'socket.io-client'

const socket = io.connect('http://localhost:4000')

const App = () => {

  const [userName, setUserName] = useState('')
  const [userRoom, setuserRoom] = useState('')
  const [showChat, setShowChat] = useState(false)

  const joinRoom = () => {
    if ( userName !== '' & userRoom !== '') {
      socket.emit('joinRoom', userRoom)

  }
}
  return (
         <div>
             { showChat ?
             <div>
               <h1>Common boys Lets start Chatting</h1>
             </div>
             :
             <div>
              <h1>House Of Cruise Chat App</h1>
              <h3>Enter your username to join</h3>
              <input type='text' placeholder='Username'
              onChange={(event) => {
                  setUserName(event.target.value)
              }}></input>
              <input type='text' placeholder='Room'
              onChange={(event) => {
                  setuserRoom(event.target.value)
              }}></input>
              <button onClick={joinRoom}>Join Chat</button>
              </div>} 
         </div>
 
  )
  
}

export default App;
