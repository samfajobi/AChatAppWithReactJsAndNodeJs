

import { useState} from 'react'
//import { BrowserRouter as  Router } from 'react-router-dom';
import styled from 'styled-components'
import ChatRoom from './component/ChatRoom/ChatRoom';
import { io }  from 'socket.io-client'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import Home from './component/Home/Home';


const socket = io.connect('http://localhost:4000')



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba( 255, 255, 255, 0.6),
    rgba( 255, 255, 255, 0.5)

  ),
  url("https://www.androidauthority.com/wp-content/uploads/2020/08/Signal-Private-Messenger-stock-photo-3.jpg") center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
 
` 

const Wrapper = styled.div`
  background-color: #F7E6EE;
  width: 40%;
  padding: 20px;
  
`
const Title = styled.h1`
  font-weight: 400;
  
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
 
`


const Title2 = styled.h3`
  font-weight: 400;
  font-size: 22px;
  
  
`


const Form = styled.div`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  padding: 10px;
  margin: 10px 5px;
  font-size: 16px;
  border-radius: 20px;
  
`
const Button = styled.button`
  margin: 25px 5px;
  padding: 10px;
  width: 30%;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  border-radius: 30px;
  background-color: #D74990;
  color: #F8F3F5;
  border: none;
  margin-left: 35%;
  font-size: 19px;

  &:hover {
    background-color: #923162 ;
  }

`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #F0BED5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  
`



const UserNameWrapper = styled.div`
  display: flex;
  align-items: center;
  
`


const App = () => {

  const [userName, setUserName] = useState('')
  const [userRoom, setuserRoom] = useState('')
  const [showChat, setShowChat] = useState(false)

  const joinRoom = () => {
    if ( userName !== '' & userRoom !== '') {
      socket.emit('joinRoom', userRoom, userName)
      setShowChat(true)
  }
}
  return (
         <div>
            {!showChat ?
            <Container>
              <Wrapper>
                <TitleWrapper>
                  <Icon><ChatOutlinedIcon/></Icon>
                  <Title>House Of Cruise Chat App</Title>
                </TitleWrapper>
                <UserNameWrapper>
                  <Icon><PersonAddIcon /></Icon>
                  <Title2>Enter your username to join</Title2>
                </UserNameWrapper>
              <Form>
                <Input type='text' placeholder='Username'
              onChange={(event) => {
                  setUserName(event.target.value)
              }} required ></Input>
              <Input type='text' placeholder='Room'
              onChange={(event) => {
                  setuserRoom(event.target.value)
              }} required ></Input>
              </Form>
              
              <Button onClick={joinRoom}>Join Chat</Button>
              
              </Wrapper>
            </Container> :

              <ChatRoom  socket={socket} username={userName} roomId={userRoom}/> }
         </div>
 
  )
  
}

export default App;
