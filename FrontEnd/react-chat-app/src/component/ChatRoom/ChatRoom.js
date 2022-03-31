import React from 'react'
import {useState, useEffect} from 'react'
// import classes from './ChatRoom.module.css'






const ChatRoom = ({socket, username, roomId }) => {

    const [ chatMessage, setChatMessage] = useState('')

    const SendMessage = async () => {
        if (chatMessage !== '' ) {
        const MessageData = {
            Message: chatMessage,
            User: username,
            ChatRoom: roomId,
            Time: new Date(Date.now()).getHours() 
            + ':' 
            + new Date(Date.now()).getMinutes()
        } 

        await socket.emit('sendMessage', MessageData  )
    }
}

    useEffect( () => {
        socket.on( 'sendToClient', (msgData) => {
            console.log(msgData)
        }) 
    }, [socket])

  return (
      <div>
          <header>
              <h1>
                  Commom Boys!!! Lets Start Chatting!!
              </h1>
              <input 
              
              type='text' placeholder='Enter Message'
              onChange={(event) => setChatMessage(event.target.value)}></input>
              <button onClick={SendMessage} >Send</button>
          </header>
      </div>
    
  )
}

export default ChatRoom