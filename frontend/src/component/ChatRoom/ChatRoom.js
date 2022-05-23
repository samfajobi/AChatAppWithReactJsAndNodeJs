import React from 'react'
import {useState, useEffect} from 'react'
import classes from './ChatRoom.module.css'




const ChatRoom = ({socket, username, roomId }) => {

    const [ chatMessage, setChatMessage] = useState('')
    const [ messageList, setMessageList] = useState([])
    const [ newUserMsg, setNewUserMsg]   = useState([])

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
        setMessageList( (list) => [...list, MessageData] )
      

        setChatMessage("")
    }
}

    useEffect( () => {
        socket.on( 'sendToClient', (msgData) => {
            setMessageList( (list) => [...list, msgData] )
            console.log(msgData)
        }) 
        socket.on('newUserMsg', (newUser) => {
            setNewUserMsg( (list) => [...list, newUser])
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
                        <div>
                            <div >
                                <p>{messageContent.Message}</p>
                            </div> 
                            <div className={classes.mesgInfo}>
                                 <div>
                                     <p>{messageContent.User}</p>
                                     <p>{messageContent.Time}</p>
                                </div>           
                            </div>  
                            <div >
                                {newUserMsg.map( (newMsg) => {
                                    return (
                                        <p>{newMsg}</p>
                                    )
                                })}

                            </div>
                        </div>   
                    )
                })}    
            </div>
            <div className={classes.footer}>
                <input className={classes.Input}
                value={chatMessage}
                type='text' placeholder='Enter Message'
                onChange={(event) => setChatMessage(event.target.value)}
                onKeyPress={ (event) => {event.key === 'Enter' && SendMessage()}}></input>
                <button className={classes.button} onClick={SendMessage} >Send</button>
            </div>
       </div>
    
  )
}



export default ChatRoom;