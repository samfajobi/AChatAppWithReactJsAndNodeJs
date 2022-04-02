import React from 'react'
import {useState, useEffect} from 'react'
import classes from './ChatRoom.module.css'




const ChatRoom = ({socket, username, roomId }) => {

    const [ chatMessage, setChatMessage] = useState('')
    const [ messageList, setMessageList] = useState([])

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
        socket.on( 'sendToClient', () => {
            setMessageList((list) => [...list, msgData])
            console.log(msgData)
        }) 
    }, [socket])

  return (
       <div className={classes.ChatWindow}>
            <div className={classes.header}>
              <h1>
                  Commom Boys!!! Lets Start Chatting!!
              </h1>
            </div>
            <div className={classes.body}>
                { messageList.map( (messageContent) => {
                    return (
                        <h1>{messageContent.Message}</h1>
                    )
                })}


            </div>
            <div className={classes.footer}>
                    <input className={classes.Input}
                    type='text' placeholder='Enter Message'
                    onChange={(event) => setChatMessage(event.target.value)}></input>
                    <button className={classes.button} onClick={SendMessage} >Send</button>
             </div>
       </div>
    
  )
}

export default ChatRoom