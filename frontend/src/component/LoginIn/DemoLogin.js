import styled from "styled-components"
import { useState } from "react"
//import { useDispatch } from "react-redux"
import { demoLogin } from "../../container/redux/apiCalls"
import { Navigate } from "react-router-dom";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  
`

const Wrapper1 = styled.div`
  width: 40%;
  background: white;
  padding: 30px;
 
`

const Title = styled.h1`
  text-align: center;
`


const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`

const Input = styled.input`
  min-width: 40%;
  padding: 15px;
  margin: 20px;
  font-size: 16px; 
`
const Buttons = styled.div`
  display: flex;
`


const Button1 = styled.button`
  margin-left: 19px;
  padding: 10px 40px;
  font-size: 16px; 
  margin-right: 52%;
`





const DemoLogin = () => {

  //const dispatch = useDispatch()

  const [ username, setUserName ] = useState("");
  const [ password, setPassword ] = useState("")

  const submitForm = (e) => {
    e.preventDefault()

    // demoLogin(dispatch, {username, password});
    return <Navigate to="/chat" />;
    
  }

  

  return (
    <Container>
      <Wrapper1>
        <Title>Demo Login</Title>
        <Form>
          <Input onChange={(e) => setUserName(e.target.value) } placeholder='username' />
          <Input onChange={(e) => setPassword(e.target.value) } type="password" placeholder='password' />
        </Form>
        <Buttons>
           <Button1 onClick={submitForm} >Login</Button1>
          
        </Buttons>
       
      </Wrapper1>
    </Container>
  )
}

export default DemoLogin;