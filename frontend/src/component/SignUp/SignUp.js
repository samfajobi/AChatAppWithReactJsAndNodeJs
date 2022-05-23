import styled from "styled-components";
import { useState } from "react";
//import axios from "axios"
import { axiosInstance } from "../../prodConfig";



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: lightgray;
  justify-content: center;
  align-items: center;
 
`

const Wrapper = styled.div`
  width: 50%;
  background-color: white;
  padding: 20px;
  
`
const Title = styled.h1`
  text-align: center; 
  
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 16px;
  margin: 10px;
`

const Button1 = styled.button`
  margin-top: 10px;
  padding: 10px 40px;
  margin-left: 10px;
  font-size: 15px;
  cursor: pointer;
`
const Button2 = styled.button`
  padding: 10px 30px;
  margin-top: 10px;
  font-size: 15px;
  cursor: pointer;
  
`

const BtnSection = styled.div`
  display: flex;
 align-item: center;
`

const Text = styled.div`
  margin-left: 23%;
  margin-top: 16px;
  margin-right: 15%;
`

const A = styled.a``

const SignIn = () => {

  const [ firstname, setFirstName] = useState("")
  const [ lastname, setLastName] = useState("")
  const [ username, setUserName] = useState("")
  const [ email, setEmail] = useState("")
  const [ password, setPassword] = useState("")
  const [ confirmPass, setConfirmPass] = useState("")


  const submitForm = () => {

    let userData = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: password,    
      confirmPass: confirmPass  
    }

    axiosInstance.post("/signin", userData).
    then( (response) => {
      console.log(`Form has been Submitted Successfully ${response}`)
    }).catch( (err) => {
      console.log(`An Error has occured!!! ${err}`)

    })
  }



  return (
   <Container>
       <Wrapper>
         <Title>SignUp and be a member</Title>
           <Form>
               <Input placeholder='firstname:' onChange={(e) => setFirstName(e.target.value)}/>
               <Input placeholder='lastName:' onChange={(e) => setLastName(e.target.value)} />
               <Input placeholder='username:' onChange={(e) => setUserName(e.target.value)}/>
               <Input placeholder='email:' onChange={(e) => setEmail(e.target.value)}/>
               <Input placeholder='password:' onChange={(e) => setPassword(e.target.value)}/>
               <Input placeholder='confirm password:' onChange={(e) => setConfirmPass(e.target.value)}/>  
           </Form>
           <BtnSection>
             <Button1 onClick={submitForm} >SignUp</Button1>
             <Text>Already a member? <A href='/login'> Login</A></Text>
             <A href="/demologin" ><Button2  >Demo Login</Button2></A>
           </BtnSection>
       </Wrapper>

   </Container>
  )
}

 
export default SignIn;