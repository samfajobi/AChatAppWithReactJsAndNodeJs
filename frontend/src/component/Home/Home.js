import styled from "styled-components"




const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba( 255, 255, 255, 0.4),
    rgba( 255, 255, 255, 0.3)
  ),  
  url("https://img2.goodfon.com/wallpaper/nbig/6/a1/krupnym-planom-noutbuk-klaviatura-globus-laptop-kompiuter-sv.jpg") center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
 `

const Wrapper = styled.div`
  
  

`

const HomeInfo = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;
  flex-direction: column;
  
 
 
  
`

const HomeInfoText = styled.div`
  text-align: center;
`

const WelMsg = styled.h1`
  text-align: center;
  
  
`

const DsplyMsg = styled.h2`
  
`

 const A = styled.a`
   text-align: center;
  
 
`

const Button = styled.button`
  padding: 30px 50px;
  font-size: 17px;
  background-color: black;
  color: white;
  cursor: pointer;

  &:hover {
    color: lightgray;
    
  }  
`



const Home = () => {
  return (
    <Container>
     
        <Wrapper>
          <HomeInfo>
            <HomeInfoText>
              <WelMsg>You are Welcome to House of Cruise Chat Room</WelMsg>
              <DsplyMsg>Do You Wanna Chat With The Big Boys?</DsplyMsg>
            </HomeInfoText>
             <A href="/signin">
              <Button>Let's Get Started</Button>
            </A>
          </HomeInfo>   
        </Wrapper>

    
        
    </Container>
  )
}

export default Home;