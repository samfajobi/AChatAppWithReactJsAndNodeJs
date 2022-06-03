import React from 'react'
import {useState, useEffect} from 'react'
import classes from './ChatRoom.module.css'
import styled from 'styled-components';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';


const Container = styled.div`
  width: 80%;
  position: absolute;
  top: 6%;
  left: 10%;
  
`
const Header = styled.div`
  background-color: #08DCE5;
  padding : 2px 40px;
 

`

const HeaderInfo = styled.div`
  display: flex;
`

const HeaderIcon = styled.div`
  margin-top: 30px;
  margin-right: 15px;
`


const HeaderTitle = styled.h4`
  font-size: 20px;
  font-weight: 500;

`

const Body = styled.div`
  background-color: lightgray;
`
const MsgContainer = styled.div`
  background-color: lightgray;
  height: 470px;
  padding: 20px;
  display: flex;
`

const Messages = styled.div`
  background-color: darkgray;
  width: 70%;
  margin-left: 30px;
  border-radius: 20px;
 
`

const UserContainer = styled.div`
   background-color: darkgray;
   width: 250px;
   border-radius: 20px;
   padding: 10px;
  
`

const Users = styled.div`

`

const UserHeader = styled.div`
  display: flex;
  
 
`

const UserNo = styled.h3`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
`

const H3 = styled.h3`
  margin-right: 10px;

`

const MsgContent = styled.div`
 
`

const MessageInfo = styled.div`
  

`

const IncMessage = styled.div`
  background-color: white;
  display: flex;
  width: 15%;
  height: 30px;
  margin: 10px 0px 0px 20px;
  padding: 10px 10px;
  border-radius: 0px 40px;
`

const OutMessage = styled.div`
background-color: #08DCE5;
display: flex;
width: 15%;
height: 30px;
margin-left: auto;
margin-right: 20px;
padding: 10px 10px;
border-radius: 0px 40px;

`
const MP = styled.div`
  padding-bottom: 10px;
`

const TP = styled.div`
  margin-left: 40px;
  margin-top: 20px;
  font-size: 13px;
`


const P = styled.p`

`

const Input = styled.input`
  padding: 15px;
  width: 80%;
  margin-bottom: 10px;
  border: none;
  border-radius: 30%;
`

const Button = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  border-radius: 30%;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #08DCE5;
  }
  
`

const SendMessage = styled.div`
  margin-left: 20px;
  margin-top: 38%;
  display: flex;

  @media screen and (max-width: 1440px) and (min-width: 900px){
    margin-top: 40%;

  }
 
`

const ChatRoom = ({socket, username, roomId }) => {

//     const [ chatMessage, setChatMessage] = useState('')
//     const [ messageList, setMessageList] = useState([])
//     const [ newUserMsg, setNewUserMsg]   = useState([])

//     const SendMessage = async () => {
//         if (chatMessage !== '' ) {
//         const MessageData = {
//             Message: chatMessage,
//             User: username,
//             ChatRoom: roomId,
//             Time: new Date(Date.now()).getHours() 
//             + ':' 
//             + new Date(Date.now()).getMinutes()
//         } 

//         await socket.emit('sendMessage', MessageData  )
//         setMessageList( (list) => [...list, MessageData] )
      

//         setChatMessage("")
//     }
// }

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
       <Container>
            <Header>
             <HeaderInfo>
                <HeaderIcon><ChatOutlinedIcon/></HeaderIcon>
                <HeaderTitle>HOC</HeaderTitle>
             </HeaderInfo>
            </Header>
            {/* { messageList.map( (messageContent) => {
                    return ( */}
                   <Body>
                        <MsgContainer>
                            <UserContainer>
                                <UserHeader>
                                    <H3>People </H3>
                                    <UserNo>3</UserNo>
                                </UserHeader>
                                <Users>
                                    <P>Bolarin</P>
                                    <P>Micheal</P>
                                    <P>Bolarin</P>
                                </Users>
                            </UserContainer>
                            <Messages>
                                <MsgContent>
                                    {/* <P>{messageContent.Message}</P> */}
                                </MsgContent> 
                                <MessageInfo>
                                    <IncMessage>
                                        {/* <P>{messageContent.User}</P> */}
                                         <MP>Hello</MP> 
                                        {/* <P>{messageContent.Time}</P> */}
                                         <TP>10:45am</TP> 
                                    </IncMessage>
                                    <OutMessage>
                                      <MP>Hello</MP>
                                      <TP>10:45</TP>
                                    </OutMessage>
                                    <SendMessage>
                                        <Input 
                                        // value={chatMessage}
                                        type='text' placeholder='Enter Message'
                                        // onChange={(event) => setChatMessage(event.target.value)}
                                        //  
                                        >
                                        </Input>
                                        <Button  
                                        // onClick={SendMessage}
                                        >Send</Button>
                                    </SendMessage>  
                                </MessageInfo>  
                                <div >
                                    {/* {newUserMsg.map( (newMsg) => {
                                        return (
                                            <P>{newMsg}</P>
                                        )
                                    })} */}
                                </div> 
                           </Messages>   
                        </MsgContainer>
                       
                    </Body>
                {/* )
                })}     */}  
       </Container>
    
  )
}



export default ChatRoom;